# Providers

Put application global React Context providers here. If you require "module/domain" specific providers, put them inside the appropriate `/modules` folder.

## Folder structure

Provider files go into the top level `/providers` folder without creating specific folders for each of them. Split up Context and Provider into different files to make sure React Refresh can work optimally.

Context file should hold the actual Context, Context type and a custom hook (or hooks) that is used to retrieve the Context value and validate that it exists. Context provider file should export the actual Provider and handle logic for that Context.

```
└── components/
    ├── current-user-context.ts
    ├── current-user-provider.ts
    ├── user-settings-context.ts
    ├── user-settings-provider.tsx
    └── ...
```

## Example

Here is an example Context that holds sidebar expanded/collapsed state to allow user to easily control that behavior and let application code share it without prop drilling.

```ts
// `sidebar-state-context.ts`
"use client";

import { createContext, useContext } from "react";

export type SidebarCookieValue = "collapsed" | "expanded";

export type SidebarStateContextValue = {
  sidebarState: SidebarCookieValue;
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
};

export const SidebarStateContext = createContext<SidebarStateContextValue | undefined>(undefined);

// Used for debugging purposes so that name properly appears in React Dev Tools inside browser Dev Tools
SidebarStateContext.displayName = "SidebarStateContext";

export const useSidebarState = () => {
  const context = useContext(SidebarStateContext);

  if (context === undefined) {
    throw new Error("useSidebarState must be used within a SidebarStateProvider");
  }

  return context;
};
```

```tsx
// `sidebar-state-provider.tsx`
"use client";

import { type ReactNode, useContext, useEffect, useMemo } from "react";
import { useCookies } from "react-cookie";

import { type SidebarCookieValue, SidebarStateContext, type SidebarStateContextValue } from "./sidebar-state-context";

export const SidebarStateProvider = ({ children }: ComponentWithChildren) => {
  // Implementation details would go here

  const providerValue: SidebarStateContextValue = useMemo(() => {
    return {

    };
  }, []);

  return <SidebarStateContext.Provider value={providerValue}>{children}</SidebarStateContext.Provider>;
};

export const useSidebarState = () => {
  const context = useContext(SidebarStateContext);

  if (context === undefined) {
    throw new Error("useSidebarState must be used within a SidebarStateProvider");
  }

  return context;
};
```
