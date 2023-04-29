---
inject: true
to: src/components/index.ts
append: true
skip_if: Modal/registerModalDialog
eof_last: false
---
export * from "./Modal/registerModalDialog";
