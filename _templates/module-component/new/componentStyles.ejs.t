---
to: modules/<%= moduleName %>/components/<%= componentName %>/<%= componentName %>.module.scss
---
<%- h.render(`${templates}/shared/componentStyles.ejs.t`, { name: componentName }) %>
