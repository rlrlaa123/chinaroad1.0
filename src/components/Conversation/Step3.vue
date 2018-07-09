<template>
  <div>
    <headers v-bind:header-name="header"
             v-bind:category-i-d="this.$route.params.categoryId"></headers>
    <div style="margin: 20px 20px 0 20px;">
      <step step3=true></step>
    </div>
    <video ref="video"
           :src="conversation.video2 === '' ? conversation.video2 : sampleVideo"
           type='video/mp4'></video>
    <div class="video-btn" v-if="recordState === 0">
      <img src="../../assets/microphone.png" @click.prevent="recordAudio()">
    </div>
    <div id="flash" class="video-btn animated flash" v-else-if="recordState === 1">
      <img src="../../assets/microphone.png">
    </div>
    <div class="video-btn" v-else-if="recordState === 2">
      <img src="../../assets/microphone.png" @click.prevent="playAudio()">
    </div>
    <div class="video-btn animated flash" v-else-if ="recordState === 3">
      <img src="../../assets/microphone.png">
    </div>
    <p class="video-text animated flash" v-if="recordState === 0">{{ recordText }}</p>
    <p class="video-text" v-else-if="recordState === 1">{{ recordText }}</p>
    <p class="video-text animated flash" v-else-if="recordState === 2">{{ recordText }}</p>
    <p class="video-text" v-else-if="recordState === 3">{{ recordText }}</p>
    <p class="video-text" v-else-if="recordState === 4">{{ recordText }}</p>
    <div class="play-btn-wrapper" v-if="recordState === 4">
      <div v-show="play === false" @click="playRecorded"><img src="../../assets/video.png"></div>
      <div v-show="play === true" @click="pauseRecorded"><img src="../../assets/pause.png"></div>
      <div @click="stopRecroded"><img src="../../assets/stop.png"></div>
    </div>
    <p class="video-text" v-else-if="recordState === 4">{{ recordText }}</p>
    <pre>{{ mediaRec.mediaStatus}}</pre>
    <pre>{{ mediaRec }}</pre>
    <modal v-if="showModal" :step="3" :message="'영상에 맞춰서 녹음하고 직접 들어보세요.'"
           @close="showModal = false"></modal>
  </div>
</template>

<script>
// import Vue from 'vue';
import axios from 'axios';
import Headers from '../Header_back';
import Step from './Step_selector';
import Modal from './Step_Modal';

export default {
  components: {
    Headers,
    Step,
    Modal,
  },
  data() {
    return {
      showModal: this.$store.state.tut_step3,
      header: '你好!',
      conversation: {},
      mediaRec: '',
      // eslint-disable-next-line
      sampleVideo: require('../../assets/video/sample.mp4'),
      recordState: 0,
      recordText: '화면에 맞춰서 녹음해주세요.',
      videoDuration: 0,
      play: false,
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
    // this.mediaRec = new Vue.cordova.Media(`${datetime}.mp3`,
    // (success) => { alert(`success: ${JSON.stringify(success)}`); },
    // (error) => { alert(`error: ${JSON.stringify(error)}`); }, (status) => {
    //   alert(status);
    // });

    axios.get(`conversations/${this.$route.params.categoryId}/${this.$route.params.conversationId}/step3`, {
    }).then((response) => {
      this.conversation = response.data;
    });
  },
  methods: {
    // Start Record
    recordAudio() {
      if (this.recordState === 0) {
        this.$refs.video.play();
        // this.mediaRec.startRecord();
        // alert(this.mediaRec.getCurrentPosition((success) => { alert(`success: ${success}`); },
        // (error) => { alert(`error: ${error}`); }));
        this.recordText = '녹음중 입니다';
        this.recordState += 1;
        this.videoDuration = this.$refs.video.duration;
        // Pause Record
        setTimeout(() => {
          this.$refs.video.pause();
          // this.mediaRec.pauseRecord();
          // alert(this.mediaRec.getCurrentPosition((success) => { alert(`success: ${success}`); },
          // (error) => { alert(`error: ${error}`); }));
          this.recordText = '자막 없이 녹음해보세요.';
          this.recordState += 1;
        }, (this.videoDuration / 2) * 1000);
      }
    },
    // Resume Record
    playAudio() {
      this.recordText = '녹음중 입니다.';
      // this.mediaRec.resumeRecord();
      // alert(this.mediaRec.getCurrentPosition((success) => { alert(`success: ${success}`); },
      // (error) => { alert(`error: ${error}`); }));
      this.$refs.video.play();
      this.recordState += 1;

      // Stop Record
      setTimeout(() => {
        this.recordState += 1;
        this.recordText = '영상과 비교해 보세요.';
        // this.mediaRec.stopRecord();
        // alert(this.mediaRec.getCurrentPosition((success) => { alert(`success: ${success}`); },
        // (error) => { alert(`error: ${error}`); }));
      }, (this.videoDuration / 2) * 1000);
    },
    playRecorded() {
      this.$refs.video.play();
      // this.mediaRec.play();
      this.play = true;
    },
    pauseRecorded() {
      this.$refs.video.pause();
      // this.mediaRec.pause();
      this.play = false;
    },
    stopRecroded() {
      this.$refs.video.pause();
      // this.mediaRec.stop();
      // this.mediaRec.release();
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

  .flash {
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .play-btn-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    margin: auto;
    margin-top: 50px;
  }

  .play-btn-wrapper img {
    width: 60px;
    margin: 0 10px;
  }
</style>
