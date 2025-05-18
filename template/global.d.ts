declare global {
  // We usually avoid global types, but this one is so common in React that it makes sense to have it
  type ComponentWithChildren<TProps = unknown> = TProps & {
    children: ReactNode;
  };
}

// Need to import or export anything to let TS know this is a module file so that these global types apply
export {};
