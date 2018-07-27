<template>
  <div id="wrap">
    <div id="wrapper">
      <div class="question-wrapper" v-for="show in showEdits" v-bind:key="show.id">
        <div class="question-container">
          <div>
            <img class="question-image" :src=show.questions.image>
            <p v-show="show.language">{{ show.questions.question_ch }}</p>
            <p v-show="!show.language">{{ show.questions.question_ko }}</p>
            <div class="btn-language-wrapper">
              <div></div>
              <div style="display: flex;">
                <span v-show="show.language" class="btn-language"
                      @click="switchLanguage(show.id - 1)">
                  한국어
                </span>
                <span v-show="!show.language" class="btn-language"
                      @click="switchLanguage(show.id - 1)">
                  중국어
                </span>
                <span class="btn-language" @click="show.showExModal = true">예시답안</span>
              </div>
            </div>
            <p class="current-time">{{ currentTime  }}</p>
          </div>
          <div v-show="show.language" class="question-audio"
               @click="playQuestion(show.questions.question_ch_audio)">
            <span>{{ show.id }}번째</span>
            <img src="../../assets/headphone.png">
          </div>
          <div v-show="!show.language" class="question-audio"
               @click="playQuestion(show.questions.question_ko_audio)">
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
        <ex-modal v-if="show.showExModal && show.language" :text="show.questions.answer_ch"
                  :record="show.questions.answer_ch_audio"
                  @close="show.showExModal = false"></ex-modal>
        <ex-modal v-if="show.showExModal && !show.language" :text="show.questions.answer_ko"
                  :record="show.questions.answer_ko_audio"
                  @close="show.showExModal = false"></ex-modal>
      </div>
      <div class="reply-box">
        <div class="reply-chinese">中</div>
        <input class="reply-input" v-model="reply" placeholder="질문에 답해주세요.">
        <div class="btn" @click="submitAnswer(reply, reply_index)">제출</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      edits: null,
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
    axios.get(`checkTodayConfirms/${this.$firebaseAuth.currentUser().email}`, {
    }).then((response) => {
      let count = 0;
      for (let i = 0; i < response.data.length; i += 1) {
        if (response.data[i] !== null) {
          count += 1;
        }
      }

      if (count === 0) {
        axios.get('todayedits/', {
        }).then((response2) => {
          this.edits = response2.data;
          if (this.edits.length !== 0) {
            this.showEdits.push({
              id: 1,
              questions: this.edits[0],
              answers: '',
              language: true,
              showExModal: false,
            });
          } else {
            // eslint-disable-next-line
            if (confirm('아직 질문이 등록되지 않았습니다.')) {
              this.$store.commit('confirm');
            }
          }
        });
      } else {
        this.$emit('closeModal');
        axios.get('todayedits/', {
        }).then((response3) => {
          this.edits = response3.data;
          if (this.edits.length !== 0) {
            this.showEdits.push({
              id: 1,
              questions: this.edits[0],
              answers: '',
              language: true,
              showExModal: false,
            });
          }
          for (let i = 0; i < response.data.length; i += 1) {
            if (response.data[i] !== null) {
              this.reply_index += 1;
              this.showEdits[this.showEdits.length - 1].answers = response.data[i].reply;
              this.reply = '';
              if (this.edits.length === this.showEdits.length) {
                if (!this.$store.state.confirmed) {
                  // eslint-disable-next-line
                  if (confirm('오늘의 첨삭을 마쳤습니다.')) {
                    this.$store.commit('confirm');
                  }
                }
              } else {
                this.showEdits.push({
                  id: this.reply_index + 1,
                  questions: {},
                  answers: '',
                  language: true,
                  showExModal: false,
                });
                this.showEdits[this.showEdits.length - 1].questions = this.edits[this.reply_index];
              }
            }
          }
        });
      }
    });
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
    submitAnswer(reply, editIndex) {
      const currentDate = new Date();
      const request = {
        email: this.$firebaseAuth.currentUser().email,
        edit_id: this.edits[editIndex].id,
        reply,
        date: `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`,
      };
      axios.post('sendReply/', request).then((response) => {
        // eslint-disable-next-line
        console.log(response);
      });
      this.reply_index += 1;
      this.showEdits[this.showEdits.length - 1].answers = reply;
      this.reply = '';
      if (this.edits.length === this.showEdits.length) {
        // eslint-disable-next-line
        confirm('오늘의 첨삭을 마쳤습니다.')
      } else {
        this.showEdits.push({
          id: this.reply_index + 1,
          questions: {},
          answers: '',
          language: true,
          showExModal: false,
        });
        this.showEdits[this.showEdits.length - 1].questions = this.edits[this.reply_index];
      }
    },
    switchLanguage(id) {
      if (this.showEdits[id].language) {
        this.showEdits[id].language = false;
      } else {
        this.showEdits[id].language = true;
      }
    },
    playQuestion(sound) {
      if (sound) {
        const audio = new Audio(sound);
        audio.play();
      }
    },
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
