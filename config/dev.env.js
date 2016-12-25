var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL : '"http://yb.upc.edu.cn:8086"',
  APP_URL :'"http://yb.upc.edu.cn/project/ballot/#/"',
  APP_ID  :'"484b6cb2a841acbd"',
  CALLBACK:'"http://f.yiban.cn/iapp54363"'
})
