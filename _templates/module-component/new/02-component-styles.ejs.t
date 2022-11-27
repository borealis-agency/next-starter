---
to: modules/<%= moduleName %>/components/<%= componentName %>/<%= componentName %>.module.scss
---
<%- h.render(`${templates}/shared/component-styles.ejs.t`, { name: componentName }) %>
