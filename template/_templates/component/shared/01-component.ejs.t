---
to: src/components/<%= name %>/<%= name %>.tsx
unless_exists: true
---
<%- h.render(`${templates}/shared/component-body.ejs.t`, { name }) %>
