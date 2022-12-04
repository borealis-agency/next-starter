---
to: modules/<%= moduleName %>/components/<%= componentName %>/<%= componentName %>.tsx
---
<%- h.render(`${templates}/shared/component-body.ejs.t`, { name: componentName }) %>
