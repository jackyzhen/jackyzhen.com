webpackJsonp([0xb48ce3051dcc],{228:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),u=a(s),i=n(15),c=a(i),f=n(78),p=a(f);n(437);var d=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=e.fields.tagSlugs,n=u.default.createElement("div",null,u.default.createElement(c.default,{className:"post-single__home-button",to:"/"},"All Articles")),a=u.default.createElement("div",{className:"post-single__tags"},u.default.createElement("ul",{className:"post-single__tags-list"},t&&t.map(function(t,n){return u.default.createElement("li",{className:"post-single__tags-list-item",key:t},u.default.createElement(c.default,{to:t,className:"post-single__tags-list-item-link"},e.frontmatter.tags[n]))})));return u.default.createElement("div",null,n,u.default.createElement("div",{className:"post-single"},u.default.createElement("div",{className:"post-single__inner"},u.default.createElement("h1",{className:"post-single__title"},e.frontmatter.title),u.default.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:e.html}}),u.default.createElement("div",{className:"post-single__date"},u.default.createElement("em",null,"Published ",(0,p.default)(e.frontmatter.date).format("D MMM YYYY")))),u.default.createElement("div",{className:"post-single__footer"},a,u.default.createElement("hr",null))))},t}(u.default.Component);t.default=d,e.exports=t.default},437:function(e,t){},237:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=n(1),u=a(s),i=n(22),c=a(i),f=n(228),p=a(f),d=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.subtitle,a=this.props.data.markdownRemark,l=a.frontmatter,r=l.title,o=l.description,s=null!==o?o:n;return u.default.createElement("div",null,u.default.createElement(c.default,null,u.default.createElement("title",null,r+" - "+t),u.default.createElement("meta",{name:"description",content:s})),u.default.createElement(p.default,this.props))},t}(u.default.Component);t.default=d;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-template-js-649932096476ced96b0f.js.map