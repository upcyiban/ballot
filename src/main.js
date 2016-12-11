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
import Create from './components/Create'
import Mine from './components/Mine'
import Auth from './components/Auth'
/* eslint-disable no-new */
/**
*	Vue 跨域
*/
Vue.http.interceptors.push((request, next) => {
    request.credentials = true;
    next();
});

const router =  new VueRouter({
	mode : 'history',
	routes : [{
		path:'/',
		components:{
			default:Index,
			auth: Auth
		}
	},{
		path:'/foo',
		component:Main
	},{
		path:'/create',
		component:Create
	},{
		path:'/mine',
		components:Mine
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
