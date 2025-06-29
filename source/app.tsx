import React, { useEffect, useState } from "react";
import { Text } from "ink";
import { Interval } from "./app.types.js";
import beeper from "beeper";
import { beepCount, formatTime, intervalLabel } from "./app.utils.js";

type Props = {
  shortBreak: number;
  longBreak: number;
  noBeep: boolean;
  sessions: number;
  work: number;
};

export default function App({
  shortBreak,
  longBreak,
  noBeep,
  sessions,
  work,
}: Props) {
  const [currentInterval, setCurrentInterval] = useState(Interval.Work);
  const [remainingTime, setRemainingTime] = useState(work * 60 * 1000);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [timerInterval, setTimerInterval] = useState<
    NodeJS.Timeout | undefined
  >();

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      handleIntervalEnd();
    }
  }, [remainingTime]);

  const intervalTime = {
    [Interval.LongBreak]: longBreak * 60 * 1000,
    [Interval.ShortBreak]: shortBreak * 60 * 1000,
    [Interval.Work]: work * 60 * 1000,
  };

  const handleIntervalEnd = () => {
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
  };

  const startNextInterval = (interval: Interval) => {
    !noBeep && beeper(beepCount[interval]);
    setCurrentInterval(interval);
    setRemainingTime(intervalTime[interval]);
  };

  const startTimer = () => {
    setTimerInterval(
      setInterval(() => {
        setRemainingTime(
          (previousRemainingTime) => previousRemainingTime - 1000,
        );
      }, 1000),
    );
  };

  return (
    <Text>
      {intervalLabel[currentInterval]}:{" "}
      <Text color="green">{formatTime(remainingTime)}</Text>
    </Text>
  );
}
