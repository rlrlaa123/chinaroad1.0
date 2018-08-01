<template>
  <div>
    <headers :header-name="headerName"></headers>
    <div class="notice-wrapper">
      <div class="notice-container" v-for="notice in notices" v-bind:key="notice.id">
        <h3 class="notice-title">{{ notice.title }}</h3>
        <div class="notice-contents">
          <div class="notice-text">{{ notice.contents }}</div>
          <div class="notice-info">
            <span class="notice-created-at">{{ notice.created_at }}</span>
            <span class="notice-views">0 views</span>
          </div>
        </div>
      </div>
      <infinite-loading @infinite="infiniteHandler" v-if="loading"></infinite-loading>
    </div>
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
      headerName: '공지사항',
      notices: [],
      page: 0,
      loading: true,
    };
  },
  mounted() {
  },
  methods: {
    infiniteHandler($state) {
      this.page += 1;

      axios.get(`notice?page=${this.page}`, {
      }).then((response) => {
        if (response.data.data.length !== 0) {
          setTimeout(() => {
            response.data.data.forEach((ele) => {
              this.notices.push(ele);
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
  .notice-wrapper {
    padding: 20px;
    background-color: white;
    text-align: left;
  }

  .notice-container {
    font-size: 15px;
  }

  .notice-title {
    color: #c21720;
  }

  .notice-contents {
    padding: 0 10px;
    border-left: 3px solid #c21720;
  }

  .notice-text {
    margin-bottom: 10px;
  }

  .notice-info {
    font-weight: lighter;
    color: grey;
  }

  .notice-views {
    margin-left: 20px;
  }
</style>
