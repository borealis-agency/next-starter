---
to: src/modules/<%= moduleName %>/components/<%= componentName %>.tsx
unless_exists: true
---
<%- h.render(`${templates}/shared/component-body.ejs.t`, { name: componentName }) %>
