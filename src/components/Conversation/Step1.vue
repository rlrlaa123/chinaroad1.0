<template>
  <div>
    <headers v-bind:header-name="header"></headers>
    <div style="margin: 20px 20px 0 20px;">
      <step step1=true></step>
    </div>
    <video controls="controls" :src="conversation.video1 === '' ? conversation.video1 : sampleVideo"
           type="video/mp4"></video>
    <h1>{{ conversation.name }}</h1>
    <div class="conversation-header">
      <div class="dialog">Dialog</div>
      <span class="language">한국어</span>
    </div>
    <div class="conversation-box" v-for="counter in 10" v-bind:key="counter">
      <div class="conversation-wrapper">
        <div class="conversation-container" v-if="conversation['korean' + counter]">
          <span class="conversation-step">{{ counter %2 === 0 ? 'B' : 'A'}}</span>
          <div class="conversation-sentence">
            <p>{{ conversation['chinese_c' + counter] }}</p>
            <p>{{ conversation['chinese_e' + counter] }}</p>
            <p>{{ conversation['korean' + counter] }}</p>
          </div>
          <div class="conversation-button">
            <img src="../../assets/sound.png"
                 @click.prevent="playAudio(conversation['audio' + counter])">
            <img src="../../assets/change.png"
                 @click.prevent="repeatAudio(conversation['audio' + counter])">
          </div>
        </div>
      </div>
      <div class="conversation-wrapper" v-for="sentence in conversation.sentences"
           v-bind:key="sentence.id">
        <div class="conversation-container">
          <span class="conversation-step">A</span>
          <div class="conversation-sentence">
            <p>{{ sentence.A.chinese_c }}</p>
            <p>{{ sentence.A.chinese_e }}</p>
            <p>{{ sentence.A.korean }}</p>
          </div>
          <div class="conversation-button">
            <img src="../../assets/sound.png">
            <img src="../../assets/change.png">
          </div>
        </div>
        <div class="conversation-container">
          <span class="conversation-step">B</span>
          <div class="conversation-sentence">
            <p>{{ sentence.B.chinese_c }}</p>
            <p>{{ sentence.B.chinese_e }}</p>
            <p>{{ sentence.B.korean }}</p>
          </div>
          <div class="conversation-button">
            <img src="../../assets/sound.png">
            <img src="../../assets/change.png">
          </div>
        </div>
      </div>
    </div>
    <modal v-if="showModal" :step="1" :message="'자막이 있는 영상, 자막이 없는 영상을 차례대로 보며 공부하세요.'"
           @close="showModal = false"></modal>
  </div>
</template>

<script>
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
      showModal: this.$store.state.tut_step1,
      header: '你好!',
      conversation: {},
      // eslint-disable-next-line
      sampleVideo: require('../../assets/video/sample01.mp4'),
      // eslint-disable-next-line
      sampleAudio: require('../../assets/audio/sound_sample.mp3'),
    };
  },
  created() {
    axios.get(`conversations/${this.$route.params.categoryId}/${this.$route.params.conversationId}/step1`, {
    }).then((response) => {
      this.conversation = response.data;
    });
  },
  methods: {
    playAudio(sound) {
      // if (sound !== axios.defaults.baseURL.substr(0, 22)) {
      if (sound !== axios.defaults.baseURL.substr(0, 26)) {
        const audio = new Audio(sound);
        audio.play();
      } else {
        // eslint-disable-next-line
        const audio = new Audio(this.sampleAudio);
        audio.play();
      }
    },
    repeatAudio(sound) {
      if (sound) {
        const audio = new Audio(sound);
        audio.play();
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

  .conversation-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 30px 20px 20px 20px;
  }

  .dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 35px;
    background-color: #c21720;
    color: white;
    font-weight: lighter;
    font-size: 18px;
    border-radius: 20px;
    box-shadow: 0 3px 3px 0 rgba(194,23,32,0.3);
  }

  .language {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 35px;
    background-color: black;
    color: white;
    font-size: 15px;
    border-radius: 20px;
    box-shadow: 0 3px 3px 0 rgba(194,23,32,0.3);
  }

  .conversation-box {
    margin: 40px 20px;
  }

  .conversation-step {
    color: #c21720;
    font-size: 20px;
    font-weight: lighter;
  }

  .conversation-container {
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 10% 80% 10%;
    margin: 15px 0;
  }

  .conversation-sentence {
    font-size: 13px;
    text-align: left;
    margin: 0 15px;
    font-weight: normal;
  }

  .conversation-sentence p {
    margin: 5px 0;
    font-weight: normal;
  }

  .conversation-button img {
    width: 25px;
  }
</style>
