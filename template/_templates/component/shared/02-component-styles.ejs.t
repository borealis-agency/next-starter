---
to: components/<%= name %>/<%= name %>.module.scss
unless_exists: true
---
<%- h.render(`${templates}/shared/component-styles.ejs.t`, { name }) %>
