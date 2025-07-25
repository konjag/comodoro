import { Box, Text } from 'ink';
import React from 'react';
import { formatTime, intervalLabel } from '../app.utils.js';
import { Interval } from '../app.types.js';

type Props = {
  currentInterval: Interval;
  isPaused: boolean;
  remainingTime: number;
  sessionsCompleted: number;
};

const FullDisplay = ({
  currentInterval,
  isPaused,
  remainingTime,
  sessionsCompleted,
}: Props) => {
  return (
    <Box
      flexDirection="column"
      alignItems="center"
      borderStyle="double"
      borderColor="#FA8072"
      width={50}
      padding={1}
      margin={1}
    >
      <Text>
        <Text color="cyan" bold>
          {intervalLabel[currentInterval].toUpperCase()}
        </Text>
      </Text>
      <Text>
        <Text color={isPaused ? 'yellow' : 'green'} bold>
          {formatTime(remainingTime)}
          {isPaused && ' (paused)'}
        </Text>
      </Text>
      <Box marginTop={1}>
        <Text color="magenta" bold>
          Completed work sessions:{' '}
          {sessionsCompleted + (currentInterval === Interval.Work ? 1 : 0)}
        </Text>
      </Box>
      <Box marginTop={1}>
        <Text dimColor>─────────────────────────────────────────────</Text>
      </Box>
      <Box marginTop={1}>
        <Text color="gray">Press 'p' to pause/resume</Text>
      </Box>
    </Box>
  );
};

export default FullDisplay;
