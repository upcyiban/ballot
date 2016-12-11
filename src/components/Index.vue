<template>
  <div class="index">
    <router-link class="button" id="create-btn" to="/create"></router-link>
    <div class="ticket"><img src="../assets/logo.png" alt=""></div>
    
  </div>
</template>

<script>
export default {
    name: 'index'
}
</script>

<style>
#create-btn{
  text-decoration: none;
  display: block;
  height: 40px;
  width: 40px;
  background: white;
  margin: 0 auto;
  padding:18px;
  box-shadow: gainsboro 1px 10px 40px;
  border-radius: 50%;
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
  right: 20px;
  bottom: 20px;
}
</style>
