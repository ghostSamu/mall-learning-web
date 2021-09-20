// // vue.config.js
// const path = require('path')
// const webpack = require('webpack')
//
// function resolve(dir) {
//     return path.join(__dirname, dir)
// }
//
module.exports = {
    // sass-loader
    // https://vue-loader.vuejs.org/zh/guide/pre-processors.html#sass
    // css: {
    //     extract: false,
    //     sourceMap: true,
    //     loaderOptions: {
    //         sass: {
    //             // https://webpack.docschina.org/loaders/sass-loader/#options
    //             // https://webpack.docschina.org/loaders/sass-loader/#additionaldata
    //             // https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
    //             additionalData: '@import "~@/style/index.scss";'
    //         }
    //     }
    // },
    chainWebpack: config => {
        const svgRule = config.module.rule('svg');
        // 清空默认svg规则
        svgRule.uses.clear();
        //针对svg文件添加svg-sprite-loader规则
        svgRule
            .test( /\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            });
    }
}

