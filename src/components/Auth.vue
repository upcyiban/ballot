<template></template>
<script>
/**
*   引入前端配置文件
*   APIURL 后端地址
*   APPURL 前端地址
*   APPID  易班APPID
*   CALLBACK 易班回调地址
*/
import {APIURL,APPURL,APPID,CALLBACK} from '../config.js';
export default {
  name: 'auth',
  mounted(){
    this.vq = this.$route.query.verify_request;
=======
<template>
	<div id="auth">{{vq}}</div>
</template>

<script>
import {APIURL,APPURL,APPID,CALLBACK} from '../config.js';
export default {
    name: 'auth',
  data () {
    return {
      vq:'vq'
    }
  },
  mounted(){
    this.vq = this.$route.query.verify_request;
    console.log(this.$route.fullPath);
>>>>>>> 237e4738888294f1748ec6f36573d8097caf2056
    let verify_request = this.$route.query.verify_request;
    if(!sessionStorage.getItem('islogin')){
      if(!verify_request){
        window.location="https://openapi.yiban.cn/oauth/authorize?client_id="+APPID+"&redirect_uri="+CALLBACK+"&display=html";
      }else{
      	this.$http.get(APIURL+'/ballot/auth?vq='+verify_request).then((response)=>{
      if(response.data==1){
        sessionStorage.setItem('islogin', true);
        window.location=APPURL;
      }else{
        sessionStorage.setItem('islogin', false);
      }
    })
      }
    }

  }
}
</script>