import Vue from 'vue';
import Router from 'vue-router';
import Conversation from '../components/Conversation/Category';
import List from '../components/Conversation/List';
import Step1 from '../components/Conversation/Step1';
import Step2 from '../components/Conversation/Step2';
import Step3 from '../components/Conversation/Step3';
import Contents from '../components/Contents/Category';
import Content from '../components/Contents/Content';
import Layout from '../components/Login/Layout';
import EmailLogin from '../components/Login/Email';
import Agreement from '../components/Login/Agreement';
import Edit from '../components/Editing/Edit_page';
import Confirm from '../components/Editing/Edit_confirmShow';
import Home from '../components/Home';
import Register from '../components/Login/Register';
import SNSRegister from '../components/Login/SNSRegister';
import SNSLogin from '../components/Login/SNSLogin';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Layout',
      component: Layout,
    },
    {
      path: '/login/email',
      name: 'EmailLogin',
      component: EmailLogin,
    },
    {
      path: '/login/snslogin',
      name: 'SNSLogin',
      component: SNSLogin,
    },
    {
      path: '/snsregister',
      name: 'SNSRegister',
      component: SNSRegister,
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
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
      path: '/conversation/:categoryId/:conversationId/step1',
      name: 'Step1',
      component: Step1,
    },
    {
      path: '/conversation/:categoryId/:conversationId/step2',
      name: 'Step2',
      component: Step2,
    },
    {
      path: '/conversation/:categoryId/:conversationId/step3',
      name: 'Step3',
      component: Step3,
    },
    {
      path: '/contents',
      name: 'Contents',
      component: Contents,
    },
    {
      path: '/contents/:contentId',
      name: 'Content',
      component: Content,
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
    },
    {
      path: '/confirm/:confirmId',
      name: 'Confirm',
      component: Confirm,
    }
  ],
});
