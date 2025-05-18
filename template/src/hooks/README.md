# Hooks

Hooks folder contains custom React hooks.

## Folder structure

Hooks files go into the top level `/hooks` folder without creating specific folders for each hook.

```
└── hooks/
    ├── use-sorting.tsx
    ├── use-window-width.ts
    └── ...
```

## Requirements

Hooks should be named starting with "use". This is a common React convention and basic React hooks follow this (e.g. useState, useEffect, useRef etc.).

One custom hook should be present per file.

## Generator

Hooks do have a custom generator available that will take care of bootstrapping and updating required files.

To generate a custom hook, run this command:

```bash
npx hygen hook new use-custom-hook-name
```

> Replace "use-custom-hook-name" with the name you want to give to your custom hook.

## Component specific hooks

If you want to create a custom hook that is specific to a component (e.g. usePagination, useModal, useWizard), place that in the same folder where the component is located for better co-location of code related to same "domain". Name the file `component-name-hook`.

```
└── components/
    ├── pagination.tsx
    └── pagination-hook.ts
```
