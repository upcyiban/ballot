<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="auth"></router-view>
  </div>
</template>

<script>
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
  font-family: 'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>
