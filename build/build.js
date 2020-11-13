const webpack = require('webpack')
const config = require('./webpack.prod.conf')
webpack(config, (err, status) => {
    if(err || status.hasErrors()) {
        // 在这里处理错误
        console.error(err)
        return;
    }
    // 处理错误
    console.log(status.toString({
        chunks: false, //构建过程更静默输出
        colors: true // 控制台颜色
    }));
})