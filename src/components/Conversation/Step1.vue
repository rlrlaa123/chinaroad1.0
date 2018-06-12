<template>
  <div>
    <headers v-bind:header-name="header" v-bind:tag="1"></headers>
    <div style="margin: 20px 20px 0 20px;">
      <step step1=true></step>
    </div>
    <video controls="controls">
      <source :src="conversation.video" type='video/mp4'>
    </video>
    <h1>{{ conversation.title }}</h1>
    <div class="conversation-header">
      <div class="dialog">Dialog</div>
      <span class="language">한국어</span>
    </div>
    <div class="conversation-box">
      <div class="conversation-wrapper" v-for="sentence in conversation.sentences"
           v-bind:key="sentence.id">
        <div class="conversation-container">
          <span class="conversation-step">A</span>
          <div class="conversation-sentence">
            <p>{{ sentence.A.chinese_c }}</p>
            <p class="lighter">{{ sentence.A.chinese_e }}</p>
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
            <p class="lighter">{{ sentence.B.chinese_e }}</p>
            <p>{{ sentence.B.korean }}</p>
          </div>
          <div class="conversation-button">
            <img src="../../assets/sound.png">
            <img src="../../assets/change.png">
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
    font-weight: lighter;
  }

  .conversation-sentence p {
    margin: 5px 0;
  }

  .conversation-button img {
    width: 25px;
  }

  .lighter {
    color: grey;
  }
</style>
