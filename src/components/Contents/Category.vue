<template>
  <div>
    <headers></headers>
    <navigator naviName="컨텐츠" :toggle=toggle :menuName=menuName
               @easy="toggle = true" @hard="toggle = false" @open="showModal = true"></navigator>
    <div class="contents-wrapper">
      <div class="contents-container" v-for="category in categories" v-bind:key="category.id">
        <router-link :to="{ name: 'Content', params: { contentId: category.id } }">
          <div class="contents-image"
               v-bind:style="{ backgroundImage: 'url(' + category.image + ')' }"></div>
          <div class="contents-text">
            <div class="contents-category-name-wrapper">
              <div class="contents-category-name">{{ category.category }}</div>
            </div>
            <p>{{ category.title_ko }}</p>
            <p>{{ category.title_ch }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <modal v-if="showModal" @close="showModal = false">
    </modal>
  </div>
</template>

<script>
import axios from 'axios';
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
      toggle: true,
      menuName: ['초급', '중급'],
      categories: [],
    };
  },
  created() {
    axios.get('contents', {
    }).then((response) => {
      const categories = response.data;
      categories.map((ele) => {
        this.categories.push(ele);
        return 1;
      });
    });
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
