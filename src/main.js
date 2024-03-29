import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/sketchmap.js'
import ElementUI from 'element-ui'    //导入组件库
import 'element-ui/lib/theme-chalk/index.css'  //导入样式
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
