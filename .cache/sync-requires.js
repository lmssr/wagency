const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/lucmosser/code/lmssr/gatsby/wagency/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/lucmosser/code/lmssr/gatsby/wagency/src/pages/404.js"))),
  "component---src-pages-a-propos-js": hot(preferDefault(require("/Users/lucmosser/code/lmssr/gatsby/wagency/src/pages/a-propos.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/lucmosser/code/lmssr/gatsby/wagency/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/lucmosser/code/lmssr/gatsby/wagency/src/pages/index.js")))
}

