<template>
  <router-view></router-view>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <router-link to="/">Home</router-link> <br>
  <router-link to="/update">Update</router-link> <br>
  <router-link to="/add">Add</router-link> <br>
  <img alt="Vue logo" src="./assets/logo.png">

  

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
