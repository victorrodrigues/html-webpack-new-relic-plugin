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
    accountID: '121212',
    agentID: '343434',
    trustKey: '565656',
    license: '123456',
    applicationID: '654321'
  })
]  
```

This plugin adds the script for New Relic "Pro + SPA" instrumentation. If you have "Pro" configured under Browser =>
"Application settings", the SPA data will be collected, but dropped by New Relic during ingestion. SPA data will be
ready to be ingested when and if you switch to "Pro + SPA" instrumentation. The plugin option values can be found at the
bottom of the JavaScript snippet under these settings.

This plugin will add the HUGE New Relic script tag to your html file without making your template file ugly. It suits
best using with [html-webpack-template](https://github.com/jaketrent/html-webpack-template) because you actually don't
need a template file.
