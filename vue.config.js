/* const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  // prerender
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        indexPath: path.join(__dirname, "dist", "index.html"),
        // Required - Routes to render.
        routes: ["/", "/success", "/fail", "/contact"],
      }),
    ],
  },
}; */