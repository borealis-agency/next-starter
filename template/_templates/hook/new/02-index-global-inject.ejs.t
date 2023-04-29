---
inject: true
to: src/hooks/index.ts
append: true
skip_if: ./<%= name %>;
eof_last: false
---
export * from "./<%= name %>";
