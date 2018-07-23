<template>
  <div class="confirm-wrapper">
    <div v-for="confirm in confirms" v-bind:key="confirm.id">
      <div class="confirm-container" >
        <p class="confirm-header">{{ confirm.id }}번째 질문</p>
        <div class="confirm-contents">
          <div class="confirm-image">
            <img src="../../assets/mic.png">
          </div>
          <span style="font-size: 11px;">{{ confirm.question_ch }}</span>
        </div>
        <!--<div style="display: flex; justify-content: flex-end;">-->
        <!--<button class="confirm-btn">한국어</button>-->
        <!--</div>-->
        <div class="confirm-contents">
          <div class="confirm-image">
            <img src="../../assets/chat.png">
          </div>
          <span>{{ confirm.answer }}</span>
        </div>
      </div>
      <div class="confirm-contents confirm-reply">
        <div class="confirm-image">
          <img src="../../assets/normalchecked.png" style="width: 20px;">
        </div>
        <span>{{ confirm.reply }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['confirmId'],
  components: {
  },
  data() {
    return {
      date: '2017-07-23',
      confirms: [
        {
          id: 1,
          question_ch: '什么运动在韩国很受欢迎?',
          question_ko: '한국에는 어떤 스포츠가 인기가 많니?',
          answer: 'it\'s nice',
          reply: '첨삭완료',
        },
        {
          id: 2,
          question_ch: '你去过棒球场吗？ 韩国棒球场怎么样？',
          question_ko: '야구장에 가본적 있니? 한국 야구장은 어떠니?',
          answer: 'what\'s up',
          reply: '첨삭완료',
        },
      ],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
  .confirm-wrapper {
    padding: 20px;
  }

  .confirm-header {
    text-align: left;
    color: orange;
    font-weight: bold;
  }

  .confirm-container {
    background-color: white;
    padding: 10px;
  }

  .confirm-container img {
    width: 20px;
  }

  .confirm-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .confirm-contents {
    display: grid;
    grid-template-columns: 10% 90%;
    text-align: left;
    align-items: center;
    padding: 20px 0;
  }

  .confirm-contents span {
    padding-left: 10px;
  }

  .confirm-btn {
    text-align: right;
    border: 1px solid orange;
    border-radius: 20px;
    background-color: transparent;
    color: orange;
  }

  .confirm-reply {
    background-color: white;
    margin-top: 2px;
    margin-bottom: 20px;
    padding: 20px 10px;
  }
</style>
