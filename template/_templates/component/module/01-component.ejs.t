---
to: modules/<%= moduleName %>/components/<%= componentName %>/<%= componentName %>.tsx
unless_exists: true
---
<%- h.render(`${templates}/shared/component-body.ejs.t`, { name: componentName }) %>
