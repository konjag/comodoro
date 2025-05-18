import {Command, Flags} from '@oclif/core'

import {Interval} from '../types/types.js'

export default class Start extends Command {
  static override description = 'Start the Pomodoro timer'
  static override examples = ['<%= config.bin %> <%= command.id %>']
  static override flags = {
    break: Flags.integer({char: 'b', default: 5, description: 'Short break duration in minutes'}),
    'long-break': Flags.integer({char: 'l', default: 15, description: 'Long break duration in minutes'}),
    sessions: Flags.integer({char: 's', default: 4, description: 'Number of work sessions before long break'}),
    work: Flags.integer({char: 'w', default: 25, description: 'Work duration in minutes'}),
  }
  currentInterval: Interval = 'work'
  remainingTime: number = 0
  sessionsCompleted: number = 0
  timerInterval: NodeJS.Timeout | undefined = undefined

  public async run(): Promise<void> {
    const {flags} = await this.parse(Start)

    this.remainingTime = flags.work * 60 * 1000

    // const name = flags.name ?? 'world'
    // this.log(`hello ${name} from D:\\Development\\CLI\\comodoro\\src\\commands\\start.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }

    // Initial display and start
    this.log('Pomodoro Timer Started!')
    this.displayTime()
    this.startTimer()

    // (Optional) Implement pause/resume and stop using process.stdin and event listeners
    // process.stdin.setRawMode(true)
    // process.stdin.resume()
    // process.stdin.setEncoding('utf8')

    // process.stdin.on('data', (key) => {
    //   if (key === 'p') {
    //     // Pause
    //     clearInterval(this.timerInterval)
    //     console.log('\nPaused. Press "r" to resume.')
    //     this.timerInterval = undefined
    //   } else if (key === 'r' && this.timerInterval === null) {
    //     // Resume
    //     console.log('Resumed.')
    //     this.startTimer()
    //   } else if (key === '\u0003') {
    //     // Ctrl+C to exit
    //     console.log('\nTimer stopped.')
    //     process.exit()
    //   }
    // })
  }

  private displayTime() {
    process.stdout.write(`\r${this.currentInterval.toUpperCase()}: ${this.formatTime(this.remainingTime)}`)
  }

  private formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  private async handleIntervalEnd() {
    const {flags} = await this.parse(Start)

    if (this.currentInterval === 'work') {
      this.sessionsCompleted++

      if (this.sessionsCompleted % flags.sessions === 0) {
        this.currentInterval = 'longBreak'
        this.remainingTime = flags.longBreak * 60 * 1000
        // this.log('\nLong break time!')
      } else {
        this.currentInterval = 'shortBreak'
        this.remainingTime = flags.break * 60 * 1000
        // this.log('\nShort break time!')
      }
    } else if (this.currentInterval === 'shortBreak' || this.currentInterval === 'longBreak') {
      this.currentInterval = 'work'
      this.remainingTime = flags.work * 60 * 1000
      // this.log('\nWork time!')
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
