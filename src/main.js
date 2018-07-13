// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import VueCordova from 'vue-cordova';

import axios from 'axios';
import firebase from 'firebase/app';

import App from './App';
import router from './router';

import '../node_modules/animate.css/animate.min.css';

import { store } from './store/store';
import firebasePackage from './Packages/Firebase';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:8005/api';
// axios.defaults.baseURL = 'http://198.13.50.135:8005/api';

Vue.use(VueCordova);
Vue.use(firebasePackage);

// add cordova.js only if serving the app through file://
// if (window.location.protocol === 'file:' || window.location.port === '8080') {
//   const cordovaScript = document.createElement('script');
//   cordovaScript.setAttribute('type', 'text/javascript');
//   cordovaScript.setAttribute('src', 'cordova.js');
//   document.body.appendChild(cordovaScript);
// }

const config = {
  apiKey: 'AIzaSyBrPsIdauhHkI4zXKse6jhqlitj6BOoXXU',
  authDomain: 'chinaroad-12098.firebaseapp.com',
  databaseURL: 'https://chinaroad-12098.firebaseio.com',
  projectId: 'chinaroad-12098',
  storageBucket: '',
  messagingSenderId: '620837007241',
};

firebase.initializeApp(config);

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (to.path === '/login' || to.path === '/register' || to.path === '/agreement' || to.path === '/login/email' || to.path === '/login/snslogin') {
      next();
    } else if (user) {
      next();
    } else {
      // eslint-disable-next-line
      confirm('로그인하세요.');
      router.push({ path: '/login' });
    }
  });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data() {
    return {
      cordova: Vue.cordova,
    };
  },
});
