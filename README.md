# vuepress-build-blog-demo

基于 VuePress 搭建的博客

### vuepress-build-blog-demo 介绍

[itclanCoder 博客](https://coder.itclan.cn)就是基于此简易版进行模块化拆分和改造的

### 安装

```
npm install
or
cnpm install
or
yarn install
```
### 项目启动
```
npm run dev
or
yarn dev

```
### 项目构建打包
```
npm run build

```

### 目录树结构

```
─.gitignore                  // 指定忽略上传的文件
├─package-lock.json
├─package.json              // 项目依赖的包
├─README.md                 // 文档说明
├─yarn.lock
├─docs                      // 主要目录
|  ├─README.md
|  ├─wechat                 // 小程序,导航栏,每一个文件夹对应的就是一个nav导航
|  |   ├─README.md
|  |   ├─sidebar.js         // sidebar配置,这是最原始版的,新的已经把它给抽离出去了的,可以对比着看
|  |   ├─minprogram         // 导航栏的二级选项
|  |   |     ├─1-first-minprogram.md   // 具体要写的文章
|  |   |     └README.md
|  |   ├─images            // md对应引入的图片
|  |   ├─cloudev
|  ├─interview             // 面试
|  |     ├─README.md
|  |     ├─sidebar.js
|  |     ├─vue
|  ├─fontend              // 前端
|  |    ├─README.md
|  |    ├─sidebar.js
|  |    ├─tools
|  |    |   ├─1-vuepress-build-blog.md
|  |    |   └README.md
|  |    ├─js               // js目录文章
|  |    | ├─1-scope.md
|  |    | └README.md
|  |    ├─images
|  |    |   ├─js-article-imgs    // js文章对应的资源图片
|  |    |   ├─css-article-imgs   // css文章对应的资源图片
|  |    |   |        ├─1-center  // 某一篇文章对应的资源图片文件夹
|  |    |   |        |    ├─1-block.jpg
|  |    ├─css                             // css目录文章
|  |    |  ├─1-center.md
|  |    |  ├─2-flex-box.md
|  |    |  └README.md
|  ├─about            // 关于
|  |   ├─about.md
|  |   └README.md
|  ├─.vuepress               // vuepress主要配置文件夹，用于存放全局的配置、组件、静态资源等
|  |     ├─config.js         // 入口配置文件
|  |     ├─nav.js            // 导航栏nav配置
|  |     ├─plugin.js         // 依赖的插件配置
|  |     ├─sidebar.js        // 侧边栏配置
|  |     ├─themeconfig.js    // 默认主题配置
|  |     ├─styles            // 用于存放样式相关的文件,修改默认主题样式
|  |     |   ├─index.styl    // 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。,覆盖默认主题样式文件
|  |     |   └palette.styl   // 颜色变量,用于重写默认颜色常量，或者设置新的 stylus 颜色常量
|  |     ├─public            // 静态资源目录文件
|  |     |   ├─js            // 静态资源js文件
|  |     |   | └manifest.json
|  |     |   ├─images         // 图片
|  |     |   |   ├─itclancoder.jpeg
|  |     |   |   └itclancoder.jpg
|  |     |   ├─css           // 样式
|  |     |   |  └style.css
|  |     ├─components        // 该目录中的 Vue 组件将会被自动注册为全局组件,自定义vue组件
```

具体详细目录结构:可参考官网介绍[vuepress 目录结构介绍](https://www.vuepress.cn/guide/directory-structure.html)

### 注意事项

- 建议先读完[手把手教你用 vuepress 搭建博客](http://doc.itclan.cn/fontend/tools/vuepress-build-blog.html),一步一步跟着文档做
- 不建议直接拷贝[原博客代码](https://github.com/itclanCode/blogcode),进行二次修改,建议可以克隆本项目简易版,然后根据自己需求,进行二次修改,配置
- 可以模仿[itclanCoder 博客源码](https://github.com/itclanCode/blogcode),的目录结构进行自行修改

### 如有问题请提 issue

- 本如果本 `Demo`能帮助到您,不吝啬给个 star！！！欢迎随时灵魂拷问
- 线上地止:[itclanCoder-线上预览](http://doc.itclan.cn)
- 您也可关注**官方微信公众号:itclanCoder**
  <div align="center">
  <img src="https://t1.picb.cc/uploads/2020/06/11/tIpk0j.jpg" width="148" height="148" alt="itclanCoder公众号" border="0">
  </div>
