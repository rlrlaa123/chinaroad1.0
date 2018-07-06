<template>
  <div>
    <headers v-bind:header-name="header"
             v-bind:category-i-d="this.$route.params.categoryId"></headers>
    <div style="margin: 20px 20px 0 20px;">
      <step step3=true></step>
    </div>
    <video controls="controls" :src="conversation.video2" type='video/mp4'></video>
    <div class="video-btn">
      <img src="../../assets/microphone.png" @click="recordAudio()">
    </div>
    <p class="video-text">{{ recordText }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import Headers from '../Header_back';
import Step from './Step_selector';

export default {
  components: {
    Headers,
    Step,
  },
  data() {
    return {
      header: '你好!',
      conversation: {},
      mediaRec: '',
      recordState: 0,
      recordText: '마이크를 클릭하여 더빙 시작하기',
    };
  },
  created() {
    // const currentdate = new Date();
    // const datetime = currentdate.getFullYear().toString()
    //   + (currentdate.getMonth() + 1).toString()
    //   + currentdate.getDate().toString()
    //   + currentdate.getHours().toString()
    //   + currentdate.getMinutes().toString()
    //   + currentdate.getSeconds().toString();
    // this.mediaRec = new Vue.cordova.Media(`${datetime}.mp3`);

    axios.get(`conversations/${this.$route.params.categoryId}/${this.$route.params.conversationId}/step3`, {
    }).then((response) => {
      this.conversation = response.data;
    });
  },
  methods: {
    recordAudio() {
      if (this.recordState === 0) {
        document.getElementsByTagName('video')[0].play();
        // this.mediaRec.startRecord();
        this.recordText = '녹음중 입니다';
        this.recordState += 1;
      } else if (this.recordState === 1) {
        // this.mediaRec.stopRecord();
        this.recordText = '녹음된 음성을 들어보시려면 다시 눌러주세요.';
        this.recordState += 1;
      } else {
        this.recordText = '영상과 비교해보세요.';
        document.getElementsByTagName('video')[0].play();
        // this.mediaRec.play();
      }
    },
  },
};
</script>

<style scoped>
  video {
    width: 100%;
    height: 235px;
  }

  .video-btn {
    width: 150px;
    height: 150px;
    border: 1px solid #c21720;
    border-radius: 100px;
    margin: auto;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    align-items: center;
    justify-items: center;
  }

  .video-text {
    font-size: 20px;
    font-weight: lighter;
  }
</style>
