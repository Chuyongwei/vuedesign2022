module.exports = {
    // baseUrl: './',
    publicPath:process.env.NODE_ENV === "production"?"/film/":"/",
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        host: "localhost",
        port: 3000,
        open: true,
        proxy: {
            '/admin': {
                target: 'http://localhost:8888/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
                secure: false
            }
        }
    }
    // devServer:{
    //     host: '192.168.137.1',
    //     port: 8082,
    //     proxy: null, // string | Object
    //     before: app => {}
    // }

}