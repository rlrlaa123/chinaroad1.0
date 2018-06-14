<template>
  <div id="wrap">
    <div id="wrapper">
      <div class="question-wrapper" v-for="show in showEdits" v-bind:key="show.id">
        <div class="question-container">
          <div>
            <img class="question-image" :src=show.questions.image>
            <p v-if="language">{{ show.questions.question_c }}</p>
            <p v-else>{{ show.questions.question_k }}</p>
            <div class="btn-language-wrapper">
              <div></div>
              <div style="display: flex;">
                <span v-if="language" class="btn-language" @click="switchLanguage">
                  한국어
                </span>
                <span v-else class="btn-language" @click="switchLanguage">
                  중국어
                </span>
                <span class="btn-language" @click="showExModal = true">예시답안</span>
              </div>
            </div>
            <p class="current-time">{{ currentTime  }}</p>
          </div>
          <div v-if="language" class="question-audio"
               @click="playQuestion(show.questions.question_c_audio)">
            <span>{{ show.id }}번째</span>
            <img src="../../assets/headphone.png">
          </div>
          <div v-else class="question-audio" @click="playQuestion(show.questions.question_k_audio)">
            <span>{{ show.id }}번째</span>
            <img src="../../assets/headphone.png">
          </div>
        </div>
        <div class="answer-wrapper" v-if="show.answers">
          <p style="margin-top: 0;">{{ show.answers }}</p>
          <p class="current-time2" style="margin-bottom: 0; text-align: left;">
            {{ currentTime  }}
          </p>
        </div>
        <ex-modal v-if="showExModal && language" :text="show.questions.answer_c"
                  :record="show.questions.answer_c_audio" @close="showExModal = false"></ex-modal>
        <ex-modal v-if="showExModal && !language" :text="show.questions.answer_k"
                  :record="show.questions.answer_k_audio" @close="showExModal = false"></ex-modal>
      </div>
      <div class="reply-box">
        <div class="reply-chinese">中</div>
        <input class="reply-input" v-model="reply" placeholder="질문에 답해주세요.">
        <div class="btn" @click="submitAnswer(reply)">제출</div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './Modal_edit';
import Headers from '../Header_back';
import Navigator from '../Navigator';
import exModal from './Modal_example';

export default {
  components: {
    Modal,
    Headers,
    Navigator,
    exModal,
  },
  data() {
    return {
      showExModal: false,
      currentTime: '',
      reply: '',
      reply_index: 0,
      // language === true, 중국어
      language: true,
      edits: [
        {
          id: 1,
          question_k: '한국에는 어떤 스포츠가 가장 인기가 많니?',
          answer_k: '야구야',
          question_c: '仅指現代標準漢語以北京話为标准语音、以官话为基础的現代白话文著',
          answer_c: '在非表音情況下，僅指現代白話文的書面語。大中华地区',
          // eslint-disable-next-line
          question_c_audio: require('../../assets/audio/sound_sample.mp3'),
          // eslint-disable-next-line
          answer_c_audio: require('../../assets/audio/sound_sample.mp3'),
          // eslint-disable-next-line
          question_k_audio: require('../../assets/audio/sound_sample.mp3'),
          // eslint-disable-next-line
          answer_k_audio: require('../../assets/audio/sound_sample.mp3'),
          // eslint-disable-next-line
          image: require('../../assets/edit/009.jpg'),
        },
        {
          id: 2,
          question_k: '한국에는 어떤 스포츠가 가장 인기가 많니?',
          answer_k: '야구야',
          question_c: '仅指現代標準漢語以北京話为标准语音、以官话为基础的現代白话文著',
          answer_c: '在非表音情況下，僅指現代白話文的書面語。大中华地区',
          // eslint-disable-next-line
          question_c_audio: require('../../assets/audio/sound_sample.mp3'),
          // eslint-disable-next-line
          answer_c_audio: require('../../assets/audio/sound_sample.mp3'),
          // eslint-disable-next-line
          question_k_audio: require('../../assets/audio/sound_sample.mp3'),
          // eslint-disable-next-line
          answer_k_audio: require('../../assets/audio/sound_sample.mp3'),
          // eslint-disable-next-line
          image: require('../../assets/edit/007.jpg'),
        },
        {
          id: 3,
          question_k: '한국에는 어떤 스포츠가 가장 인기가 많니?',
          answer_k: '야구야',
          question_c: '仅指現代標準漢語以北京話为标准语音、以官话为基础的現代白话文著',
          answer_c: '在非表音情況下，僅指現代白話文的書面語。大中华地区',
          // eslint-disable-next-line
          question_c_audio: require('../../assets/audio/sound_sample.mp3'),
          // eslint-disable-next-line
          answer_c_audio: require('../../assets/audio/sound_sample.mp3'),
          // eslint-disable-next-line
          question_k_audio: require('../../assets/audio/sound_sample.mp3'),
          // eslint-disable-next-line
          answer_k_audio: require('../../assets/audio/sound_sample.mp3'),
          // eslint-disable-next-line
          image: require('../../assets/edit/sample2.jpeg'),
        },
      ],
      showEdits: [],
    };
  },
  mounted() {
    const currentdate = new Date();
    this.currentTime = `${currentdate.getDate()} /
      ${(currentdate.getMonth() + 1)} /
      ${currentdate.getFullYear()} @
      ${currentdate.getHours()} :
      ${currentdate.getMinutes()} :
      ${currentdate.getSeconds()}`;

    if (this.edits) {
      this.showEdits.push({
        id: 1,
        questions: this.edits[0],
        answers: '',
      });
    } else {
      /* eslint-disable */
      confirm('아직 질문이 등록되지 않았습니다.');
    }
  },
  methods: {
    toggleLevel() {
      // 초급 클릭
      if (this.level) {
        this.level = false;
      } else { // 중급 클릭
        this.level = true;
      }
    },
    submitAnswer(reply) {
      this.reply_index += 1;
      this.showEdits[this.showEdits.length - 1].answers = reply;
      this.reply = '';
      if (this.edits.length === this.showEdits.length) {
        /* eslint-disable */
        confirm('오늘의 첨삭을 마쳤습니다.');
      } else {
        this.showEdits.push({
          id: this.reply_index + 1,
          questions: {},
          answers: '',
        });
        this.showEdits[this.showEdits.length - 1].questions = this.edits[this.reply_index];
      }
    },
    switchLanguage() {
      if (this.language) {
        this.language = false;
      } else {
        this.language = true;
      }
    },
    playQuestion(sound) {
      if (sound) {
        const audio = new Audio(sound);
        audio.play();
      }
    }
  },
};
</script>

<style scoped>
  #wrapper {
    margin-bottom: 60px;
  }

  .reply-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .reply-chinese {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background-color: rgba(0,0,0,0.2);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-left: 10px;
  }

  .reply-input {
    width: 60%;
    height: 30px;
  }

  .btn {
    width: 60px;
    height: 30px;
    color: white;
    font-size: 12px;
    border: none;
    border-radius: 0;
  }

  .question-wrapper {
    padding: 15px;
    padding-bottom: 0;
  }

  .question-container {
    max-width: 70%;
    background-color: white;
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 10px;
    position: relative;
  }

  .question-audio {
    position: absolute;
    bottom: 10px;
    right: -35px;
    font-size: 10px;
    font-weight: lighter;
  }

  .question-audio img {
    width: 15px;
    display: block;
    margin: auto;
  }

  .question-image {
    width: 100%;
    max-height: 155px;
  }

  .question-container p {
    font-size: 10px;
    text-align: left;
  }

  .btn-language-wrapper {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .btn-language {
    width: 50px;
    height: 15px;
    border: 1px solid #c21720;
    color: #c21720;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    font-size: 10px;
  }

  .current-time {
    text-align: right !important;
    font-weight: lighter;
    color: grey;
    font-size: 10px;
  }

  .current-time2 {
    text-align: left !important;
    font-weight: lighter;
    color: grey;
    font-size: 10px;
  }

  .answer-wrapper {
    background-color: white;
    border-radius: 20px;
    max-width: 35%;
    margin-left: auto;
    padding: 10px;
    text-align: left;
    font-size: 10px;
  }
</style>
