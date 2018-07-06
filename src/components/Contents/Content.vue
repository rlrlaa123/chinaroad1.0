<template>
    <div>
      <headers v-bind:headerName=header></headers>
      <div class="contents-wrapper">
        <h3 class="contents-title-korean"> &lt; {{ content.title_ko }} &gt; </h3>
        <h3 class="contents-title-chinese"> &lt;{{ content.title_ch }} &gt;</h3>
        <img class="contents-image" :src="content.image">
        <p class="contents-text" v-show="language">{{ content.contents_ko }}</p>
        <p class="contents-text" v-show="!language">{{ content.contents_ch }}</p>
        <div style="text-align: right;">
          <img class="contents-btn" src="../../assets/trans.png" v-show="language"
               @click="language=false">
          <img class="contents-btn" src="../../assets/korean.png" v-show="!language"
               @click="language=true">
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import Headers from '../Header_back';

export default {
  components: {
    Headers,
  },
  data() {
    return {
      header: '컨텐츠',
      content: {},
      language: true,
    };
  },
  created() {
    axios.get(`contents/${this.$route.params.contentId}`, {
    }).then((response) => {
      this.content = response.data;
    });
  },
};
</script>

<style scoped>
  .contents-wrapper {
    margin: 50px 10px 10px 10px;
    border-radius: 10px;
    background-color: white;
    padding: 20px;
  }

  .contents-title-korean {
    margin: 10px;
    font-weight: lighter;
    font-size: 13px;
  }

  .contents-title-chinese {
    margin: 10px;
    font-weight: bold;
    color: #c21720;
    font-size: 13px;
  }

  .contents-image {
    width: 100%;
    border-radius: 20px;
    margin: 10px 0;
  }

  .contents-text {
    text-align: left;
    white-space: pre-line;
    word-break: break-all;
    letter-spacing: 0.5px;
    font-size: 13px;
    font-weight: lighter;
  }

  .contents-btn {
    width: 40px;
  }
</style>
