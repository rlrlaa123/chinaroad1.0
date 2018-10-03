<template>
  <div>
    <headers v-bind:header-name="header"></headers>
    <div style="margin: 20px 20px 0 20px;">
      <step step3=true></step>
    </div>
    <video ref="video1"
           :src="conversation.video2 ? conversation.video2 : sampleVideo"
           v-if="video"
           type='video/mp4'></video>
    <video ref="video2"
           :src="conversation.video3 ? conversation.video3 : sampleVideo"
           v-else
           type='video/mp4'></video>
    <div class="video-btn" v-if="recordState === 0">
      <img src="../../assets/microphone.png" @click.prevent="recordAudioFirst()">
    </div>
    <div class="video-btn" v-if="recordState === 4">
      <img src="../../assets/microphone.png" @click.prevent="recordAudioSecond()">
    </div>
    <div class="video-btn animated flash" v-else-if="recordState === 1 || recordState === 5">
      <img src="../../assets/microphone.png">
    </div>
    <p class="video-text animated flash" v-if="recordState === 0">{{ recordText }}</p>
    <p class="video-text" v-else-if="recordState === 1">{{ recordText }}</p>
    <p class="video-text" v-else-if="recordState === 2">{{ recordText }}</p>
    <p class="video-text animated flash" v-else-if="recordState === 3">{{ recordText }}</p>
    <p class="video-text animated flash" v-else-if="recordState === 4">{{ recordText }}</p>
    <p class="video-text" v-else-if="recordState === 5">{{ recordText }}</p>
    <p class="video-text" v-else-if="recordState === 6">{{ recordText }}</p>
    <p class="video-text animated flash" v-else-if="recordState === 7">{{ recordText }}</p>
    <p class="video-text animated flash" v-else-if="recordState === 8">{{ recordText }}</p>
    <div class="play-btn-wrapper" v-if="recordState === 2">
      <div class="animated flash" v-show="play === false" @click="playRecordedFirst">
        <img src="../../assets/video.png">
      </div>
    </div>
    <div class="play-btn-wrapper" v-if="recordState === 6">
      <div class="animated flash" v-show="play === false" @click="playRecordedSecond">
        <img src="../../assets/video.png">
      </div>
    </div>
    <pre>{{ mediaRec }}</pre>
    <modal v-if="showModal" :step="3" :message="'영상에 맞춰서 녹음하고 직접 들어보세요.'"
           @close="showModal = false"></modal>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import Headers from './Header_back';
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
      video: true,
      // eslint-disable-next-line
      sampleAudio: require('../../assets/audio/sound_sample.mp3'),
      src: '',
    };
  },
  created() {
    axios.get(`conversations/${this.$route.params.categoryId}/${this.$route.params.conversationId}/step3`, {
    }).then((response) => {
      this.conversation = response.data;
    });
  },
  methods: {
    // Start Record
    recordAudioFirst() {
      const currentdate = new Date();
      const datetime = currentdate.getFullYear().toString()
        + (currentdate.getMonth() + 1).toString()
        + currentdate.getDate().toString()
        + currentdate.getHours().toString()
        + currentdate.getMinutes().toString()
        + currentdate.getSeconds().toString();
      const src = `chinaroad/chinaroad${datetime}.mp3`;
      this.src = `chinaroad/chinaroad${datetime}.mp3`;

      this.mediaRec = new Vue.cordova.Media(src,
        // success callback
        () => {
          console.log('recordAudio():Audio Success');
        },

        // error callback
        (err) => {
          console.log(`recordAudio():Audio Error: ${err.code}`);
        },
        (status) => {
          console.log(`Media Status: ${status}`);
        },
      );
      console.log('Start Record');
      const playPromise = this.$refs.video1.play();
      this.mediaRec.startRecord();
      this.recordText = '녹음중 입니다';
      this.recordState += 1;
      this.videoDuration = this.$refs.video1.duration;
      // Pause Record
      const self = this;
      console.log(this.videoDuration);
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log(self.videoDuration);
          setTimeout(() => {
            console.log('Pause Record');
            self.$refs.video1.pause();
            self.mediaRec.stopRecord();
            self.recordText = '녹음한 내용을 들어보세요.';
            self.recordState += 1;
            self.play = false;
          }, self.videoDuration * 1000);
        })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    recordAudioSecond() {
      // const currentdate = new Date();
      // const datetime = currentdate.getFullYear().toString()
      //   + (currentdate.getMonth() + 1).toString()
      //   + currentdate.getDate().toString()
      //   + currentdate.getHours().toString()
      //   + currentdate.getMinutes().toString()
      //   + currentdate.getSeconds().toString();
      // const src = `chinaroad${datetime}.mp3`;
      //
      // this.mediaRec = new Vue.cordova.Media(src,
      //   // success callback
      //   () => {
      //     console.log('recordAudio():Audio Success');
      //   },
      //
      //   // error callback
      //   (err) => {
      //     console.log(`recordAudio():Audio Error: ${err.code}`);
      //   },
      //   (status) => {
      //     console.log(`Media Status: ${status}`);
      //   },
      // );
      console.log('Start Record');
      this.$refs.video2.play();
      // this.mediaRec.startRecord();
      this.recordText = '녹음중 입니다';
      this.recordState += 1;
      this.videoDuration = this.$refs.video2.duration;
      // Pause Record
      const self = this;
      setTimeout(() => {
        console.log('Pause Record');
        self.$refs.video2.pause();
        // self.mediaRec.stopRecord();
        self.recordText = '녹음한 내용을 들어보세요.';
        self.recordState += 1;
        self.play = false;
        console.log(self.$refs.video1.currentTime);
      }, self.videoDuration * 1000);
    },
    playRecordedFirst() {
      this.recordState += 1;
      // this.$refs.video1.pause();
      // this.mediaRec.stop();
      // this.mediaRec.release();
      // this.mediaRec.play();

      const audio = new Audio(this.src);
      audio.play();
      this.$refs.video1.currentTime = '0';
      console.log(this.$refs.video1.currentTime);
      const playPromise = this.$refs.video1.play();
      this.play = true;
      const self = this;
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setTimeout(() => {
            self.$refs.video1.pause();
            // self.mediaRec.stop();
            // self.mediaRec.release();
            // 다음 영상
            self.recordState += 1;
            self.video = false;
            self.recordText = '자막 없이 녹음해보세요.';
          }, self.videoDuration * 1000);
        })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    playRecordedAudioFirst() {
      // this.mediaRec.stop();
      // this.mediaRec.release();
      this.mediaRec.play();
      setTimeout(() => {
        this.mediaRec.stop();
        this.mediaRec.release();
      }, this.videoDuration * 1000);
    },
    playRecordedSecond() {
      // this.$refs.video2.pause();
      this.$refs.video2.currentTime = '0';
      this.$refs.video2.play();
      this.recordState += 1;
      this.play = true;
      // this.mediaRec.play();
      setTimeout(() => {
        this.$refs.video2.pause();
        // this.mediaRec.stop();
        // this.mediaRec.release();
        // 다음 영상
        this.recordState += 1;
        this.video = false;
        this.recordText = '이번 단계를 모두 마치셨습니다!';
      }, this.videoDuration * 1000);
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
    justify-content: center;
    align-items: center;
    width: 250px;
    margin: auto;
    margin-top: 50px;
    position: relative;
  }

  .play-btn-wrapper img {
    width: 100px;
    margin: 0 10px;
  }
</style>
