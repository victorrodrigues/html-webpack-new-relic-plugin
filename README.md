New Relic script tag for the HTML Webpack Plugin
========================================

Add new relic script tag using [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin).

Installation
------------
You must be running webpack on node 8.x or higher

Install the plugin with yarn:
```shell
$ yarn -D html-webpack-new-relic-plugin
```

Or npm:
```shell
$ npm install --save-dev html-webpack-new-relic-plugin
```

Basic Usage
-----------
Require the plugin in your webpack config:

```javascript
var HtmlWebpackNewRelicPlugin = require('html-webpack-new-relic-plugin');
```

Add the plugin to your webpack config:

```javascript
plugins: [
  new HtmlWebpackPlugin(),
  new HtmlWebpackNewRelicPlugin({
    license: '123456',
    applicationID: '123456'
  })
]  
```

This will add the HUGE New Relic script tag to your html file without making your template file ugly. It suits best
using with [html-webpack-template](https://github.com/jaketrent/html-webpack-template) because you actually don't need
an template file.