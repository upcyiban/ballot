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
  data () {
    return {
    }
  },
  created(){

    let verify_request = this.$route.query.verify_request;
    console.log(verify_request);
    this.$http.get(APIURL+'/ballot/isauth').then(response=>{
        if(response.data==1){
          console.log(response.data+' auth success');
        }else{     
        if(!verify_request){
          window.location="https://openapi.yiban.cn/oauth/authorize?client_id="+APPID+"&redirect_uri="+CALLBACK+"&display=html";
        }else{
          this.$http.get(APIURL+'/ballot/auth?vq='+verify_request).then((response)=>{
            if(response.data==1){
              window.location=APPURL;
            }
        })
      }
    
        }
    });
    

  }
}
</script>