# Icons

SVG icons that are used for generating icons SVG sprite go here. Other SVG icons that might not be appropriate for an icon set go into `/assets`.

Name these SVG files without `icon` or `icon-` in their name. So instead of naming the file `icon-share.svg`, it should just be `share.svg`. Using "icon" in the name of these icons is redundant and messes up later code generation and icon usage in code.

### First time setup

For first time setup, there are few steps that are required

First, generate the SVG sprite by using this command:

```bash
npm run generate:iconsprite
```

Second, generate the Icon component that will actually use that SVG sprite:

```bash
npx hygen component icon
```

And that's it! You can style your newly created Icon component how you wish and it should be ready to go.

### Update icons

If you added a new icon and just want to update existing icon set, just run this command:

```bash
npm run generate:iconsprite
```

This will re-generate the icon set by creating new sprite SVG file and updating appropriate types and file paths where needed.
