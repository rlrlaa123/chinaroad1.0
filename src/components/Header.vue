<template>
  <header>
    <img src="../assets/setting.png" id="setting-btn" @click="naviOpen">
    <div style="display: flex; align-items: center; justify-content: center;">
      <img src="../assets/grid2_gray.png" id="grid-btn1">
      <img src="../assets/grid4_red.png" id="grid-btn2">
    </div>
    <div style="width: 35px;"></div>
    <nav-bar v-if="navi" @close="navi=false"></nav-bar>
  </header>
</template>

<script>
import NavBar from './NavBar';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      navi: false,
    };
  },
  methods: {
    naviOpen() {
      if (this.navi) {
        this.navi = false;
      } else {
        this.navi = true;
      }
    },
  },
};
</script>

<style scoped>
  header {
    height: 50px;
    box-shadow: 1px 6px 6px 1px rgba(0,0,0,0.02);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  #setting-btn {
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }

  #grid-btn1 {
    width: 22px;
    height: 22px;
    margin: 2.5px;
  }

  #grid-btn2 {
    width: 22px;
    height: 22px;
    margin: 2.5px;
  }
</style>
