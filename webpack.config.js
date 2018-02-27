let HtmlWebpackPlugin = require('html-webpack-plugin'),
   path=require('path');
module.exports = {
  entry:{
    app:path.resolve(__dirname,'src','index.js')
  },
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'src','index.html')
    })
  ],
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        include:path.resolve(__dirname,'src')
      },
      {
        test:/\.less$/,
        loader:['style-loader','css-loader','less-loader'],
        include:path.resolve(__dirname,'src')
      }
    ]
  }
}