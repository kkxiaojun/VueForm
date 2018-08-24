# 简介
整个项目最终实现的是一个自定义表单系统，用户可以用鼠标拖拽生成自己的表单，并填写和发布表单

# 目录
**PS:** 整个project是包含前端vue-form和后端vue-node项目的
1. 前端项目
```
├─vue-form  
│  ├─build  ------------------------------------------ webpack配置
│  ├─config ------------------------------------------ 项目配置
│  ├─src    ------------------------------------------ 代码目录
│  │  ├─api ------------------------------------------ 接口文件
│  │  ├─common --------------------------------------- 公共文件夹
│  │  │  ├─images
│  │  │  ├─js
│  │  │  └─less
│  │  ├─components ----------------------------------- 组件
│  │  │  ├─form
│  │  │  ├─help
│  │  │  ├─login
│  │  │  ├─m-footer
│  │  │  ├─m-header
│  │  │  ├─person
│  │  │  └─signup
│  │  └─router ------------------------------------------- 路由
│  └─static
```

2. 后端项目
```
└─vue-node
    ├─config  ------------------------------------------- 配置文件
    ├─models  ------------------------------------------- 数据model文件
    └─router  ------------------------------------------- api接口路由文件
    ├─app.js  ------------------------------------------- 入口
    ├─package.json -------------------------------------- 依赖
```

# 技术栈
1. 前端
vue + vue-router + axios + vuedraggable + element-ui

2. 后端
node + express + mongodb + mongoose

# 功能列表
1. 登录、注册模块
2. 表单模块
3. 表单模板模块
4. 个人信息模块
5. 管理员模块

功能结构图
![系统功能结构图](./demo.png)

## 项目启动
1. 前端项目
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

2. 后端项目
先启动数据库mongodb
再启动项目
```
# install dependencies
npm install

# serve
node app.js
```

