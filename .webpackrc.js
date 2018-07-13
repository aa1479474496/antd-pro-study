const path = require('path');

export default {
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
  "proxy": {
    "/api": {
      "target": "http://localhost:9999/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/')
  }
}
