# Borealis Next.js starter

This template repo is used to quickly boostrap Next.js projects for use in Borealis.

This project isn't intended to be open source and for people outside of Borealis to update/upgrade it. We just made the repo public for ease of use.

If you wish to use the template, feel free to do it, but it might have things baked in that you don't like so keep that in mind. This template assumes some specific libraries and folder structure are used. This works for us, but it might not fit your workflow and needs.

## Repo structure

Template that is actually used for new project initialization is inside `/template` folder. This is done on purpose to split the general instructions for using this template generator and actual instructions you'll need when project is bootstrapped. Mixing these two instructions might cause confusion so splitting them made sense.

## Requirements

Clone command assumes you have [Volta](https://volta.sh/) installed. Volta is used for easy Node.js and npm version management and the ability to run this command with appropriate Node.js and npm versions.

> If you don't have Volta installed, please make sure you are using Node.js v18 and npm v9 when "cloning" this template. Volta is still highly advised because it makes all of this way easier.

## Getting Started

Please make sure to follow all steps here. Each step is important to properly set up the project.

### Create you project

Just run this single command to start. There is no need to create project folder before starting or anything else. Just run this in a folder where you want the project folder to be created.

Create project with this template using [create-next-app](https://www.npmjs.com/package/create-next-app) command: 

```bash
volta run --node 18 --npm 9 npx --yes create-next-app@latest --use-npm --example https://github.com/borealis-agency/next-starter/tree/main/template
```

This will ask you for your project name and will create a folder with that name for you. If you have a project called "Petfood Webshop", just type "petfood-webshop" and that folder will automatically be created.

> This command will make sure that this template is created using Node.js v18 and npm v9. This is important because this command also installs npm dependencies and we want to install these with proper Node.js and npm versions.

> Ignore commands printed out by this step, they are generic commands from create-next-app. Newly created project has its own documentation.

### Run initial setup script

To initialize some packages that cannot be initialized during clone phase, please run this command inside the newly created project folder:

```bash
node scripts/postClone.mjs
```

And that's it, further instructions are contained inside the folder you just created with this command.

## Allow VSCode to use specific Typescript version

When opening the generated project inside VSCode for the first time, VSCode might ask to use project specific Typescript version. Please click "Allow" if you see this popup.
