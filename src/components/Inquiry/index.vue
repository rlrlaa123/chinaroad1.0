<template>
  <div>
    <headers :header-name="headerName"></headers>
    <v-expansion-panel
      style="box-shadow: none; padding: 20px 0;">
      <v-expansion-panel-content
        v-for="inquiry in inquiries"
        :key="inquiry.id"
        :disabled="inquiry.state === '답변대기'">
        <div slot="header" style="font-weight: bold;">
          <span style="display: block;">Q. {{ inquiry.title }}</span>
          <span class="inquiry-info">
            {{ inquiry.created_at }} /
          </span>
          <span style="color: #c21720;"> {{ inquiry.state }}
        </span>
        </div>
        <v-card>
          <v-card-text style="padding: 10px 40px 5px 40px; font-weight: lighter;">
            A. {{ inquiry.reply }}
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
      headerName: '문의하기',
      inquiries: [],
      loading: true,
      page: 0,
    };
  },
  methods: {
    infiniteHandler($state) {
      this.page += 1;

      axios.get(`inquiry/${this.$firebaseAuth.currentUser().email}?page=${this.page}`, {
      }).then((response) => {
        if (response.data.data.length !== 0) {
          setTimeout(() => {
            response.data.data.forEach((ele) => {
              this.inquiries.push(ele);
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
  .inquiry-info {
    font-size: 5px;
    font-weight: lighter;
    margin: 5px 0;
  }

  .v-expansion-panel__header {
    padding: 30px 24px;
  }

  .v-expansion-panel__container {
    margin-top: 10px;
  }
</style>
