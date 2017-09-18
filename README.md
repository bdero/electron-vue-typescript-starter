# Electron-Vue-TypeScript Starter

The Electron Shell starter that'll have you saying "kids these days" faster than you can type `npm start`.

## Features

* All programming/style/markup languages supported by [Electron Compile](https://github.com/electron/electron-compile#electron-compile):
  * **Programming:** TypeScript, ES6, ES7, CoffeeScript, GraphQL
  * **Style:** Less, Sass, Stylus
  * **Markup/other:** Jade, and Vue
* In particular, TypeScript is tuned to be as strict as possible.
* Good TypeScript code completion in [VS Code](https://code.visualstudio.com/)! (There were some quirks to work out here)
* Packaging for distribution with [Electron Forge](https://github.com/electron-userland/electron-forge):
  * Run `npm run make` to generate distributable packages.
  * Configure forge by modifying `forge.config.js`.

## Known issues/future work

* SCSS works, but the indented Sass format doesn't build properly.
* It would be nice if this was a cookecutter or yeoman scaffold.

## Not what you were looking for?

Not interested in using TypeScript with Vue? Prefer to start with something simpler? I would highly recommend checking out the available starter [templates](https://github.com/electron-userland/electron-forge-templates) that [Electron Forge](https://github.com/electron-userland/electron-forge) offers for initializing projects.
