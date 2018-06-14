<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    margin: 0;
    font-size: 13px;
    background-color: #f5f5f5
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .btn {
    width: 80px;
    height: 30px;
    border-radius: 10px;
    background-color: #c21720;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0 5px;
  }
</style>
