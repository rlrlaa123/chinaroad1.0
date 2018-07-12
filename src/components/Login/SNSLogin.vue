<template>
    <div id="background">
      <header id="header">
        <img src="../../assets/Logo.png" class="logo">
      </header>
      <div id="wrapper">
        <div class="sns-login" style="background-color: #5ac351;">
          <img src="../../assets/naver.png">
          네이버 아이디로 로그인
        </div>
        <div class="sns-login" style="background-color: #fce750;">
          <img src="../../assets/kakao.png">
          카카오 아이디로 로그인
        </div>
        <div class="sns-login" style="background-color: #405a93;">
          <img src="../../assets/facebook.png">
          페이스북 아이디로 로그인
        </div>
        <div class="sns-login" style="background-color: #cc5441;" @click="handleGoogle">
          <img src="../../assets/google.png">
          구글 아이디로 로그인
        </div>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
  created() {
    firebase.auth().getRedirectResult().then((result) => {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = result.credential.accessToken;
        // ...
        this.$router.push({ path: '/conversation' });
      }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      /* eslint-disable */
      console.log(`${errorCode}: ${errorMessage}`);
    });
  },
  methods: {
    handleNaver() {

    },
    handleKakao() {

    },
    handleFacebook() {

    },
    handleGoogle() {
      this.$firebaseAuth.googleLogin();
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

  .sns-login {
    width: 100%;
    height: 70px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    font-weight: bold;
  }

  .sns-login img {
    width: 25px;
  }
</style>
