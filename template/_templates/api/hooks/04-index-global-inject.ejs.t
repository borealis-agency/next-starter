---
inject: true
to: src/api/hooks/index.ts
append: true
skip_if: "./<%= h.changeCase.camel(fileName) %>"
eof_last: false
---
export * from "./<%= h.changeCase.camel(fileName) %>";
