import { Interval } from './app.types.js';

export const formatTime = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0',
  )}`;
};

export const intervalLabel = {
  [Interval.LongBreak]: 'Long break',
  [Interval.ShortBreak]: 'Short break',
  [Interval.Work]: 'Work',
};

export const beepCount = {
  [Interval.LongBreak]: 3,
  [Interval.ShortBreak]: 2,
  [Interval.Work]: 1,
};
