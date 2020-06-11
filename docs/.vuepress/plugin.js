/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-06-01 20:49:41
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2020-06-01 23:02:27
 * @Description: 所有外部插件配置,入口在当前目录下config.js,本文件通过module.exports暴露,而在config.js中通过require方式引入
 * 集中管理外部插件配置
 */
const moment = require("moment"); // 引入moment.js

const plugins = [
  "@vuepress/back-to-top", // 返回到到顶部插件
  "@vuepress/nprogress", // 进度条插件
  [
    "@vuepress/active-header-links",
    {
      // 页面滚动时自动激活侧边栏链接的插件配置
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor"
    }
  ],

  [
    "@vuepress/last-updated",
    {
      transformer: timestamp => {
        // 不要忘了安装 moment
        const moment = require("moment");
        moment.locale("zh-cn");
        return moment(timestamp).fromat("LLLL");
      }
    }
  ],

  [
    "@vuepress/medium-zoom",
    {
      selector: "img.custom"
      // options: {
      //   margin: 16
      // }
    }
  ],

  [
    "@vuepress/pwa", // 以@开头的都是官方维护的插件, pwa配置
    {
      serviceWorker: true, // 如果设置为 true，VuePress 将自动生成并注册一个 Service Worker，用于缓存页面的内容以供离线使用（仅会在生产环境中启用）
      updatePopup: {
        // 只有在你能够使用 SSL 部署您的站点时才能启用此功能，因为 service worker 只能在 HTTPs 的 URL 下注册
        "/zh/": {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    }
  ],

  [
    "vuepress-plugin-comment", // valine留言插件
    {
      choosen: "valine",
      // options选项中的所有参数，会传给Valine的配置
      options: {
        el: "#valine-vuepress-comment",
        appId: "QffFto4w5NEPzOtOubDJubDA-gzGzoHsz",
        appKey: "0SwBlQTI7U0znWtQjPWh4IXH"
      }
    }
  ]
];

module.exports = plugins; // 导出
