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
