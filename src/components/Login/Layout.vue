<template>
    <div id="background">
      <header id="header">
        <img src="../../assets/Logo.png" class="logo">
      </header>

      <main>
        <div class="container">
          <router-link :to="{ name: 'EmailLogin' }" class="login">이메일로 로그인</router-link>
          <router-link :to="{ name: 'SNSLogin' }" class="login" ><b>SNS 로그인</b></router-link>
          <router-link :to="{ name: 'Agreement' }" class="register">
            <b><u>새 계정 만들기</u></b>
          </router-link>
        </div>
      </main>
    </div>
</template>

<script>
export default {
  name: 'login',
};
</script>

<style scoped>
  #background {
    background-image: url("../../assets/background.png");
    background-position: center;
    height: 100vh;
  }

  .logo {
    width: 60%;
    margin: 30% 0 20% 0;
  }

  .login {
    display: block;
    color: white;
    border: 2px solid white;
    border-radius: 10px;
    padding: 15px 20px;
    width: 40%;
    margin: 10% auto;
    text-decoration: none;
    font-weight: 700;
  }

  .register {
    color: white;
  }
</style>
