<template>
  <div>
    <headers v-bind:headerName=header></headers>
    <div class="category-wrapper" v-for="conversation in conversations"
         v-bind:key="conversation.id">
      <router-link :to="{ name: 'Step1', params: { categoryId: 1, stepId: conversation.id } }">
        <div class="category-container">
          <h2 style="display: inline-block;">{{ conversation.id }}. {{ conversation.name}}</h2>
          <div class="video-button">1 video</div>
        </div>
        <div class="category-image-container">
          <div class="category-image"
               v-bind:style="{ backgroundImage: 'url(' + conversation.img + ')' }">
          </div>
          <p>{{ conversation.name }}</p>
        </div>
      </router-link>
    </div>
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
      header: '카페에서 주문하기',
      conversations: [
        {
          id: 1,
          name: '카페에서 주문하기',
          // eslint-disable-next-line
          img: require('../../assets/people/03.png'),
        },
        {
          id: 2,
          name: '카페에서 주문하기',
          // eslint-disable-next-line
          img: require('../../assets/people/03.png'),
        },
        {
          id: 3,
          name: '카페에서 주문하기',
          // eslint-disable-next-line
          img: require('../../assets/people/03.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
  .category-container {
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

  .category-image-container {
    width: 60%;
    height: 150px;
    margin: auto;
    box-shadow: 2px 3px 3px 2px rgba(0,0,0,0.08);
  }
  .category-image{
    width: 100%;
    height: 100px;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .category-image-container p {
    font-size: 15px;
    font-weight: normal;
  }
</style>
