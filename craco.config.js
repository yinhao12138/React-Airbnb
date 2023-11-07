const path = require("path");
const resolve = (e) => path.resolve(__dirname, e);

const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  //webpack
  webpack: {
    alias: {
      "@": resolve("src"), //webpack配置别名
    },
  },
};
