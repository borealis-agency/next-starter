---
inject: true
to: src/components/index.ts
append: true
skip_if: Modal/useModalDialog
eof_last: false
---
export * from "./Modal/useModalDialog";
