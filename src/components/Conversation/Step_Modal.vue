<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="menu-selector">
          <div style="display: flex; justify-content: center; align-items: center">
            <h3 style="display: inline-block; color: #c21720;">Step {{ step }}</h3>
          </div>
          <p>{{ message }}</p>
          <span class="select-btn" @click="close()">
              확인
          </span>
          <div style="text-align: right;">
            <label class="checkbox-container" for="step_check">
              다시 열지 않기
              <input type="checkbox" id="step_check" v-model="checked">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['step', 'message'],
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    close() {
      this.$emit('close');
      if (this.checked === true) {
        if (this.step === 1) {
          this.$store.commit('change_tut_step1');
        } else if (this.step === 2) {
          this.$store.commit('change_tut_step2');
        } else {
          this.$store.commit('change_tut_step3');
        }
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
    height: auto;
    border-radius: 20px;
    padding: 10px;
    padding-top: 0;
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
    margin: 10px auto;
  }

  .close-btn {
    display: inline-block;
    font-size: 20px;
    margin-left: 10px;
    /*margin-bottom: 20px;*/
  }
</style>
