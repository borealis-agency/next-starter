import clsx, { type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Here we define a custom tailwind-merge config so that `mergeClassNames` can properly merge our custom Tailwind theme classes. Make sure to update this config when adding new values to the custom Tailwind theme in `tailwind.config.ts`.
// Source: https://github.com/dcastil/tailwind-merge/blob/v2.6.0/docs/recipes.md
const customTwMerge = extendTailwindMerge({
  override: {},
});

export const mergeClassNames = (...args: ClassValue[]): string => {
  return customTwMerge(clsx(args));
};
