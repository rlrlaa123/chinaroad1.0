<template>
  <transition name="modal">
    <div class="modal-mask" @click="closeModal($event)">
      <div class="modal-wrapper">
        <div class="menu-arrow">
          <img src="../assets/select.png" id="select-btn">
        </div>
        <div class="menu-selector">
          <div><router-link :to="{ name: 'Conversation' }">회화</router-link></div>
          <div><router-link :to="{ name: 'Contents'}">컨텐츠</router-link></div>
          <div><router-link :to="{ name: 'Edit'}">첨삭</router-link></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    closeModal(e) {
      const modalHeight = this.$el.childNodes[0].offsetHeight;
      if (e.offsetY >= modalHeight) {
        this.$emit('close');
      }
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
    display: grid;
    grid-template-columns: 20% 80%;
    background-color: white;
    width: 100%;
    height: 120px;
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

  #select-btn {
    width: 30px;
    height: 30px;
  }

  .menu-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-selector {
    display: grid;
    align-items: center;
    text-align: left;
    padding-left: 10px;
    color: #c21720;
    font-size: 15px;
    font-weight: bold;
  }
</style>
