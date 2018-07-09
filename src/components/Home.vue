<template>
  <div style="margin-top: 150px;">
    <router-link :to="{ name: 'Conversation' }" id="router">테스트 시작</router-link>
  </div>
</template>

<script>
import Loading from './Loading';

export default {
  components: {
    Loading,
  },
  data() {
    return {
      // isLoading: true,
    };
  },
  mounted() {
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 3000);
  },
};
</script>

<style scoped>
  #router {
    margin: auto;
    color: white;
    font-size: 20px;
    border: 1px solid #c21720;
    padding: 5px;
    border-radius: 20px;
    background-color: #c21720;
  }
</style>
