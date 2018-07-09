import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line
export const store = new Vuex.Store({
  state: {
    tut_step1: true,
    tut_step2: true,
    tut_step3: true,
  },
  mutations: {
    change_tut_step1: (state) => { state.tut_step1 = false; },
    change_tut_step2: (state) => { state.tut_step2 = false; },
    change_tut_step3: (state) => { state.tut_step3 = false; },
  },
});
