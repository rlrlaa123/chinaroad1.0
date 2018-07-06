<template>
  <div>
    <headers v-bind:header-name="header"
             v-bind:category-i-d="this.$route.params.categoryId"></headers>
    <div style="margin: 20px;">
      <step step2=true></step>
    </div>
    <div class="conversation-box">
      <div class="conversation-wrapper" v-for="counter in 10" v-bind:key="counter">
        <div class="conversation-container-A"
             v-if="counter % 2 !== 0 && conversation[`korean${counter}`]">
          <div>
            <img class="conversation-image" :src="conversation.image1">
          </div>
          <div class="conversation-A">
            <p>{{ conversation[`chinese_c${counter}`] }}</p>
            <img class="conversation-play-btn" src="../../assets/video.png"
                 @click.prevent="playAudio(conversation[`audio${counter}`])">
          </div>
        </div>
        <div class="conversation-container-B"
             v-if="counter % 2 === 0 &&
             conversation[`korean${counter}`] &&
             !answer[`answer${counter}`]">
          <p style="margin-bottom: 5px;" v-show="showText[`showText${counter}`]">
            {{ conversation[`chinese_c${counter}`] }}
          </p>
          <p style="margin-bottom: 5px;" v-show="!showText[`showText${counter}`]">
            {{ conversation[`chinese_c${counter}_hidden`] }}
          </p>
          <p>다음 문장을 완성해서 녹음해주세요.</p>
          <div class="conversation-btn-wrapper">
            <img src="../../assets/voicerec.png" v-show="hidden[`hidden${counter}`]"
                 @click="record(counter)">
            <img src="../../assets/pause.png" v-show="!hidden[`hidden${counter}`]"
                 @click="stop(counter)">
            <img src="../../assets/video.png"
                 @click.prevent="playAudio(conversation[`audio${counter}`])">
            <img src="../../assets/show.png"
                 @click="showText[`showText${counter}`] = true">
          </div>
        </div>
        <div class="conversation-container-B"
             v-if="counter % 2 === 0
             && conversation[`korean${counter}`]
             && answer[`answer${counter}`]">
          <p style="margin-bottom: 5px;">
            {{ conversation[`chinese_c${counter}`] }}
          </p>
          <div class="conversation-answer-wrapper">
            <div>
              <span>원 답안</span>
              <img src="../../assets/video.png" @click="playAudio(conversation[`audio${counter}`])">
            </div>
            <div>
              <span>내 답안</span>
              <img src="../../assets/video.png" @click="play()">
            </div>
          </div>
        </div>
      </div>
    </div>
    <pre>{{ mediaRec }}</pre>
  </div>
</template>
<script>
// import Vue from 'vue';
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
      hidden: {
        hidden1: true,
        hidden2: true,
        hidden3: true,
        hidden4: true,
        hidden5: true,
        hidden6: true,
        hidden7: true,
        hidden8: true,
        hidden9: true,
        hidden10: true,
      },
      showText: {
        showText1: false,
        showText2: false,
        showText3: false,
        showText4: false,
        showText5: false,
        showText6: false,
        showText7: false,
        showText8: false,
        showText9: false,
        showText10: false,
      },
      answer: {
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false,
        answer5: false,
        answer6: false,
        answer7: false,
        answer8: false,
        answer9: false,
        answer10: false,
      },
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

    axios.get(`conversations/${this.$route.params.categoryId}/${this.$route.params.conversationId}/step1`, {
    }).then((response) => {
      for (let i = 1; i <= 10; i += 1) {
        this.conversation = response.data;
        const textLength = this.conversation[`chinese_c${i}`].length;
        let hiddenText = '';
        for (let j = 0; j <= textLength / 2; j += 1) {
          hiddenText = hiddenText.concat('-');
        }

        this.conversation[`chinese_c${i}_hidden`]
          = this.conversation[`chinese_c${i}`].substr(0, (textLength / 2) - 1) + hiddenText;
      }
    });
  },
  methods: {
    playAudio(sound) {
      if (sound) {
        const audio = new Audio(sound);
        audio.play();
      }
    },
    record(index) {
      this.hidden[`hidden${index}`] = false;
      // this.mediaRec.startRecord();
    },
    stop(index) {
      this.answer[`answer${index}`] = true;
      // this.mediaRec.stopRecord();
    },
    play() {
      // this.mediaRec.play();
    },
    release() {
      // this.mediaRec.release();
    },
  },
};
</script>

<style scoped>
  .conversation-box {
    width: 90%;
    margin: auto;
  }

  .conversation-wrapper {
    width: 100%;
  }

  .conversation-wrapper p {
    margin: 0;
  }

  .conversation-container-A {
    display: grid;
    grid-template-columns: 20% 80%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .conversation-image {
    width: 50px;
  }

  .conversation-A {
    background-color: #e3e3e3;
    border-radius: 15px;
    margin: 5px;
    text-align: left;
    padding: 10px;
    min-height: 60px;
    position: relative;
  }

  .conversation-play-btn {
    width: 25px;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  .conversation-container-B {
    border: 1px solid #c5c5c5;
    border-radius: 15px;
    min-height: 60px;
    margin: 5px;
    text-align: left;
    padding: 10px;
    position: relative;
  }

  .conversation-btn-wrapper {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .conversation-answer-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .conversation-btn-wrapper img {
    width: 25px;
  }

  .conversation-answer-wrapper div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
  }

  .conversation-answer-wrapper img {
    width: 25px;
    margin-left: 5px;
  }
</style>
