<template>
  <div id="app">
    <router-view></router-view>
    <div>{{vq}}</div>
    <router-link to="/foo">验证登陆</route-link>

  </div>
</template>

<script>
import {app_url,app_id,redirect_uri} from './config.js';
export default {
    name: 'app',
  data () {
    return {
      vq:'vq'
    }
  },
  mounted(){
    this.vq = this.$route.query.verify_request;
    let verify_request = this.$route.query.verify_request;
    if(!sessionStorage.getItem('islogin')){
      if(!verify_request){
        console.log('has not verify_request')
        window.location="https://openapi.yiban.cn/oauth/authorize?client_id=484b6cb2a841acbd&redirect_uri=http://f.yiban.cn/iapp54363&display=html";
      }
      this.$http.get(app_url+'/ballot/auth?verify_request='+this.$route.query.verify_request).then((response)=>{
      if(response.data==1){
        sessionStorage.setItem('islogin', true);
      }else{
        sessionStorage.setItem('islogin', false);
      }
      console.log(sessionStorage.getItem('islogin'));
    })
    }

  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  background: white; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>
