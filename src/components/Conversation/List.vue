<template>
  <div>
    <headers headerName='카페에서 주문하기'></headers>
    <h3>List</h3>
    <p>{{ conversation.name }}</p>
  </div>
</template>

<script>
import Headers from '../Header_back';

export default {
  components: {
    Headers,
  },
  data() {
    return {
      conversation: [
        {
          name: '카페에서 주문하기',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
