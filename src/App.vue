<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-link to="/foo">验证登陆</route-link>
    <bar></bar>
  </div>
</template>

<script>
import Bar from './components/Menu'
export default {
  name : 'app',
  components : {
    Bar
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
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
