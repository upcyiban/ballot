// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
import App from './App'
import Main from './components/Main'
import Index from './components/Index'
/* eslint-disable no-new */

const router =  new VueRouter({
	mode : 'history',
	routes : [{
		path:'/',
		component:Index
	},{
		path:'/foo',
		component:Main
	},{
		path:'*',
		redirect:'/'
	}]
})


new Vue({
  el: '#app',
  router:router,
  template: '<App/>',
  components: { App }
})
