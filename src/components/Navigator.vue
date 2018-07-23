<template>
  <div>
    <section>
      <div id="menu-selector" @click="showModal = true">
        <img src="../assets/select.png" id="selector-btn">
        <div id="menu-name">{{ naviName }}</div>
      </div>
      <div id="toggle-wrapper" >
        <span class="level" v-bind:class="{ active : toggle === 1 }" @click="clickEasy">
          {{ menuName[0] }}
        </span>
        <span class="toggle" v-bind:class="{ active : toggle === 2 || toggle === 3 }"
              @click="clickHard">
          {{ menuName[1] }}
        </span>
      </div>
    </section>
    <modal v-if="showModal" @close="showModal = false"></modal>
  </div>
</template>

<script>
import Modal from './Modal_navi';

export default {
  components: {
    Modal,
  },
  props: [
    'naviName',
    'toggle',
    'menuName',
  ],
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    clickEasy() {
      this.$emit('easy');
    },
    clickHard() {
      this.$emit('hard');
    },
  },
};
</script>

<style scoped>
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    color: #c21720;
    font-weight: bolder;
    font-size: 20px;
    margin-bottom: 10px;
  }

  #menu-selector {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
  }

  #selector-btn {
    width: 30px;
    height: 30px;
  }

  #menu-name {
    margin-left: 20px;
    color: #c21720;
    font-size: 15px;
    font-weight: bold;
  }

  #toggle-wrapper {
    margin-right: 20px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: rgba(0,0,0,0.3)
  }

  .toggle {
    margin: 0 5px;
  }

  .active {
    color: #c21720;
  }
</style>
