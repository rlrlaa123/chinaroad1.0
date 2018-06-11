<template>
  <div id="menu-selector">
    <img src="../assets/select.png" id="selector-btn">
    <div id="menu-name">{{ menuName }}</div>
  </div>
</template>

<script>
export default {
  props: ['menuName'],
};
</script>

<style scoped>
  #menu-selector {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
  }

  #selector-btn {
    width: 30px;
    height: 30px;
  }

  #menu-name {
    margin-left: 20px;
    color: #c21720;
    font-size: 15px;
    font-weight: bold;
  }
</style>
