<template>
  <div id="app">
    <h1>Oklahoma Christian Course List Site</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

#app {
  font-family:  'Arial Narrow';
  text-align: center;
  color: #5f1313;
  font-size: 30px;
  background-color: rgba(255, 255, 255, 0.932);
  height: 200px;
}

h2{
  color: #002761;
}

label{
  color: #002e74;
}

button {
  border: none;
  padding: 0!important;
  /*optional*/
  font-family: arial;
  font-size: 17px;
  color: #ffffff;
  background-color: #6e0000;
  height: 30px;
  width: 70px;
  cursor: pointer;
  margin-left: 10px;
}

button:hover {
  background-color: #e0a606; /* Green */
  color: white;
}

</style>
