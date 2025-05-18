# Assets

This folder should contain static assets such as images, videos and font files.

## Images

All images such as illustrations, logos, background images belong here. Make sure to organize them by domain they belong to. For example if you have a row of customer logos, you can add them into `/src/assets/customers` folder to group them together instead of dumping everything into a single top level folder.

## Videos

Videos are more rare compared to images, but if video assets are used inside the app, make sure to apply same logic to them as with image assets.

## Fonts

If custom fonts are used inside the app, those belong in `/src/assets/fonts/%font_name%` folder in order to group these files by font family. Make sure to optimize fonts by using WOFF2 format.

Use a service like [Transfonter](https://transfonter.org/) or [FontSquirrel](https://www.fontsquirrel.com/tools/webfont-generator) to convert font files from other formats into WOFF2 if needed.

Fonts should be included using `@font-face` CSS declarations and different font weights and styles for a font family should be declared using same font family name. Avoid declaring "Roboto" and "Roboto-Bold" if you require a bold version of a font. Great example on how to declare multiple styles for a single font family can be found on CSS Tricks https://css-tricks.com/the-best-font-loading-strategies-and-how-to-execute-them/#aa-loading-fonts-with-self-hosted-fonts
