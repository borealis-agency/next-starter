This is a [Next.js](https://nextjs.org/) project created with [Borealis Next.js Starter Template](https://github.com/borealis-agency/next-starter).

## Requirements

Make sure you have [Volta](https://volta.sh/) installed in order to automatically use proper Node.js and npm versions while working on the project.

All commands in any of the documentation in this project are ran from this project root, unless specified otherwise!

## Getting Started

To get the project running, just run the development server:

```bash
npm run dev
```

> This will install npm dependencies if needed. No need to manually install them.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Run this first and check it out, then go through the rest of this documentation.

## Documentation

Make sure to read this main README file as well as different README files that are contained in other folders. This README contains more general information, but those other README files contain information specific to their folders.

To avoid documentation duplication (and it going out of sync), where appropriate, this main README will point out other docs that should be read for a particular section.

## Generators

This project comes with code generators that are created using [Hygen](https://github.com/jondot/hygen). This allows us to generate components, modules and other things by using simple commands. They help you get started working faster on your code without worrying about creating files, re-exporting files where needed and whatever else you might need to do when creating these common chunks of code.

### Component

Check documentation inside `/components` folder.

### Modules

Check documentation inside `/modules` folder.

### Caveats

There aren't generators for every little thing you might require, but available generators should cover most of the needs in this project.

Generators are here to speed up development, but also standardize some patterns. In case something cannot be standardized, it might not be beneficial to have a generator for that particular case because it might not be used often.

In case some generator is required, feel free to create it using [Hygen](https://github.com/jondot/hygen).

## Icons

Check documentation inside `/icons` folder.

## Code editor setup

To get a better developer experience, there are some recommendations on code editor setup.

### VSCode

In order to get the best experience out of the box, [VSCode](https://code.visualstudio.com/) is recommended, but it's not required. Formatting and linting runs as a separate step outside the editor so your editor choice won't mess up anything.

There are some recommended VSCode extensions set up as part of this project, but you are not forced to install them. If you do install them, you will get a better developer experience with auto code formatting on save and linting warnings/errors directly inside your editor.

### Other code editors

In case you use another code editor, just make sure these integrations/extensions are installed and enabled for better developer experience:

- [ESLint](https://eslint.org/) - checks your JS/TS code and warns you about potential problems
  - it does run on each PR so editor integration isn't necessary, but it's quite helpful to get feedback on your code as early as possible
- [Stylelint](https://stylelint.io/) - similar to ESLint, but for style code (scss, css etc)
  - it does run on each PR so editor integration isn't necessary, but it's quite helpful to get feedback on your code as early as possible
- [Prettier](https://prettier.io/) - formats code. If possible, enable it to run on each file save
  - it does format code during each commit automatically, but it might be helpful to see your code formatted immediately

These aren't required, but they can make your developer experience a lot better while working on this project.
