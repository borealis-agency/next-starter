---
inject: true
to: src/modules/<%= moduleName %>/index.ts
append: true
skip_if: ./<%= componentName %>;
eof_last: false
---
export * from "./components/<%= componentName %>/<%= componentName %>";
