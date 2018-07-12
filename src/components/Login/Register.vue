<template>
  <div id="background">
    <header id="header">
      <img src="../../assets/Logo.png" class="logo">
    </header>
    <div id="wrapper">
      <label class="input-label">이메일</label>
      <input type="email" v-model="email" id="email" placeholder="Email Address">
      <label class="input-label">패스워드</label>
      <input type="password" v-model="password" id="password" placeholder="Password">
      <label class="input-label">패스워드 확인</label>
      <input type="password" id="password-confirm" placeholder="Pasword Confirm">
      <label class="input-label">이름</label>
      <input type="text" id="name" placeholder="Name">
      <div class="next-btn">
        <a @click="handleRegister">가입하기</a>
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
    handleRegister() {
      this.$firebaseAuth.register(this.email, this.password);
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
    float: left;
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
    width: 60%;
    height: 40px;
    background-color: transparent;
    color: white;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
  }
</style>
