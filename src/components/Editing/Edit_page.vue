<template>
  <div>
    <headers v-bind:headerName=header></headers>
    <navigator naviName="첨삭" :toggle=toggle :menuName=menuName
               @easy="toggle = 1" @hard="toggle = 2" @open="showModal = true"
               style="background-color: white; padding: 5px 0;"></navigator>
    <edit v-if="toggle === 1" @closeModal="showModal = false"></edit>
    <confirm v-else-if="toggle === 2" @show="showConfirm"></confirm>
    <confirm-show v-if="toggle === 3" :confirm-id="confirmId"></confirm-show>
    <modal v-if="showModal" @close="showModal = false"></modal>
  </div>
</template>

<script>
import Modal from './Modal_edit';
import Headers from '../Header_back';
import Navigator from '../Navigator';
import Edit from './Edit';
import Confirm from './Edit_confirm';
import ConfirmShow from './Edit_confirmShow';

export default {
  components: {
    Modal,
    Headers,
    Navigator,
    Edit,
    Confirm,
    ConfirmShow,
  },
  data() {
    return {
      confirm: false,
      header: '첨삭',
      toggle: 1,
      showModal: true,
      menuName: ['첨삭', '첨삭확인'],
      confirmShow: false,
      confirmId: null,
    };
  },
  methods: {
    showConfirm(id) {
      this.confirmShow = true;
      this.confirmId = id;
      this.toggle = 3;
    },
  },
};
</script>

<style scoped>

</style>
