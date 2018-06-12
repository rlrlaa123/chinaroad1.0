<template>
  <div class="step-wrapper">
    <router-link :to="{ name: 'Step1' }">
      <span v-bind:class="{ 'selected' : step1 }">STEP 1</span>
    </router-link>
    <span>></span>
    <router-link :to="{ name: 'Step2' }">
      <span v-bind:class="{ 'selected' : step2 }">STEP 2</span>
    </router-link>
    <span>></span>
    <router-link :to="{ name: 'Step3' }">
      <span v-bind:class="{ 'selected' : step3 }">STEP 3</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: [
    'step1',
    'step2',
    'step3',
  ],
};
</script>

<style scoped>
  .step-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    color: #dddddd;
    font-size: 20px;
  }

  .selected {
    color: #c21720;
  }
</style>
