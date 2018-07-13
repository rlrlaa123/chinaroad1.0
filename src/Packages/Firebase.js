/* eslint-disable */
import firebase from 'firebase/app';
import 'firebase/auth';
import router from '../router/index';

/* eslint no-param-reassign: "error" */
export default (Vue) => {
  Vue.firebaseAuth = {
    register(email, password) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        console.log('Register succeded', user);
        router.push({ path: '/conversation' });
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode + ': ' + errorMessage);
      });
    },
    emailLogin(email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        console.log('Login succeded', user);
        router.push({ path: '/conversation' });
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode + ': ' + errorMessage);
      });
    },
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    logout() {
      firebase.auth().signOut().then(() => {
      }).catch((error) => {
        // An error happened.
        alert(`Error: ${error}`);
      });
    },
  };
  Object.defineProperties(Vue.prototype, {
    $firebaseAuth: {
      get: () => Vue.firebaseAuth,
    },
  });
};
