<template>
  <div class="confirm-wrapper">
    <div v-for="confirm in confirms" v-bind:key="confirm.id">
      <div class="confirm-container" >
        <p class="confirm-header">{{ confirm.id }}번째 질문</p>
        <div class="confirm-contents">
          <div class="confirm-image">
            <img src="../../assets/mic.png">
          </div>
          <span style="font-size: 11px;">{{ confirm.question_ch }}</span>
        </div>
        <!--<div style="display: flex; justify-content: flex-end;">-->
        <!--<button class="confirm-btn">한국어</button>-->
        <!--</div>-->
        <div class="confirm-contents">
          <div class="confirm-image">
            <img src="../../assets/chat.png">
          </div>
          <span>{{ confirm.reply }}</span>
        </div>
      </div>
      <div class="confirm-contents confirm-reply">
        <div class="confirm-image">
          <img src="../../assets/normalchecked.png" style="width: 20px;">
        </div>
        <span>{{ confirm.answer }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['confirmId'],
  components: {
  },
  data() {
    return {
      date: this.confirmId,
      confirms: [],
    };
  },
  mounted() {
    axios.get(`confirm/${this.$firebaseAuth.currentUser().email}/${this.date}`, {
    }).then((response) => {
      this.confirms = response.data;
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
  .confirm-wrapper {
    padding: 20px;
  }

  .confirm-header {
    text-align: left;
    color: orange;
    font-weight: bold;
  }

  .confirm-container {
    background-color: white;
    padding: 10px;
  }

  .confirm-container img {
    width: 20px;
  }

  .confirm-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .confirm-contents {
    display: grid;
    grid-template-columns: 10% 90%;
    text-align: left;
    align-items: center;
    padding: 20px 0;
  }

  .confirm-contents span {
    padding-left: 10px;
  }

  .confirm-btn {
    text-align: right;
    border: 1px solid orange;
    border-radius: 20px;
    background-color: transparent;
    color: orange;
  }

  .confirm-reply {
    background-color: white;
    margin-top: 2px;
    margin-bottom: 20px;
    padding: 20px 10px;
  }
</style>
