<template>
  <div>
    <headers></headers>
    <navigator naviName="회화" :toggle=toggle :menuName=menuName
               @easy="toggle = 1" @hard="toggle = 2"></navigator>
    <div class="content" v-show="toggle === 1">
      <div v-for="category in easy_categories" v-bind:key="category.id">
          <div>
            <router-link :to="{ name: 'List', params: { categoryId: category.id }}">
              <img :src=category.image class="category-img">
            </router-link>
          </div>
          <img src="../../assets/video.png" class="play-btn">
          <p>{{ category.name }}</p>
      </div>
    </div>
    <div class="content" v-show="toggle === 2">
      <div v-for="category in hard_categories" v-bind:key="category.id">
        <div>
          <router-link :to="{ name: 'List', params: { categoryId: category.id }}">
            <img :src=category.image class="category-img">
          </router-link>
        </div>
        <img src="../../assets/video.png" class="play-btn">
        <p>{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Headers from '../Header';
import Navigator from '../Navigator';

export default {
  components: {
    Headers,
    Navigator,
  },
  data() {
    return {
      toggle: 1,
      menuName: ['초급', '중급'],
      easy_categories: [],
      hard_categories: [],
    };
  },
  created() {
    axios.get('categories', {
    }).then((response) => {
      const categories = response.data;
      categories.map((ele) => {
        if (ele.level === 'easy') {
          this.easy_categories.push(ele);
        } else {
          this.hard_categories.push(ele);
        }
        return 1;
      });
    }).catch(() => {
    });
  },
  methods: {
  },
};
</script>

<style scoped>
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 200px repeat(auto-fill ,200px);
    grid-gap: 15px;
    max-width: 150%;
    margin: 0 auto;
  }

  .content div {
    border-radius: 5px;
    box-shadow: 2px 3px 3px 2px rgba(0,0,0,0.08);
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: 60% 40%;
    white-space: pre-line;
    word-break: keep-all;
    text-align: center;
    align-items: center;
    color: rgba(0,0,0,0.5);
    font-size: 15px;
    font-weight: bold;
    position: relative;
  }

  .category-img {
    width: 100%;
    height: 120px;
  }

  .play-btn {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 5px;
    right: 5px;
  }
</style>
