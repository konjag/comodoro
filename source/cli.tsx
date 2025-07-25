#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
  `
	Usage
	  $ comodoro

	Options
		--name  Your name
		--break, -b  Short break duration in minutes (default: 5)
		--longBreak, -l  Long break duration in minutes (default: 15)
		--noBeep  Disable beeper (default: false)
		--sessions, -s  Number of work sessions before long break (default: 4)
		--work, -w  Work duration in minutes (default: 25)
		--fullDisplay, -f  Render FullDisplay if true, MinimalTimer if false (default: false)

	Examples
	  $ comodoro --name=Jane
	  Hello, Jane
`,
  {
    importMeta: import.meta,
    flags: {
      break: {
        type: 'number',
        default: 5,
        shortFlag: 'b',
        alias: 'b',
      },
      longBreak: {
        type: 'number',
        default: 15,
        shortFlag: 'l',
        alias: 'l',
      },
      noBeep: {
        type: 'boolean',
        default: false,
      },
      sessions: {
        type: 'number',
        default: 4,
        shortFlag: 's',
        alias: 's',
      },
      work: {
        type: 'number',
        default: 25,
        shortFlag: 'w',
        alias: 'w',
      },
      fullDisplay: {
        type: 'boolean',
        default: false,
        shortFlag: 'f',
        alias: 'f',
      },
    },
  },
);

render(
  <App
    shortBreak={cli.flags.break}
    longBreak={cli.flags.longBreak}
    noBeep={cli.flags.noBeep}
    sessions={cli.flags.sessions}
    work={cli.flags.work}
    fullDisplay={cli.flags.fullDisplay}
  />,
);
