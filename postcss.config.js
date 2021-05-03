const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("autoprefixer"),
    purgecss({
      content: ["./src/index.html", "./src/**/*.js"],
      safelist: ["pre", "code", "html", "body", "section"]
    })
  ]
};
