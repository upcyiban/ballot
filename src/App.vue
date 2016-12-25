<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app'
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
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
  transform: translate(0);
}
.fade-enter, .fade-leave {
  transition: all .5s;
  transform: translateY(30px);
  opacity: 0;
}
</style>
