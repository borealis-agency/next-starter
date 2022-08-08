---
to: modules/<%= moduleName %>/components/<%= componentName %>/<%= componentName %>.tsx
---
<%- h.render(`${templates}/shared/componentBody.ejs.t`, { name: componentName }) %>
