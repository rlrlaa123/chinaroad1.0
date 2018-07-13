<template>
  <div id="background">
    <header id="header">
      <img src="../../assets/Logo.png" class="logo">
    </header>
    <div id="wrapper">
      <label class="input-label">이름</label>
      <input type="text" class="input-form" v-model="name" id="name" name="name" placeholder="Name">
      <p class="error" v-if="errors.name">{{ errors.name[0] }}</p>
      <label class="input-label">성별</label>
      <div class="input-form gender">
        <label for="male">남자</label>
        <input id="male" name="gender" type="radio" v-model="gender"
               value="male" style="margin-right: 25px;">
        <label for="female">여자</label>
        <input id="female" name="gender" type="radio" v-model="gender" value="female">
      </div>
      <p class="error" v-if="errors.gender">{{ errors.gender[0] }}</p>
      <div class="next-btn">
        <a @click="handleRegister">가입하기</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import firebase from 'firebase/app';

export default {
  data() {
    return {
      name: firebase.auth().currentUser.displayName,
      gender: null,
      type: firebase.auth().currentUser.providerData[0].providerId,
      errors: {},
    };
  },
  methods: {
    handleRegister() {
      const self = this;
      const request = {
        email: firebase.auth().currentUser.email,
        name: this.name,
        gender: this.gender,
        type: this.type,
      };
      axios.post('snsregister', request).then((response) => {
        if (response.data === 'registered') {
          self.$router.push({ path: '/conversation' });
        } else {
          this.errors = response.data;
        }
      }).catch((error) => {
        /* eslint-disable-next-line */
        console.log(error);
      });
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

  .input-form {
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

  .gender {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gender input {
    width: 15px;
    height: 15px;
  }

  .error {
    color: red;
    margin: 10px 0;
    text-align: left;
  }
</style>
