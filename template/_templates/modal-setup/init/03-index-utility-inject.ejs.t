---
inject: true
to: utility/index.ts
append: true
skip_if: ./modalRegister;
eof_last: false
---
export * from "./modalRegister";
