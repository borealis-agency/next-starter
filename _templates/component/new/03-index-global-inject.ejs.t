---
inject: true
to: components/index.ts
append: true
skip_if: ./<%= name %>;
eof_last: false
---
export * from "./<%= name %>/<%= name %>";
