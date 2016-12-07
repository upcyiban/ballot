<template>
  <div class="hello">
    {{vq}}
  </div>
</template>

<script>
import {appurl} from '../config.js';
export default {
    name: 'hello',
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
      this.$http.get(appurl+'/ballot/auth?verify_request='+this.$route.query.verify_request).then((response)=>{
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
