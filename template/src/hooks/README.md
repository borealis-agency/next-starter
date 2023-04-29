# Hooks

Hooks folder contains custom React hooks.

## Requirements

Hooks should be named starting with "use". This is a common React convention and basic React hooks follow this (e.g. useState, useEffect, useRef etc.).

Hooks folder should have a top level `index.ts` file that exports all custom hooks. This is handled automatically by the hook generator.

One custom hook should be present per file.

All of this allows us to have nice imports like this:

```ts
import { useCustomHook, useSomeHook } from "@/hooks";
```

## Generator

Hooks do have a custom generator available that will take care of bootstrapping and updating required files.

To generate a custom hook, run this command:

```bash
npx hygen hook new useCustomHookName
```

> Replace useCustomHookName with the name you want to give to your custom hook.

## Component specific hooks

If you want to create a custom hook that is specific to a component (e.g. usePagination, useModal, useWizard), place that in the same folder where the component is located for better co-location of code related to same "domain".

```
└── components/
    └── Pagination/
        ├── index.ts
        ├── Pagination.tsx
        └── usePagination.ts
```

> Make sure to re-export the newly created hook from index.ts in the same folder. This is done in order to preserve the well defined project structure.
