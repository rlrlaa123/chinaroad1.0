<template>
    <div id="background">
      <header id="header">
        <img src="../../assets/Logo.png" class="logo">
      </header>
      <div id="wrapper">
        <p class="input-label">이메일로 로그인</p>
        <input type="email" id="email" v-model="email" placeholder="Email Address">
        <input type="password" id="password" v-model="password" placeholder="Password">
        <p style="text-decoration: underline;">비밀번호를 잊으셨나요?</p>
        <div class="next-btn">
          <a @click="handleSubmit">시작하기</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$firebaseAuth.emailLogin(this.email, this.password);
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
    margin-bottom: 50px;
  }

  .input-label {
    text-align: left;
  }

  input {
    width: 100%;
    border-radius: 10px;
    height: 40px;
    margin: 10px 0;
  }

  .next-btn {
    border-radius: 20px;
    border: 1px solid white;
    width: 100%;
    height: 40px;
    background-color: transparent;
    color: white;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 50px;
  }
</style>
