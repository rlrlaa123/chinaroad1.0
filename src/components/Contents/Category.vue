<template>
  <div>
    <headers></headers>
    <section>
      <navigator @click.native="showModal = true" menuName="컨텐츠"></navigator>
    </section>
    <div class="contents-wrapper">
      <div class="contents-container" v-for="category in categories" v-bind:key="category.id">
        <router-link :to="{ name: 'Content', params: { contentId: category.id } }">
          <div class="contents-image"
               v-bind:style="{ backgroundImage: 'url(' + category.image + ')' }"></div>
          <div class="contents-text">
            <div class="contents-category-name-wrapper">
              <div class="contents-category-name">{{ category.name }}</div>
            </div>
            <p>{{ category.korean }}</p>
            <p>{{ category.chineses }}</p>
          </div>
        </router-link>
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
          // eslint-disable-next-line
          image: require('../../assets/contents/10.jpg'),
        },
        {
          id: 2,
          name: '사회/문화',
          korean: '< 툭하면 다리 꼬는 당신, 골반 척추도 꼬인다 >',
          chineses: '< 稍不注意，腿会弯曲，骨盆和脊柱也会弯曲 >',
          // eslint-disable-next-line
          image: require('../../assets/contents/09.jpg'),
        },
        {
          id: 2,
          name: '사회/문화',
          korean: '< 툭하면 다리 꼬는 당신, 골반 척추도 꼬인다 >',
          chineses: '< 稍不注意，腿会弯曲，骨盆和脊柱也会弯曲 >',
          // eslint-disable-next-line
          image: require('../../assets/contents/09.jpg'),
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
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(5,160px);
    grid-gap: 15px;
    max-width: 150%;
    width: 94%;
    margin: auto;
  }

  .contents-container {
    position: relative;
    border-radius: 20px;
    color: white;
    height: 100%;
  }

  .contents-image {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    opacity: 0.8;
  }

  .contents-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .contents-category-name-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .contents-category-name {
    width: 80px;
    height: 30px;
    border-radius: 10px;
    background-color: #c21720;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
