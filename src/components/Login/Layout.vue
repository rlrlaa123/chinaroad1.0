<template>
    <div id="background">
      <router-view></router-view>
    </div>
</template>

<script>
import Login from './Login';

export default {
  name: 'layout',
  components: {
    Login,
  },
};
</script>

<style scoped>
  #background {
    background-image: url("../../assets/background.png");
    background-position: center;
    height: 100vh;
  }
</style>
