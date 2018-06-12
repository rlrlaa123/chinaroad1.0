<template>
  <div>
    <headers></headers>
    <section>
      <navigator @click.native="showModal = true" menuName="회화"></navigator>
      <div id="level-wrapper">
        <span class="level" v-bind:class="{ active : level }" @click="toggleLevel">초급</span>
        <span class="level" v-bind:class="{ active : !level }" @click="toggleLevel">중급</span>
      </div>
    </section>
    <div class="content" v-if="level">
      <div v-for="category in easy_categories" v-bind:key="category.id">
          <div>
            <router-link :to="{ name: 'List', params: { categoryId: category.id }}">
              <img :src=category.img class="category-img">
            </router-link>
          </div>
          <img src="../../assets/video.png" class="play-btn">
          <p>{{ category.name }}</p>
      </div>
    </div>
    <div class="content" v-else>
      <div v-for="category in hard_categories" v-bind:key="category.id">
        <div>
          <router-link :to="{ name: 'List', params: { categoryId: category.id }}">
            <img :src=category.img class="category-img">
          </router-link>
        </div>
        <img src="../../assets/video.png" class="play-btn">
        <p>{{ category.name }}</p>
      </div>
    </div>
    <modal v-if="showModal" @close="showModal = false"></modal>
  </div>
</template>

<script>
import Headers from '../Header';
import Modal from '../Modal_navi';
import Navigator from '../Navigator';

export default {
  components: {
    Headers,
    Modal,
    Navigator,
  },
  data() {
    return {
      easy_categories: [
        {
          id: 1,
          name: '카페에서 주문하기',
          // eslint-disable-next-line
          img: require('../../assets/people/003.jpg'),
        },
        {
          id: 2,
          name: '일반 회화 연습',
          // eslint-disable-next-line
          img: require('../../assets/people/003.jpg'),
        },
        {
          id: 3,
          name: '공항에서 이야기하기',
          // eslint-disable-next-line
          img: require('../../assets/people/003.jpg'),
        },
      ],
      hard_categories: [
        {
          id: 4,
          name: '카페에서 주문하기',
          // eslint-disable-next-line
          img: require('../../assets/people/003.jpg'),
        },
      ],
      level: true,
      showModal: false,
    };
  },
  methods: {
    toggleLevel() {
      // 초급 클릭
      if (this.level) {
        this.level = false;
      } else { // 중급 클릭
        this.level = true;
      }
    },
  },
};
</script>

<style scoped>
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    color: #c21720;
    font-weight: bolder;
    font-size: 20px;
    margin-bottom: 10px;
  }

  #level-wrapper {
    margin-right: 20px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: rgba(0,0,0,0.3)
  }

  .level {
    margin: 0 5px;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(5,200px);
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

  .active {
    color: #c21720;
  }
</style>
