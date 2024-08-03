const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components"),
    "@containers": path.resolve(__dirname, "src/containers"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@modules": path.resolve(__dirname, "src/modules"),
    "@lib": path.resolve(__dirname, "src/lib"),
  })
);
