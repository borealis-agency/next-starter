---
to: src/api/hooks/apiKeys.ts
inject: true
after: <% if (typeOfHook === "query") { %>queries<% } else { %>mutations<% } %>
skip_if: <% if (typeOfHook === "query") { %><%= h.changeCase.camel(name) %>Query<% } else { %><%= h.changeCase.camel(name) %>Mutation<% } %>
---
    <% if (typeOfHook === "query") { %><%= h.changeCase.camel(name) %>Query: "<%= h.changeCase.camel(name) %>Query"<% } else { %><%= h.changeCase.camel(name) %>Mutation: "<%= h.changeCase.camel(name) %>Mutation"<% } %>,
