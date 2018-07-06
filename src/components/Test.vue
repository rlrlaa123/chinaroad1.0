<template>
    <div>
      <div v-show="conversation.hidden">hidden</div>
      <div v-show="!conversation.hidden">not hidden</div>

      <button @click="conversation.hidden = false">Click This!</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      conversation: {},
    };
  },
  created() {
    axios.get('request_something', {
    }).then((response) => {
      this.conversation = response.data;
      this.conversation.hidden = true;
    });
  },
};
</script>

<style scoped>

</style>
