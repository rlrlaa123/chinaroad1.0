<template>
  <transition name="modal">
    <div class="modal-mask" @click="closeModal($event)">
      <div class="modal-wrapper">
        <div class="nav-user">
          <img class="nav-image" :src=auth.profile>
          <div class="nav-user-wrapper" style="padding: 10px;">
            <div class="nav-user-info" style="margin-bottom: 5px;">
              <span style="color: #c21720;">{{ auth.username }}</span>
              <span style="color: grey;">회원님</span>
            </div>
            <div class="nav-login-status" style="margin-bottom: 30px;">
              <img class="nav-email-image" src="../assets/email.png">
              <span>({{ auth.loginStatus }})</span>
            </div>
          </div>
        </div>
        <div class="nav-edit-btn">Edit Profile</div>
        <div class="nav-list">
          <div style="text-align: center;">
            <img src="../assets/study.png">
          </div>
          <span>학습현황</span>
        </div>
        <div class="nav-list">
          <div style="text-align: center;">
            <img src="../assets/information.png">
          </div>
          <router-link :to="{ name: 'Notice' }">
            <span>공지사항</span>
          </router-link>
        </div>
        <div class="nav-list">
          <div style="text-align: center;">
            <img src="../assets/FAQ.png">
          </div>
          <router-link :to="{ name: 'FAQ' }">
            <span>FAQ</span>
          </router-link>
        </div>
        <div class="nav-list">
          <div style="text-align: center;">
            <img src="../assets/question.png">
          </div>
          <router-link :to="{ name: 'Inquiry' }">
            <span>문의하기</span>
          </router-link>
        </div>
        <div class="nav-list">
          <div style="text-align: center;">
            <img src="../assets/logout.png">
          </div>
          <span @click="logout">로그아웃</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      auth: {
        username: '김동현',
        // eslint-disable-next-line
        profile: require('../assets/profile.jpg'),
        loginStatus: '이메일로 로그인',
      },
    };
  },
  methods: {
    closeModal(e) {
      const modalWidth = this.$el.childNodes[0].offsetWidth;
      if (e.offsetX >= modalWidth) {
        this.$emit('close');
      }
    },
    logout() {
      this.$firebaseAuth.logout();
    },
  },
};
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    padding: 15px;
  }

  .nav-user {
    display: grid;
    grid-template-columns: 30% 70%;
    text-align: left;
  }

  .nav-image {
    width: 100%;
  }

  .nav-user-info {
    font-size: 15px;
  }

  .nav-login-status {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
  }

  .nav-email-image {
    width: 25px;
    margin-right: 15px;
  }

  .nav-edit-btn {
    text-decoration: underline;
    color: #e3e3e3;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 30px;
  }

  .nav-list {
    display: grid;
    grid-template-columns: 20% 80%;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .nav-list span {
    display: flex;
    justify-content: flex-start;
    text-align: left;
    margin-left: 20px;
    font-size: 18px;
    font-weight: bold;
    color: dimgrey;
  }

  .nav-list img {
    width: 50px;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
