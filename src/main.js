import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import locale from "element-ui/lib/locale/lang/zh-CN"  //注意这里文件路径不要引用错了，不然分页组件显示的样式错误
import '@/styles/index.scss'
import '@/permission'
import '@/icons' //全局注册组件

Vue.config.productionTip = false


Vue.use(ElementUI, {locale})

Vue.config.productionTip = false

new Vue({
  el: "#app", //挂载app节点，即替换index中的<div=app>标签
  router,
  store,
  template: '<App/>',  //使用App组件的模板  不在标签上添加属性和操作的话   可以将<App><App/>简写
  component: { App }, //注册组件   ES6写法 如果键值对一样的话，可以只写一个
  render: h => h(App), //渲染   runtime-only model 的时候需要手动指明
})
