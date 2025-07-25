import React from 'react';
import { Text } from 'ink';
import { Interval } from '../app.types.js';
import { formatTime, intervalLabel } from '../app.utils.js';

type Props = {
  currentInterval: Interval;
  isPaused: boolean;
  remainingTime: number;
};

const MinimalTimer = ({ currentInterval, isPaused, remainingTime }: Props) => {
  return (
    <Text>
      {intervalLabel[currentInterval]}:{' '}
      <Text color={isPaused ? 'yellow' : 'green'}>
        {formatTime(remainingTime)} {isPaused && '(paused)'}
      </Text>
    </Text>
  );
};

export default MinimalTimer;
