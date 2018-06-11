import Vue from 'vue';
import Router from 'vue-router';
import Conversation from '../components/Conversation/Conversation';
import List from '../components/Conversation/List';
import Step1 from '../components/Conversation/Step1';
import Step2 from '../components/Conversation/Step2';
import Step3 from '../components/Conversation/Step3';
import Contents from '../components/Contents/Category';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/conversation',
      name: 'Conversation',
      component: Conversation,
    },
    {
      path: '/conversation/:categoryId',
      name: 'List',
      component: List,
    },
    {
      path: '/conversation/:categoryId/:stepId/step1',
      name: 'Step1',
      component: Step1,
    },
    {
      path: '/conversation/:categoryId/:stepId/step2',
      name: 'Step2',
      component: Step2,
    },
    {
      path: '/conversation/:categoryId/:stepId/step3',
      name: 'Step3',
      component: Step3,
    },
    {
      path: '/contents',
      name: 'Contents',
      component: Contents,
    },
  ],
});
