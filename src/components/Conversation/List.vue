<template>
  <div>
    <header>
      <router-link :to="{ name: 'Conversation' }">
        <img src="../../assets/back.png">
      </router-link>
      <span class="header-name">{{ header }}</span>
      <span style="width: 25px;"></span>
    </header>    <div class="list-wrapper" v-for="(list, index) in lists"
         v-bind:key="list.id">
      <router-link :to="{ name: 'Step1',
       params: { categoryId: $route.params.categoryId, conversationId: list.id } }">
        <div class="list-container">
          <h2 style="display: inline-block;">{{ index+1 }}. {{ list.name }}</h2>
          <div class="video-button">1 video</div>
        </div>
        <div class="list-image-container">
          <div class="list-image"
               v-bind:style="{ backgroundImage: 'url(' + list.image1 + ')' }">
          </div>
          <p>{{ list.name }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {
    Headers,
  },
  data() {
    return {
      header: '카페에서 주문하기',
      lists: [
        // {
        //   id: 1,
        //   title: '카페에서 주문하기',
        //   // eslint-disable-next-line
        //   img: require('../../assets/people/03.png'),
        //   conversation: [
        //     {
        //       id: 1,
        //       title: '카페에서 주문하기',
        //     },
        //   ],
        // },
        // {
        //   id: 2,
        //   title: '거스름돈 계산하기',
        //   // eslint-disable-next-line
        //   img: require('../../assets/people/001.jpg'),
        // },
        // {
        //   id: 3,
        //   title: '리필하기',
        //   // eslint-disable-next-line
        //   img: require('../../assets/people/002.jpg'),
        // },
      ],
    };
  },
  created() {
    axios.get(`categories/${this.$route.params.categoryId}`, {
    }).then((response) => {
      const conversations = response.data;
      conversations.map((ele) => {
        this.lists.push(ele);
        return 1;
      });
    });
  },
};
</script>

<style scoped>
  .list-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-bottom: 0;
  }

  h2 {
    color: #c21720;
    font-weight: bold;
  }

  .video-button {
    width: 80px;
    background-color: #c21720;
    color: white;
    border-radius: 10px;
  }

  .list-image-container {
    width: 60%;
    height: 150px;
    margin: auto;
    box-shadow: 2px 3px 3px 2px rgba(0,0,0,0.08);
  }
  .list-image{
    width: 100%;
    height: 100px;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .list-image-container p {
    font-size: 15px;
    font-weight: normal;
  }

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
