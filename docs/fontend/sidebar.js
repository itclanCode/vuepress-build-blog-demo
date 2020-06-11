/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-05-29
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2020-06-01 22:11:17
 * @Description: 侧边栏主配置文件
 */
module.exports = [
  ["", "目录"],
  {
    title: "css",
    collapsable: true,
    children: [
      ["css/", "目录"],
      ["css/1-center", "元素水平垂直居中"], // 指向具体的md文件,真实要写文档的地方
      ["css/2-flex-box", "弹性盒模型"]
    ]
  },
  {
    title: "JavaScript",
    collapsable: true,
    children: [
      ["js/", "目录"],
      ["js/1-scope", "理解Js中的作用域-作用域链以及闭包"]
    ]
  },
  {
    title: "工具",
    collapsable: true,
    children: [
      ["tools/", "目录"],
      ["tools/1-vuepress-build-blog", "手把手教你用vuepress搭建博客"]
    ]
  }
];
