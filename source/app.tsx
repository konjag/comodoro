import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useInput } from 'ink';
import { Interval } from './app.types.js';
import beeper from 'beeper';
import { beepCount } from './app.utils.js';
import MinimalTimer from './components/MinimalTimer.js';
import FullDisplay from './components/FullDisplay.js';

type Props = {
  shortBreak: number;
  longBreak: number;
  noBeep: boolean;
  sessions: number;
  work: number;
  fullDisplay?: boolean;
};

export default function App({
  shortBreak,
  longBreak,
  noBeep,
  sessions,
  work,
  fullDisplay = false,
}: Props) {
  const [currentInterval, setCurrentInterval] = useState(Interval.Work);
  const [remainingTime, setRemainingTime] = useState(work * 60 * 1000);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const intervalTime = useCallback(
    () => ({
      [Interval.LongBreak]: longBreak * 60 * 1000,
      [Interval.ShortBreak]: shortBreak * 60 * 1000,
      [Interval.Work]: work * 60 * 1000,
    }),
    [longBreak, shortBreak, work],
  );

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(() => {
      setRemainingTime((previousRemainingTime) => previousRemainingTime - 1000);
    }, 1000);
  }, [clearTimer]);

  const startNextInterval = useCallback(
    (interval: Interval) => {
      !noBeep && beeper(beepCount[interval]);
      setCurrentInterval(interval);
      setRemainingTime(intervalTime()[interval]);
    },
    [noBeep, intervalTime],
  );

  const handleIntervalEnd = useCallback(() => {
    if (currentInterval === Interval.Work) {
      const currentCompletedSessions = sessionsCompleted + 1;
      setSessionsCompleted(currentCompletedSessions);

      if (currentCompletedSessions % sessions === 0) {
        startNextInterval(Interval.LongBreak);
      } else {
        startNextInterval(Interval.ShortBreak);
      }
    } else if (
      currentInterval === Interval.ShortBreak ||
      currentInterval === Interval.LongBreak
    ) {
      startNextInterval(Interval.Work);
    }

    startTimer();
  }, [
    currentInterval,
    sessionsCompleted,
    sessions,
    startNextInterval,
    startTimer,
  ]);

  const togglePause = useCallback(() => {
    if (!isPaused) {
      clearTimer();
    } else {
      startTimer();
    }
    setIsPaused(!isPaused);
  }, [isPaused, clearTimer, startTimer]);

  useEffect(() => {
    startTimer();

    return () => {
      clearTimer();
    };
  }, [startTimer, clearTimer]);

  useEffect(() => {
    if (remainingTime <= 0) {
      clearTimer();
      handleIntervalEnd();
    }
  }, [remainingTime, clearTimer, handleIntervalEnd]);

  useInput((input) => {
    if (input === 'p') {
      togglePause();
    }
  });

  return fullDisplay ? (
    <FullDisplay
      currentInterval={currentInterval}
      isPaused={isPaused}
      remainingTime={remainingTime}
      sessionsCompleted={sessionsCompleted}
    />
  ) : (
    <MinimalTimer
      currentInterval={currentInterval}
      isPaused={isPaused}
      remainingTime={remainingTime}
    />
  );
}
