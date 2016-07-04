var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var debug = require('debug');
var config = require('./webpack.config.development');

var koa = require('koa');
var convert = require('koa-convert');
var proxy = require('koa-proxy');

var app = koa();

// app.use(function *(){
//     this.body = "hellos world";
//     // this.body = app; test  return Obj
// }).listen(3000);

// app.use(helloWorld()).listen(1234);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  historyApiFallback: true,
  stats: { colors: true },
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(8080, '127.0.0.1', function(err,result) {
  if (err) {
    console.log(err);
  }
  console.log('Webpack Listening at 127.0.0.1:1234');
});

// app.use(convert(proxy({
//   host:'http://127.0.0.1:8080/js',
//   match: /^\/js\//
// })));

