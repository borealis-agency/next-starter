---
to: src/modules/<%= moduleName %>/components/<%= componentName %>/<%= componentName %>.module.scss
unless_exists: true
---
<%- h.render(`${templates}/shared/component-styles.ejs.t`, { name: componentName }) %>
