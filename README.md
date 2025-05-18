comodoro
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/comodoro.svg)](https://npmjs.org/package/comodoro)
[![Downloads/week](https://img.shields.io/npm/dw/comodoro.svg)](https://npmjs.org/package/comodoro)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g comodoro
$ comodoro COMMAND
running command...
$ comodoro (--version)
comodoro/0.0.0 win32-x64 node-v22.15.1
$ comodoro --help [COMMAND]
USAGE
  $ comodoro COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`comodoro hello PERSON`](#comodoro-hello-person)
* [`comodoro hello world`](#comodoro-hello-world)
* [`comodoro help [COMMAND]`](#comodoro-help-command)
* [`comodoro plugins`](#comodoro-plugins)
* [`comodoro plugins add PLUGIN`](#comodoro-plugins-add-plugin)
* [`comodoro plugins:inspect PLUGIN...`](#comodoro-pluginsinspect-plugin)
* [`comodoro plugins install PLUGIN`](#comodoro-plugins-install-plugin)
* [`comodoro plugins link PATH`](#comodoro-plugins-link-path)
* [`comodoro plugins remove [PLUGIN]`](#comodoro-plugins-remove-plugin)
* [`comodoro plugins reset`](#comodoro-plugins-reset)
* [`comodoro plugins uninstall [PLUGIN]`](#comodoro-plugins-uninstall-plugin)
* [`comodoro plugins unlink [PLUGIN]`](#comodoro-plugins-unlink-plugin)
* [`comodoro plugins update`](#comodoro-plugins-update)

## `comodoro hello PERSON`

Say hello

```
USAGE
  $ comodoro hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ comodoro hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/CLI/comodoro/blob/v0.0.0/src/commands/hello/index.ts)_

## `comodoro hello world`

Say hello world

```
USAGE
  $ comodoro hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ comodoro hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/CLI/comodoro/blob/v0.0.0/src/commands/hello/world.ts)_

## `comodoro help [COMMAND]`

Display help for comodoro.

```
USAGE
  $ comodoro help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for comodoro.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.28/src/commands/help.ts)_

## `comodoro plugins`

List installed plugins.

```
USAGE
  $ comodoro plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ comodoro plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/index.ts)_

## `comodoro plugins add PLUGIN`

Installs a plugin into comodoro.

```
USAGE
  $ comodoro plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into comodoro.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the COMODORO_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the COMODORO_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ comodoro plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ comodoro plugins add myplugin

  Install a plugin from a github url.

    $ comodoro plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ comodoro plugins add someuser/someplugin
```

## `comodoro plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ comodoro plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ comodoro plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/inspect.ts)_

## `comodoro plugins install PLUGIN`

Installs a plugin into comodoro.

```
USAGE
  $ comodoro plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into comodoro.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the COMODORO_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the COMODORO_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ comodoro plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ comodoro plugins install myplugin

  Install a plugin from a github url.

    $ comodoro plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ comodoro plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/install.ts)_

## `comodoro plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ comodoro plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ comodoro plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/link.ts)_

## `comodoro plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ comodoro plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ comodoro plugins unlink
  $ comodoro plugins remove

EXAMPLES
  $ comodoro plugins remove myplugin
```

## `comodoro plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ comodoro plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/reset.ts)_

## `comodoro plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ comodoro plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ comodoro plugins unlink
  $ comodoro plugins remove

EXAMPLES
  $ comodoro plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/uninstall.ts)_

## `comodoro plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ comodoro plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ comodoro plugins unlink
  $ comodoro plugins remove

EXAMPLES
  $ comodoro plugins unlink myplugin
```

## `comodoro plugins update`

Update installed plugins.

```
USAGE
  $ comodoro plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/update.ts)_
<!-- commandsstop -->
