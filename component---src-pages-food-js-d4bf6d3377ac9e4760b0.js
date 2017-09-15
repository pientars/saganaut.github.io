webpackJsonp([32548347793320],{"./node_modules/react-photo-gallery/lib/Gallery.js":function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),a=function(e,t,r){for(var o=!0;o;){var n=e,i=t,l=r;o=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,i);if(void 0!==a){if("value"in a)return a.value;var s=a.get;if(void 0===s)return;return s.call(l)}var u=Object.getPrototypeOf(n);if(null===u)return;e=u,t=i,r=l,o=!0,a=u=void 0}},s=r("./node_modules/react/react.js"),u=o(s),c=r("./node_modules/prop-types/index.js"),d=o(c),f=r("./node_modules/react-photo-gallery/lib/Photo.js"),p=o(f),h=r("./node_modules/react-photo-gallery/lib/utils.js"),g=function(e){function t(){n(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.state={containerWidth:0},this.handleResize=this.handleResize.bind(this),this.handleClick=this.handleClick.bind(this)}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.setState({containerWidth:Math.floor(this._gallery.clientWidth)}),window.addEventListener("resize",this.handleResize)}},{key:"componentDidUpdate",value:function(){this._gallery.clientWidth!==this.state.containerWidth&&this.setState({containerWidth:Math.floor(this._gallery.clientWidth)})}},{key:"shouldComponentUpdate",value:function(){return!0}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize,!1)}},{key:"handleResize",value:function(e){this.setState({containerWidth:Math.floor(this._gallery.clientWidth)})}},{key:"handleClick",value:function(e,t){var r=t.index,o=this.props,n=o.photos,i=o.onClick;i(e,{index:r,photo:n[r],previous:n[r-1]||null,next:n[r+1]||null})}},{key:"render",value:function(){var e=this,t=this.props.ImageComponent,r=void 0===t?p.default:t,o=this.state.containerWidth-1,n=this.props,i=n.photos,l=n.columns,a=n.margin,s=n.onClick,c=(0,h.computeSizes)({width:o,columns:l,margin:a,photos:i});return u.default.createElement("div",{className:"react-photo-gallery--gallery"},u.default.createElement("div",{ref:function(t){return e._gallery=t}},c.map(function(t,o){t.width,t.height;return u.default.createElement(r,{key:t.key||t.src,margin:a,index:o,photo:t,onClick:s?e.handleClick:null})})),u.default.createElement("div",{style:{content:"",display:"table",clear:"both"}}))}}]),t}(s.PureComponent);g.propTypes={photos:d.default.arrayOf(f.photoPropType).isRequired,onClick:d.default.func,columns:d.default.number,margin:d.default.number,ImageComponent:d.default.func},g.defaultProps={columns:3,margin:2},t.default=g,e.exports=t.default},"./node_modules/react-photo-gallery/lib/Photo.js":function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),s=function(e,t,r){for(var o=!0;o;){var n=e,i=t,l=r;o=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,i);if(void 0!==a){if("value"in a)return a.value;var s=a.get;if(void 0===s)return;return s.call(l)}var u=Object.getPrototypeOf(n);if(null===u)return;e=u,t=i,r=l,o=!0,a=u=void 0}},u=r("./node_modules/react/react.js"),c=o(u),d=r("./node_modules/prop-types/index.js"),f=o(d),p={display:"block",float:"left"},h={cursor:"pointer"},g=function(e){function t(){n(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.handleClick=this.handleClick.bind(this)}return i(t,e),a(t,[{key:"handleClick",value:function(e){var t=this.props,r=t.onClick,o=t.index,n=t.photo;r(e,{photo:n,index:o})}},{key:"render",value:function(){var e=this.props,t=e.photo,r=e.onClick,o=e.margin;return p.margin=o,c.default.createElement("img",l({style:r?l({},p,h):p},t,{onClick:r?this.handleClick:null}))}}]),t}(u.PureComponent),y=f.default.shape({src:f.default.string.isRequired,width:f.default.number.isRequired,height:f.default.number.isRequired,alt:f.default.string,title:f.default.string,srcSet:f.default.array,sizes:f.default.array});t.photoPropType=y,g.propTypes={index:f.default.number,onClick:f.default.func,photo:y},t.default=g},"./node_modules/react-photo-gallery/lib/utils.js":function(e,t){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e){var t=e.width,r=e.height;return t/r}function n(e){var t=e.photos,n=e.columns,l=e.width,a=e.margin;if(!l)return[];var s=t.reduce(function(e,t,o){var i=Math.floor(o/n);return e[i]=e[i]?[].concat(r(e[i]),[t]):[t],e},[]),u=s.length-1,c=s.map(function(e,t){var r=e.reduce(function(e,t){return e+o(t)},0),s=l-e.length*(2*a),c=t!==u||e.length>1?s/r:s/n/r;return e.map(function(e){return i({},e,{height:c,width:c*o(e)})})});return c.reduce(function(e,t){return[].concat(r(e),r(t))},[])}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.ratio=o,t.computeSizes=n},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Astraeus/Documents/repos/website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Astraeus/Documents/repos/website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Astraeus/Documents/repos/website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/Astraeus/Documents/repos/website/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/Astraeus/Documents/repos/website/node_modules/babel-preset-stage-0/lib/index.js","/Users/Astraeus/Documents/repos/website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/food.js':function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=r("./node_modules/react/react.js"),s=o(a),u=r("./node_modules/gatsby-link/index.js"),c=(o(u),r("./node_modules/react-photo-gallery/lib/Gallery.js")),d=o(c),f=r("./src/layouts/navigoat.js"),p=o(f),h=function(e){function t(){return n(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return s.default.createElement("div",null,s.default.createElement(p.default,{active_tab:"gallery"}),s.default.createElement(d.default,{photos:g,onClick:this.openLightbox}))},t}(s.default.Component);t.default=h;var g=[{src:"../imgs/gallery/food/IMG_2875.jpg",width:820,height:520,alt:"image 1"},{src:"../imgs/gallery/food/IMG_2269.jpg",width:547,height:650,alt:"image 2"},{src:"../imgs/gallery/food/IMG_2259.jpg",width:821,height:482,alt:"image 3"},{src:"../imgs/gallery/food/IMG_1989.jpg",width:821,height:616,alt:"image 4"},{src:"../imgs/gallery/food/IMG_1944.JPG",width:821,height:616,alt:"image 6"},{src:"../imgs/gallery/food/IMG_1920.JPG",width:821,height:616,alt:"image 7"},{src:"../imgs/gallery/food/IMG_1889.JPG",width:821,height:616,alt:"image 8"},{src:"../imgs/gallery/food/IMG_1402.JPG",width:821,height:616,alt:"image 9"},{src:"../imgs/gallery/food/IMG_0891.jpg",width:821,height:616,alt:"image 10"},{src:"../imgs/gallery/food/IMG_0839.JPG",width:821,height:616,alt:"image 11"},{src:"../imgs/gallery/food/IMG_0828.jpg",width:821,height:616,alt:"image 12"}];e.exports=t.default}});
//# sourceMappingURL=component---src-pages-food-js-d4bf6d3377ac9e4760b0.js.map