<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="menu-selector">
          <div style="display: flex; justify-content: space-between; align-items: center">
            <h3 style="display: inline-block; color: #c21720;">답변 예시</h3>
            <span style="width: 25px;"></span>
          </div>
          <p>{{ text }}</p>
          <div class="select-wrapper">
            <div class="select-btn" @click="playExample">듣기 해설</div>
            <div class="select-btn" @click="back">닫기</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: [
    'text',
    'record',
  ],
  methods: {
    back() {
      this.$emit('close');
    },
    playExample() {
      const sound = this.record;

      if (sound) {
        const audio = new Audio(sound);
        audio.play();
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
    position: fixed;
    top: 30%;
    background-color: white;
    width: 80%;
    height: 160px;
    border-radius: 20px;
    padding: 10px;
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

  .menu-selector {
    text-align: left;
  }

  .select-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .select-btn {
    width: 80px;
    height: 30px;
    border-radius: 10px;
    background-color: #c21720;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0 5px;
  }

  .close-btn {
    display: inline-block;
    font-size: 20px;
    margin-left: 10px;
    /*margin-bottom: 20px;*/
  }
</style>
