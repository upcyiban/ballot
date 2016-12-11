<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="auth"></router-view>
    <router-link to="/foo">验证登陆</route-link>

  </div>
</template>

<script>
import {appurl} from './config.js';
export default {
    name: 'app',
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
