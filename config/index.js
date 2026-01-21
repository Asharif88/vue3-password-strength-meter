// Legacy webpack config replaced during migration to Vite.
// Keep a small config object for backward compatibility.
module.exports = {
  build: {
    assetsRoot: 'dist',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  },
  dev: {
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  }
}
