<template>
  <div id="background">
    <header id="header">
      <img src="../../assets/Logo.png" class="logo">
    </header>
    <div id="wrapper">
      <label class="input-label">이메일</label>
      <input type="email" class="input-form" v-model="email" id="email"
             name="email" placeholder="Email Address">
      <p class="error" v-if="errors.email">{{ errors.email[0] }}</p>
      <label class="input-label">패스워드</label>
      <input type="password" class="input-form"  v-model="password" id="password" name="password"
             placeholder="Password">
      <p class="error" v-if="errors.password">{{ errors.password[0] }}</p>
      <label class="input-label">패스워드 확인</label>
      <input type="password" class="input-form" v-model="passwordConfirm" id="password-confirmation"
             name="password-confirmation" placeholder="Pasword Confirm">
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

export default {
  data() {
    return {
      email: null,
      password: null,
      passwordConfirm: null,
      name: null,
      gender: null,
      registered: 'email',
      errors: {},
    };
  },
  methods: {
    handleRegister() {
      const self = this;
      const request = {
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirm,
        name: this.name,
        gender: this.gender,
        registered: this.registered,
      };
      axios.post('register', request).then((response) => {
        if (response.data === 'registered') {
          self.$firebaseAuth.register(this.email, this.password);
        } else {
          this.errors = response.data;
        }
        // response.data
      }).catch((error) => {
        /* eslint-disable-next-line */
        console.log(error);
      });
      // }
    },
  },
};
</script>

<style scoped>
  #background {
    background-image: url("../../assets/background.png");
    background-position: center;
    height: 100%;
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
