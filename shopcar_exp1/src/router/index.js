import Vue from 'vue'
import Router from 'vue-router'
// 添加这一行，目的是引入 SayHi 这个 component
// 表示从当前目录下的 components 引入 SayHi 文件，@ 表示当前目录
import SayHi from '@/components/SayHi'


import {
  pathToFileURL
} from 'url';

Vue.use(Router)
export default new Router({
   // 添加下面几行，表示定义了  /#/say_hi 这个 url
  routes: [
   
    {
      path: '/say_hi', // 对应一个 url
      name: 'SayHi', // Vue.js 内部使用的名字
      component: SayHi // 对应的 .vue 页面的名字
    }

  ]
})
// 当用户在浏览器中输入 http://localhost:8080/#/say_hi 时，就会
// 渲染 ./components/SayHi.vue 文件。
// name:'SayHi' 定义了该路由在 Vue.js 内部的名称
