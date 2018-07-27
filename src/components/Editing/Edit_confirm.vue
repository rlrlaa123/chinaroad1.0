<template>
  <div>
    <div class="confirm-wrapper">
      <div class="confirm-container"
           v-for="confirm in confirms" v-bind:key="confirm.id"
           @click="show(confirm.date)">
          <div>
              <div class="confirm-date">{{ confirm.date }}</div>
              <div class="confirm-text">{{ confirm.total }}개 질문 중 {{ confirm.confirmed }}개 응답</div>
          </div>
          <div>
            <img v-if="!confirm.checked" src="../../assets/unchecked.png">
            <img v-if="confirm.checked" src="../../assets/checked.png">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      confirms: [],
    };
  },
  mounted() {
    axios.get(`confirm/${this.$firebaseAuth.currentUser().email}`, {
    }).then((response) => {
      this.confirms = response.data;
    });
  },
  methods: {
    show(id) {
      this.$emit('show', id);
    },
  },
};
</script>

<style scoped>
  .confirm-wrapper {
    border-top: 1px solid #e3e3e3;
  }

  .confirm-container {
    display: grid;
    grid-template-columns: 80% 20%;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #e3e3e3;
    height: 60px;
    padding: 10px;
  }

  .confirm-container div:nth-child(1) {
    text-align: left;
  }

  .confirm-container img {
    width: 25px;
  }

  .confirm-date {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }

  .confirm-text {
    display: block;
    font-size: 11px;
    font-weight: lighter;
  }
</style>
