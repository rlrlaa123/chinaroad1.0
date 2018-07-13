<template>
  <div id="background">
    <header id="header">
      <img src="../../assets/Logo.png" class="logo">
    </header>
    <div id="wrapper">
      <p class="textbox-label">이용약관</p>
      <div class="textbox">

      </div>
      <p class="textbox-label">개인정보취급방침</p>
      <div class="textbox">

      </div>
      <div id="checkbox-container">
        <label for="checkbox">이용약관 및 개인정보취급방침에 모두 동의합니다.</label>
        <input type="checkbox" id="checkbox" v-model="checked">
      </div>
      <div class="next-btn">
        <a @click="register">다음</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    register() {
      if (this.checked) {
        this.$router.push({ path: '/register' });
      } else {
        // eslint-disable-next-line
        confirm('약관에 동의해 주세요.');
      }
    },
  },
};
</script>

<style scoped>
  #background {
    background-image: url("../../assets/background.png");
    background-position: center;
    height: 100vh;
    padding-top: 25px;
    color: white;
    font-size: 15px;
  }

  #wrapper {
    margin: auto;
    width: 200px;
  }

  .logo {
    width: 200px;
  }

  .textbox-label {
    text-align: left;
  }

  #checkbox-container {
    display: grid;
    grid-template-columns: 80% 20%;
    margin: 20px 0;
    font-size: 13px;
  }

  .textbox {
    height: 100px;
    background-color: white;
    border-radius: 20px;
    margin: auto;
  }

  label[for="checkbox"] {
    text-align: left;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }

  .next-btn {
    border-radius: 20px;
    border: 1px solid white;
    width: 120px;
    height: 40px;
    background-color: transparent;
    color: white;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
</style>
