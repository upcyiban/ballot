<template>
	<div id="auth">{{vq}}</div>
</template>

<script>
import {appurl} from '../config.js';
export default {
    name: 'auth',
  data () {
    return {
      vq:'vq'
    }
  },
  mounted(){
this.$http.options.xhr = { withCredentials: true };
    this.vq = this.$route.query.verify_request;
    let request_url = appurl+'/ballot/auth?vq='+this.vq;
    console.log(request_url);
    let verify_request = this.$route.query.verify_request;
    if(!sessionStorage.getItem('islogin')){
      if(!verify_request){
        console.log('has not verify_request')
        window.location="https://openapi.yiban.cn/oauth/authorize?client_id=484b6cb2a841acbd&redirect_uri=http://f.yiban.cn/iapp54363&display=html";
      }else{
      	this.$http.get(request_url).then((response)=>{
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
}
</script>