<template>
  <div id="app">
    <router-view></router-view>
    <!--<test></test>-->
  </div>
</template>

<script>
import Test from './components/Test';

export default {
  components: {
    Test,
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    margin: 0;
    font-size: 13px;
    background-color: #f5f5f5
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .btn {
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

  /* custom checkbox */
  /* container */
  .checkbox-container {
    display: block;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: 25px;
  }

  /* Hide the browser's default checkbox */
  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    margin: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    height: 15px;
    width: 15px;
    border: 1px solid #c21720;
    border-radius: 5px;
    margin: 1px 5px;
  }

  /* On mouse-over, add a grey background color */
  .checkbox-container:hover input ~ .checkmark {
    /*background-color: #e3e3e3;*/
  }

  /* When the checkbox is checked, add a blue background */
  .checkbox-container input:checked ~ .checkmark {
    background-color: #c21720;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkbox-container .checkmark:after {
    left: 3.5px;
    top: 2px;
    width: 4px;
    height: 6px;
    border: solid white;
    border-width: 0 2.5px 2.5px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
