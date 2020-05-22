// const path = require('path');
// const serve = require('rollup-plugin-serve');
const configList = require('./rollup.config');
import url from 'rollup-plugin-url'
// const resolveFile = function(filePath) {
//   return path.join(__dirname, '..', filePath)
// }
// const PORT = 3000;

// const devSite = `localhost:${PORT}`;
// const devPath = path.join('example', 'index.html');
// const devUrl = `${devSite}/${devPath}`;

// setTimeout(()=>{
//   console.log(`[dev]: ${devUrl}`)
// }, 1000);

configList.map((config, index) => {

  config.output.sourcemap = true;

  if( index === 0 ) {
    config.plugins = [
      ...config.plugins,
      ...[
        url()
        // serve({
        //   open: true, // 是否打开浏览器
        //   host: 'localhost',
        //   port: PORT,
        //   contentBase: [resolveFile('example'), resolveFile('dist')]
        // })
      ]
    ]
  }
  
  return config;
})


module.exports = configList;