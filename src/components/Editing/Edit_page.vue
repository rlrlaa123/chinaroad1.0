<template>
  <div>
    <headers v-bind:headerName=header></headers>
    <navigator naviName="첨삭" :toggle=toggle :menuName=menuName
               @easy="toggle = true" @hard="toggle = false" @open="showModal = true"
               style="background-color: white; padding: 5px 0;"></navigator>
    <edit v-if="toggle"></edit>
    <confirm v-else></confirm>
    <modal v-if="showModal" @close="showModal = false"></modal>
  </div>
</template>

<script>
import Modal from './Modal_edit';
import Headers from '../Header_back';
import Navigator from '../Navigator';
import Edit from './Edit';
import Confirm from './Edit_confirm';

export default {
  components: {
    Modal,
    Headers,
    Navigator,
    Edit,
    Confirm,
  },
  data() {
    return {
      confirm: false,
      header: '첨삭',
      toggle: true,
      showModal: true,
      menuName: ['첨삭', '첨삭확인'],
    };
  },
};
</script>

<style scoped>

</style>
