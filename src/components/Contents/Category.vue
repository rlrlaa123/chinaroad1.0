<template>
  <div>
    <headers></headers>
    <section>
      <navigator @click.native="showModal = true" menuName="컨텐츠"></navigator>
    </section>
    <div class="contents-wrapper">
      <div class="contents-container" v-for="category in categories" v-bind:key="category.id">
        <div class="contents-text">
          <div class="contents-category-name">{{ category.name }}</div>
          <p>{{ category.korean }}</p>
          <p>{{ category.chineses }}</p>
        </div>
      </div>
    </div>
    <modal v-if="showModal" @close="showModal = false">
    </modal>
  </div>
</template>

<script>
import Headers from '../Header';
import Modal from '../Modal_navi';
import Navigator from '../Navigator';

export default {
  components: {
    Headers,
    Navigator,
    Modal,
  },
  data() {
    return {
      showModal: false,
      categories: [
        {
          id: 1,
          name: '과학/IT',
          korean: '< 국내 연구진, 128억년 전 새 블랙홀 발견 >',
          chineses: '< 韩国研究团队发现了128亿年前的新黑洞 >',
        },
        {
          id: 2,
          name: '사회/문화',
          korean: '< 툭하면 다리 꼬는 당신, 골반 척추도 꼬인다 >',
          chineses: '< 稍不注意，腿会弯曲，骨盆和脊柱也会弯曲 >',
        },
      ],
    };
  },
};
</script>

<style scoped>
  section {
    margin-bottom: 30px;
  }

  .contents-wrapper {
    display: grid;
    width: 90%;
    margin: auto;
  }

  .contents-container {
    background-color: black;
    border-radius: 20px;
    color: white;
    margin: 10px 0;
  }

  .contents-text {
    margin: 40px 0;
    font-size: 15px;
  }

  .contents-category-name {
    width: 80px;
    height: 30px;
    border-radius: 10px;
    background-color: #c21720;
    margin: 40px auto auto auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
