/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-05-28 16:57:06
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2020-06-01 21:17:56
 * @Description:
 * 插件配置链接：
 * 1. 返回顶部插件:https://www.vuepress.cn/plugin/official/plugin-active-header-links.html#%E5%AE%89%E8%A3%85
 */
const moment = require("moment"); // 引入moment.js

module.exports = {
  title: "itclanCoder", // 博客标题
  description: "itclanCoder,itclanCoder的技术博客,itclan", // 博客描述,利于SEO
  keywords: "itclanCoder的技术博客, itclanCoder", // 关键字
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/images/itclancoder.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
    ["meta", { rel: "keywords", content: "itclanCoder的技术博客,itclan" }],
    ["meta", { name: "Author", content: "随笔川迹" }],
    ["link", { rel: "manifest", href: "/js/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "stylesheet", href: "/css/style.css" }], // 这种方式也可以覆盖默认样式
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  lastUpdated: "更新时间", // 显示更新时间,设置true，开启最后更新时间
  markdown: {
    lineNumbers: true // 显示代码块行号
  },
  themeConfig: require("./themeconfig"), // 导入默认主题的一些选项配置文件,便于集中管理配置
  // VuePress默认只会提取h2和h3标题,你可以通过这个选项来修改提取出的标题级别,分别支持h1~h6
  markdown: {
    extractHeaders: ["h1", "h2", "h3", "h4", "h5", "h6"]
  },
  // 插件配置
  plugins: require("./plugin") // 外部插件配置,config.js里面写得太长了,阅读,修改起来,真的好恶心,有必要考虑拆分出去的
};
