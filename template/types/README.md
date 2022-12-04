# Types

Types folder contains global generic project specific Typescript types.

> For example, component specific types do not go here. Only truly global shared types belong here.

## Requirements

Types folder should have a top level `index.ts` file that exports all type files in this folder.

This allows us to have nice imports like this:

```ts
import { CustomType, CustomEnum } from "@/types";
```

Name type files by domain they belong to (e.g. user.ts, project.ts).

Type files can contain multiple type definitions.

## Example

Here is a small example for a theoretical `user.ts` file:

```ts
type UserPersonalInformation = {
  firstName: string;
  lastName: string;
  age: number;
};

export type User = {
  email: string;
  personalInfo: UserPersonalInformation;
};
```
