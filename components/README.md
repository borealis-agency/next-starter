# Components

This folder should contain common, more shared components. So your typical buttons, form elements, loaders etc. should go here since they really aren't "domain specific" (don't belong in modules).

These should be the more common building blocks and them modules should have more "domain specific" components.

## Generators

There are couple of generators available for components.

### Component

To generate common component, run this command. Make sure to name the component using PascalCase as you would usually name a React component.

```bash
npx hygen component new ComponentName
```

This will generate a component inside `/components` folder. Just remove few lines of boilerplate code and you are good to go!

### Icon component

Since this component is a bit special and dependant on custom SVG sprite generator, it's handled as a special case and has its own generator.

Refer to documentation in `/icons` folder for more details on how to create a dedicated Icon component.