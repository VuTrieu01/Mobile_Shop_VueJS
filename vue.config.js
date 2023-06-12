const { defineConfig } = require("@vue/cli-service");
const dotenv = require("dotenv");
dotenv.config();
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Mobile_Shop_VueJS/'
    : '/'
};
