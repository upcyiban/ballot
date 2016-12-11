<template>
  <div class="index">
    <router-link class="button" id="create-btn" to="/create">发布我的抽签</router-link>
    <div class="ticket"><img src="../assets/logo.png" alt=""></div>
    <div class="ticket"><img src="../assets/logo.png" alt=""></div>
    <div class="ticket"><img src="../assets/logo.png" alt=""></div>
    <div class="ticket"><img src="../assets/logo.png" alt=""></div>
    <div class="ticket"><img src="../assets/logo.png" alt=""></div>
    <div class="ticket"><img src="../assets/logo.png" alt=""></div>
    <div class="ticket"><img src="../assets/logo.png" alt=""></div>
  </div>
</template>

<script>
import {appurl} from '../config.js';
export default {
    name: 'index'
}
</script>

<style>
.button{
  text-decoration: none;
  display: block;
  height: 20px;
  width: 200px;
  background: #1fc700;
  margin: 0 auto;
  padding:18px;
  box-shadow: gray 1px 1px 10px;
  border-radius: 30px;
  font-size: 20px;
  color: white;
}
.ticket{
  height: 600px;
  width: 90%;
  margin: 20px auto;
  background: white;
  border-radius: 10px;
  box-shadow: gainsboro 1px 1px 40px;
}
#create-btn{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 20px;
}
</style>
