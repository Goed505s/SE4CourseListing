<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <list-page />
</template>

<script>
import ListPage from './views/listPage.vue'

export default {
  name: 'App',
  components: {
    ListPage
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
