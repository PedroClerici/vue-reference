const { resolve } = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
        alias: {
            '@': resolve(__dirname, "src"),
            '@components': resolve(__dirname, "src/components")
        },
        extensions: ['.js', '.vue', '.json']
    }
  },
});
