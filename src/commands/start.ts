import { Command, Flags } from '@oclif/core'
import beeper from 'beeper'

import { Interval } from '../types/types.js'

export default class Start extends Command {
  static override description = 'Start the Pomodoro timer'
  static override examples = ['<%= config.bin %> <%= command.id %>']
  static override flags = {
    break: Flags.integer({ char: 'b', default: 5, description: 'Short break duration in minutes' }),
    longBreak: Flags.integer({ char: 'l', default: 15, description: 'Long break duration in minutes' }),
    sessions: Flags.integer({ char: 's', default: 4, description: 'Number of work sessions before long break' }),
    work: Flags.integer({ char: 'w', default: 25, description: 'Work duration in minutes' }),
    noBeep: Flags.boolean({ default: false, description: 'Disable beeper' })
  }
  currentInterval: Interval = Interval.Work
  remainingTime: number = 0
  sessionsCompleted: number = 0
  timerInterval: NodeJS.Timeout | undefined = undefined

  public async run(): Promise<void> {
    const { flags } = await this.parse(Start)

    this.remainingTime = flags.work * 60 * 1000

    this.displayTime()
    this.startTimer()
  }

  private displayTime() {
    process.stdout.clearLine(0)
    process.stdout.write(`\r${this.getInterval()}: ${this.formatTime(this.remainingTime)}`)
  }

  private formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  private getInterval() {
    switch (this.currentInterval) {
      case Interval.ShortBreak:
        return "Short break"
      case Interval.LongBreak:
        return "Long break"
      case Interval.Work:
        return "Work";
    }
  }

  private async handleIntervalEnd() {
    const { flags } = await this.parse(Start)

    if (this.currentInterval === Interval.Work) {
      this.sessionsCompleted++

      if (this.sessionsCompleted % flags.sessions === 0) {
        // Long break
        this.currentInterval = Interval.LongBreak
        this.remainingTime = flags.longBreak * 60 * 1000
        !flags.noBeep && beeper(3)
      } else {
        // Short break
        this.currentInterval = Interval.ShortBreak
        this.remainingTime = flags.break * 60 * 1000
        !flags.noBeep && beeper(2)
      }
    } else if (this.currentInterval === Interval.ShortBreak || this.currentInterval === Interval.LongBreak) {
      // Work
      this.currentInterval = Interval.Work
      this.remainingTime = flags.work * 60 * 1000
      !flags.noBeep && beeper()
    }

    this.startTimer()
  }

  private startTimer() {
    this.timerInterval = setInterval(() => {
      this.remainingTime -= 1000
      this.displayTime()

      if (this.remainingTime <= 0) {
        clearInterval(this.timerInterval)
        this.handleIntervalEnd()
      }
    }, 1000)
  }
}
