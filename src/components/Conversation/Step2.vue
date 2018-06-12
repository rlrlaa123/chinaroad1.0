<template>
  <div>
    <headers v-bind:header-name="header" v-bind:tag="1"></headers>
    <div style="margin: 20px;">
      <step step2=true></step>
    </div>
    <div class="conversation-box">
      <div class="conversation-wrapper" v-for="conversations in conversation.sentences"
           v-bind:key="conversations.id">
        <div class="conversation-container-A">
          <div>
            <img class="conversation-image" :src="conversation.image">
          </div>
          <div class="conversation-A">
            <p>{{ conversations.A.chinese_c }}</p>
            <img class="conversation-play-btn" src="../../assets/video.png"
                 @click.prevent="playAudio(conversations.A.audio)">
          </div>
        </div>
        <div class="conversation-container-B">
          <p style="margin-bottom: 5px;" v-if="conversations.B.hidden">
            {{ conversations.B.chinese_c_hidden }}
          </p>
          <p style="margin-bottom: 5px;" v-else>
            {{ conversations.B.chinese_c }}
          </p>
          <p>다음 문장을 완성해서 녹음해주세요.</p>
          <div class="conversation-btn-wrapper">
            <img src="../../assets/voicerec.png">
            <img src="../../assets/video.png" @click.prevent="playAudio(conversations.B.audio)">
            <img src="../../assets/show.png" @click.prevent="conversations.B.hidden = false">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      conversation: {
        id: 1,
        title: '你好!',
        // eslint-disable-next-line
        image: require('../../assets/people/08.png'),
        // eslint-disable-next-line
        video: require('../../assets/video/sample01.mp4'),
        sentences: [
          {
            id: 1,
            A: {
              chinese_c: '你好，‘小龙’, 周末过得好吗？',
              chinese_c_hidden: '',
              chinese_e: 'nǐ hǎo，‘xiǎo lóng’, zhōu mò guò de hǎo ma？',
              korean: '안녕, “小龙”. 주말은 잘 보냈니?',
              // eslint-disable-next-line
              audio: require('../../assets/audio/sound_sample.mp3'),
              hidden: true,
            },
            B: {
              chinese_c: '嗯，过得很好，你呢？',
              chinese_c_hidden: '',
              chinese_e: 'èng， guòde hěn hǎo，nǐ ne？',
              korean: '응, 잘 보냈어. 너는 주말 잘 보냈어?',
              // eslint-disable-next-line
              audio: require('../../assets/audio/sound_sample.mp3'),
              hidden: true,
            },
          },
          {
            id: 2,
            A: {
              chinese_c: '我也过得很好，谢谢你的关心。',
              chinese_c_hidden: '',
              chinese_e: '',
              korean: '나도 정말 좋았어. 물어봐 줘서 고마워.',
              // eslint-disable-next-line
              audio: require('../../assets/audio/sound_sample.mp3'),
              hidden: true,
            },
            B: {
              chinese_c: '小龙’, 周末过得好吗',
              chinese_c_hidden: '',
              chinese_e: 'èng， guòde hěn hǎo，nǐ ne？',
              korean: '아자아자 화이팅',
              // eslint-disable-next-line
              audio: require('../../assets/audio/sound_sample.mp3'),
              hidden: true,
            },
          },
        ],
      },
    };
  },
  mounted() {
    const self = this;
    self.conversation.sentences.map((ele) => {
      const element = ele.A;
      const textLength = element.chinese_c.length;
      let hiddenText = '';
      for (let i = 0; i <= textLength / 2; i += 1) {
        hiddenText = hiddenText.concat('-');
      }

      element.chinese_c_hidden = element.chinese_c.substr(0, (textLength / 2) - 1) + hiddenText;

      return 1;
    });

    self.conversation.sentences.map((ele) => {
      const element = ele.B;
      const textLength = element.chinese_c.length;
      let hiddenText = '';
      for (let i = 0; i <= textLength / 2; i += 1) {
        hiddenText = hiddenText.concat('-');
      }

      element.chinese_c_hidden = element.chinese_c.substr(0, (textLength / 2) - 1) + hiddenText;

      return 1;
    });
  },
  methods: {
    playAudio(sound) {
      if (sound) {
        const audio = new Audio(sound);
        audio.play();
      }
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

  .conversation-btn-wrapper img {
    width: 25px;
  }
</style>
