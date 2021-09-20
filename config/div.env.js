'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"http://localhost:8080"'
})

//
// module.exports = merge({
//     NODE_ENV: '"development"',
//     BASE_API: '"http://localhost:8080"',
//     BASE_URL: 'http://127.0.0.1:3000/mock/11'
// })
