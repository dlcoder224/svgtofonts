const svgtofont = require('svgtofont')
const path = require('path')
svgtofont({
  src: path.resolve(process.cwd(), './svg - 官网'), // svg 图标目录路径
  dist: path.resolve(process.cwd(), './iconfont'), // 输出到指定目录中
  fontName: 'icon', // 设置字体名称
  css: true, // 生成字体文件
  startNumber: 20000, // unicode起始编号
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
  // website = null, 没有演示html文件
  website: {
    title: 'icon',
    logo: '',
    version: 'v1.0.0',
    meta: {
      description: '',
      keywords: '',
    },
    description: ``,
    links: [
      {
        title: 'Font Class',
        url: 'index.html',
      },
      {
        title: 'Unicode',
        url: 'unicode.html',
      },
    ],
    footerInfo: ``,
  },
}).then(() => {
  console.log('done!')
})
