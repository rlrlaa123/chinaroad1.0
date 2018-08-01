<template>
  <div>
    <headers :header-name="headerName"></headers>
    <v-expansion-panel
      style="box-shadow: none; padding: 20px 0;">
      <v-expansion-panel-content
        v-for="faq in faqs"
        :key="faq.id">
        <div slot="header" style="font-weight: bold;">Q. {{ faq.title }}</div>
        <v-card>
          <v-card-text style="padding: 5px 40px; font-weight: lighter;">
            A. {{ faq.contents }}
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <infinite-loading @infinite="infiniteHandler" v-if="loading"></infinite-loading>
  </div>
</template>

<script>
import axios from 'axios';
import InfiniteLoading from 'vue-infinite-loading';
import Headers from '../../components/Header_back';

export default {
  components: {
    Headers,
    InfiniteLoading,
  },
  data() {
    return {
      headerName: 'FAQ',
      faqs: [],
      loading: true,
      page: 0,
    };
  },
  methods: {
    infiniteHandler($state) {
      this.page += 1;

      axios.get(`faq?page=${this.page}`, {
      }).then((response) => {
        if (response.data.data.length !== 0) {
          setTimeout(() => {
            response.data.data.forEach((ele) => {
              this.faqs.push(ele);
            });

            $state.loaded();
          }, 1000);
        } else {
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
