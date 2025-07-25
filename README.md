# Comodoro 🍅

> A Pomodoro timer for the command line built with React and Ink

[![npm version](https://badge.fury.io/js/comodoro.svg)](https://www.npmjs.com/package/comodoro)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/comodoro.svg)](https://nodejs.org)

## Description

Comodoro is a CLI implementation of the Pomodoro Technique, a time management method that uses a timer to break work into focused intervals (traditionally 25 minutes) separated by short breaks. After completing a set number of work sessions, you take a longer break.

### Key Features

- ⏱️ **Customizable timers**: Configure work sessions, short breaks, and long breaks
- 🎨 **Two display modes**: Choose between minimal and full display interfaces
- 🔔 **Audio notifications**: Optional beep sounds to signal interval changes
- ⏸️ **Pause/Resume**: Control your timer with keyboard shortcuts
- 📊 **Session tracking**: Keep count of completed work sessions
- 🎛️ **Flexible configuration**: Adjust all timing parameters via command-line flags

## Screenshots

### Minimal Display Mode
<img width="132" height="31" alt="image" src="https://github.com/user-attachments/assets/da9197c4-5819-48cc-ac84-346d4686ec8e" />

*Simple one-line display showing current interval and remaining time*

### Full Display Mode
<img width="521" height="326" alt="image" src="https://github.com/user-attachments/assets/cd26a1d0-349b-47a6-814c-5beae8e5e2b0" />

*Bordered display with additional information and visual emphasis*

## Installation

### Prerequisites
- Node.js 16 or higher

### Install globally via npm
```bash
npm install --global comodoro
```

### Development installation
```bash
git clone <repository-url>
cd comodoro
npm install
npm run build
```

## Usage

### Basic Usage
Start a Pomodoro session with default settings:
```bash
comodoro
```

### Command-line Options

| Option | Short | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--work` | `-w` | number | 25 | Work duration in minutes |
| `--break` | `-b` | number | 5 | Short break duration in minutes |
| `--longBreak` | `-l` | number | 15 | Long break duration in minutes |
| `--sessions` | `-s` | number | 4 | Number of work sessions before long break |
| `--fullDisplay` | `-f` | boolean | false | Use full display mode instead of minimal |
| `--noBeep` | | boolean | false | Disable audio notifications |

### Interactive Controls
- **`p`** - Pause/resume the current timer

### Examples

**Standard Pomodoro (25/5/15 minutes):**
```bash
comodoro
```

**Custom work and break durations:**
```bash
comodoro --work 30 --break 10 --longBreak 20
```

**Full display mode with custom sessions:**
```bash
comodoro --fullDisplay --sessions 3
```

**Silent mode (no audio notifications):**
```bash
comodoro --noBeep
```

**Quick 15-minute focus session:**
```bash
comodoro -w 15 -b 3 -s 2
```

## How It Works

1. **Work Session**: Focus on your task for the specified duration (default: 25 minutes)
2. **Short Break**: Take a brief break (default: 5 minutes)
3. **Repeat**: Continue the work/short break cycle
4. **Long Break**: After completing the configured number of sessions (default: 4), take a longer break (default: 15 minutes)
5. **Cycle**: Return to work sessions and repeat the process

### Audio Notifications
- **Work session start**: 1 beep
- **Short break start**: 2 beeps  
- **Long break start**: 3 beeps

## Display Modes

### Minimal Timer
- Simple one-line output
- Shows current interval type and remaining time
- Perfect for minimal terminal setups
- Color-coded: green (running), yellow (paused)

### Full Display
- Bordered interface with enhanced visual appeal
- Shows current interval, time, and session progress
- Includes helpful controls reminder
- More prominent status indicators

## Requirements

- Node.js 16 or higher
- Terminal with color support (recommended)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
