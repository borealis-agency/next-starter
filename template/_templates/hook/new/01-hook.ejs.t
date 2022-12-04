---
to: hooks/<%= h.changeCase.camel(name) %>.ts
---
// TODO: Remove this type if this custom hook does not require any arguments
type <%= h.changeCase.pascal(name) %>Options = {
  property: string;
};

export const <%= h.changeCase.camel(name) %> = ({ property }: <%= h.changeCase.pascal(name) %>Options) => {
  return `<%= h.changeCase.camel(name) %> returns this string for now and renders its only argument ${property}`;
};
