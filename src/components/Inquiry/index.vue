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
      headerName: '문의하기',
    };
  },
};
</script>

<style scoped>

</style>
