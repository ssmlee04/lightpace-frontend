/* eslint key-spacing:0 */
export default (config) => ({
  compiler_public_path: `https://dev.lightpace.com/`,
  compiler_fail_on_warning : false,
  compiler_hash_type       : 'chunkhash',
  compiler_devtool         : null,
  compiler_stats           : {
    chunks : true,
    chunkModules : true,
    colors : true
  },
  proxy: {
    enabled: true,
    options: {
      // koa-proxy options
      host: 'https://dev.lightpace.com',
      match: /^\/apis\/.*/
    }
  }
})
