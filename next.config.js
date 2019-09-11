const Css = require('@zeit/next-css')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = Css({
  webpack: (config) => {
    config.plugins.push(new MonacoWebpackPlugin({
			languages: ["typescript", "javascript", "css"],
    }))
    return config
  }
})