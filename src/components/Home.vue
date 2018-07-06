<template>
  <div>
    <router-link :to="{ name: 'Conversation' }">hello</router-link>
    hello
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

</style>
