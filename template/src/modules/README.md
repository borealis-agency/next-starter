# Modules

Modules are "domain specific" units of code. Instead of dumping all components, all constants and everything else into the root of the project, modules are used to group related code together.

Module can contain basically every type of resource that root of the project can contain. Consider them like "mini projects" inside this bigger project.

### Requirements

If any part of module (component, constant, type, asset etc.) is required in other modules or shared components for example, then it should be moved inside top level folder for that type of file (`/components`, `/constants`, `/types`, `/assets` etc.). Modules ideally shouldn't import resources from other modules since those are then shared resources.

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
    │   │   ├── login-form.tsx
    │   │   └── register-form.tsx
    │   ├── hooks/
    │   │   └── use-current-user-role.ts
    │   ├── types/
    │   │   └── login.ts
    └── other-module/
        ├── components/
        │   └── component-name.tsx
        │   ...
```

> This example includes some random "other-module" as well just to showcase that each module has same structure, but doesn't need to have all the same folders if it doesn't require particular resource (asset, component, type etc.)

## Generators

Only component generator is available at the moment for modules. If any other type of resource needs to be created inside the module, it needs to be created manually.

### Component

To generate a component inside a specific module, run this command. Make sure to name the module with all lowercase letters and name the component using PascalCase.

```bash
npx hygen component module modulename/my-component
```

> This command will create the required module folder if it doesn't exist yet.

If module name contains multiple words (e.g. image editor, video processing), it should be named with hyphens in this generator command:

```bash
npx hygen component module module-name/my-component
```
