<template>
  <header>
    <a @click="back()">
      <img src="../assets/back.png">
    </a>
    <span class="header-name">{{ headerName }}</span>
    <span style="width: 25px;"></span>
  </header>
</template>

<script>
export default {
  props: ['headerName'],
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
  header {
    height: 50px;
    box-shadow: 1px 6px 6px 1px rgba(0,0,0,0.02);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header img {
    width: 25px;
    margin-left: 10px;
  }

  .header-name {
    font-size: 20px;
    color: #c21720;
    font-weight: bold;
  }
</style>
