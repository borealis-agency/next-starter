# Modules

Modules are "domain specific" units of code. Instead of dumping all components, all constants and everything else into the root of the project, modules are used to group related code together.

Module can contain basically every type of resource that root of the project can contain. Consider them like "mini projects" inside this bigger project.

### Requirements

Module should have a top level `index.ts` file that exports everything that module makes "publicly" available. Even though we cannot really prevent importing any code from a module, we can at least make the imports nicer if everything from a module is exported from top level `index.ts` inside it.

This allows us to have nice imports like this:

```ts
import { MyComponent, SomeType } from "@/modules/module-name";
```

Each subfolder (except `/assets`) inside a module should have a top level `index.ts` file that re-exports everything contained within it.

Assets are exluded from this since assets inside a module are usually used within that module only. If an asset is required in other places, then it should be moved inside top level `/assets` folder. Same goes for other types of resources (components, constants, types etc.). If they are required in multiple modules, they should be moved inside the root of the project. Modules ideally shouldn't import resources from other modules.

## Structure

Modules should (mostly) follow the structure of the root of the project. Since these are "mini projects", they can contain their own assets, components, constants, types etc.

Here is a simple directory structure example of an "authentication" module that should contain code regarding user login, registration etc.

```
└── modules/
    ├── authentication/
    │   ├── assets/
    │   │   └── images/
    │   │       └── user-avatar-placeholder.png
    │   ├── constants/
    │   │   └── login.ts
    │   ├── components/
    │   │   ├── LoginForm/
    │   │   │   ├── LoginForm.module.scss
    │   │   │   └── LoginForm.tsx
    │   │   └── RegisterForm/
    │   │       ├── RegisterForm.module.scss
    │   │       └── LoginForm.tsx
    │   ├── hooks/
    │   │   └── useCurrentUserRole.ts
    │   ├── types/
    │   │   └── login.ts
    │   └── index.ts
    └── other-module/
        ├── components/
        │   └── ComponentName/
        │       ├── ComponentName.module.scss
        │       ├── ComponentName.tsx
        │       ...
        └── index.ts
```

> This example includes some random "other-module" as well just to showcase that each module has same structure, but doesn't need to have all the same folders if it doesn't require particular resource (asset, component, type etc.)

Please note that folders such as `/constants` and `/types` don't have an `index.ts` file inside them. This is in contrast to root project structure where each of these folders should have its own `index.ts` file to provide nicer imports. Modules don't require this because modules have their own top level `index.ts` from which they should export everything they want to expose "publicly".

## Generators

Only component generator is available at the moment for modules. If any other type of resource needs to be created inside the module, it needs to be created manually.

### Component

To generate a component inside a specific module, run this command. Make sure to name the module with all lowercase letters and name the component using PascalCase.

```bash
npx hygen component module modulename/ComponentName
```

> This command will create the required module folder if it doesn't exist yet.

If module name contains multiple words (e.g. image editor, video processing), it should be named with hyphens in this generator command:

```bash
npx hygen component module module-name/ComponentName
```
