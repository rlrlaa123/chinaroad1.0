<template>
  <div>
    <vue-loader direction="middle" image="https://loading.io/spinners/coolors/lg.palette-rotating-ring-loader.gif" text="Loading..." text-color="#786fa6"></vue-loader>
    <loader id="loader" :color="'#cf6a87'" :borderWidth="5"
            :duration="1.5" :size="25" :background="'#f5cd79'"></loader>
    <!--<loader :color="'#f5cd79'" :borderWidth="10"-->
            <!--:duration="1" :size="70" :background="'#778beb'"></loader>-->
    <!--<loader :color="'#778beb'" :borderWidth="20"-->
            <!--:duration=".5" :size="100" :background="'#cf6a87'"></loader>-->
    <!--<loader-dots :color="'#f5cd79'" :background="'#ea8685'"-->
                 <!--:duration="1" :size="15"></loader-dots>-->
  </div>
</template>

<script>
import vueLoader from '@nulldreams/vue-loading/src/vue-loading';
import loader from '@nulldreams/vue-loading/src/components/loader';
import loaderDots from '@nulldreams/vue-loading/src/components/dots';

export default {
  components: {
    vueLoader,
    loader,
    loaderDots,
  },
};
</script>

<style scoped>
  #loader {
    background-image: url("../assets/loader_background.jpeg")
  }
</style>
