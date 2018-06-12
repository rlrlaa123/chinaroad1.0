<template>
  <div>
    <headers v-bind:header-name="header" v-bind:tag="1"></headers>
    <div style="margin: 20px 20px 0 20px;">
      <step step3=true></step>
    </div>
    <video controls="controls">
      <source :src="conversation.video" type='video/mp4'>
    </video>
    <div class="video-btn">
      <img src="../../assets/microphone.png">
    </div>
    <p class="video-text">더빙 시작하기</p>
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
        video: require('../../assets/video/sample01(sound x).mp4'),
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
