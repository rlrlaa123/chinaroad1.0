<template>
  <div>
    <headers v-bind:headerName=header></headers>
    <div class="list-wrapper" v-for="list in lists"
         v-bind:key="list.id">
      <router-link :to="{ name: 'Step1', params: { categoryId: 1, stepId: list.id } }">
        <div class="list-container">
          <h2 style="display: inline-block;">{{ list.id }}. {{ list.name}}</h2>
          <div class="video-button">1 video</div>
        </div>
        <div class="list-image-container">
          <div class="list-image"
               v-bind:style="{ backgroundImage: 'url(' + list.img + ')' }">
          </div>
          <p>{{ list.name }}</p>
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
      lists: [
        {
          id: 1,
          name: '카페에서 주문하기',
          // eslint-disable-next-line
          img: require('../../assets/people/03.png'),
          conversation: [
            {
              id: 1,
              name: '카페에서 주문하기',
            },
          ],
        },
        {
          id: 2,
          name: '거스름돈 계산하기',
          // eslint-disable-next-line
          img: require('../../assets/people/001.jpg'),
        },
        {
          id: 3,
          name: '리필하기',
          // eslint-disable-next-line
          img: require('../../assets/people/002.jpg'),
        },
      ],
    };
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
</style>
