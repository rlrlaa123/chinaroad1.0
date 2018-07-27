<template>
  <div>
    <headers :header-name="headerName"></headers>
  </div>
</template>

<script>
import Headers from '../../components/Header_back';

export default {
  components: {
    Headers,
  },
  data() {
    return {
      headerName: 'FAQ',
    };
  },
};
</script>

<style scoped>

</style>
