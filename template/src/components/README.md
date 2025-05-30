# Components

This folder should contain common, more shared components. So your typical buttons, form elements, loaders etc. should go here since they really aren't "domain specific" (don't belong in modules).

These should be the more common building blocks and them modules should have more "domain specific" components.

## Folder structure

Component files go into the top level `/components` folder without creating specific folders for each component. We do this because most of the time components have a single file and adding additional nesting just makes the folder structure more complex.

If you have multiple components that are tied to similar things, feel free to prefix them (e.g. input.ts, input-numeric.ts, input-password.ts).

```
└── components/
    ├── button.tsx
    ├── checkbox.tsx
    ├── documents-list.tsx
    ├── input.tsx
    ├── input-numeric.tsx
    ├── typography.tsx
    └── ...
```

## Generators

There are couple of generators available for components.

### Shared component

To generate common (shared) component, run this command. Make sure to name the component using PascalCase as you would usually name a React component.

```bash
npx hygen component shared my-component-name
```

This will generate a component inside `/src/components` folder. Just remove few lines of boilerplate code and you are good to go!

### Icon component

Since this component is a bit special and dependant on custom SVG sprite generator, it's handled as a special case and has its own generator.

Refer to documentation in `/src/icons` folder for more details on how to create a dedicated Icon component.

### Modal manager

To set up [nice-modal-react](https://github.com/eBay/nice-modal-react) as a modal manager, you can run a single command:

```bash
npx hygen modal-setup init
```

Make sure to wrap the app inside `NiceModal.Provider` after in order to be able to use modal manager https://github.com/eBay/nice-modal-react#embed-your-application-with-nicemodalprovider

> Actual UI Modal implementation has to be handled separately. This just creates certain Modal helpers.
