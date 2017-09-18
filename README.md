# :nut_and_bolt: Electron-Vue-TypeScript Starter

The Electron Shell starter that'll have you saying "kids these days" faster than you can type `npm start`.

### Features

* All programming/style/markup languages supported by [Electron Compile](https://github.com/electron/electron-compile#electron-compile):
  * **Programming:** TypeScript, ES6, ES7, CoffeeScript, GraphQL
  * **Style:** Less, Sass, Stylus
  * **Markup/other:** Jade, and Vue
* In particular, TypeScript is tuned to be as strict as possible.
* Good TypeScript code completion in [VS Code](https://code.visualstudio.com/)! (There were some quirks to work out here)
* Packaging for distribution with [Electron Forge](https://github.com/electron-userland/electron-forge):
  * Run `npm run make` to generate distributable packages.
  * Configure forge by modifying `forge.config.js`.
* Hot reloading of everything (courtesy of [Electron Compile](https://github.com/electron/electron-compile))
* VueJS devtools.

### How to use

Simply fork or [download](https://github.com/bdero/electron-vue-typescript-starter/archive/master.zip) this repo, and start hacking away! Before beginning any work, install all dependencies by running `npm install`.

Available commands:
* `npm start`: Runs the application with Electron in development mode. Hot reloading as well as the Vue devtools are enabled in this mode.
* `npm run make`: Builds distributable app packages using [Electron Forge](https://github.com/electron-userland/electron-forge), placing the results in the **out** directory. Note that this will only build packages compatible with the host system running the command; running the build on **macOS** won't produce **GNU/Linux** packages, for example.
* `npm run lint`: Runs `tslint` over all TypeScript files.

### What might I want to customize first?

* This [readme](README.md)
* The [LICENSE](LICENSE)
* The title and description in [package.json](package.json)
* Your TypeScript [linting preferences](tslint.json)
* Your [editor preferences](.editorconfig) (indent size, tabs vs spaces, encoding, etc)
* Your [package export](forge.config.js) settings

### Things to note

There are three different TypeScript configurations located in this repository, and all three of them are important:
* [tsconfig.json](tsconfig.json) contains the configuration used by Visual Studio Code or other editors to configure TypeScript checking. This file pulls in additional type information from the [types](types/) directory, which contains a type definition necessary for proper code completion on imported Vue modules in Visual Studio Code.
* [_compilerc](_compilerc) contains the two type definitions that are actually used when transpiling for use with Electron, one for development (used when running `npm start`) and one for production (used when running `npm run make`).

### Known issues/future work

* SCSS works, but the indented Sass format doesn't build properly.
* It would be nice if this was a vue-cli, cookecutter, or yeoman scaffold.

### Not what you were looking for?

Not interested in using TypeScript with Vue? Prefer to start with something simpler? I recommend checking out the available starter [templates](https://github.com/electron-userland/electron-forge-templates) that [Electron Forge](https://github.com/electron-userland/electron-forge) offers for initializing projects.

Want something with more stuff/customizability/documentation out of the box? Prefer to use Webpack instead of [Electron Compile](https://github.com/electron/electron-compile)? I recommend taking a look at [electron-vue](https://github.com/SimulatedGREG/electron-vue), which allows for scaffolding projects using vue-cli.
