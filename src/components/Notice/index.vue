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
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
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
      notices: [
      ],
      page: 1,
    };
  },
  mounted() {
    axios.get('notice', {
    }).then((response) => {
      this.notices = response.data.data;
    });
  },
  methods: {
    infiniteHandler($state) {
      this.page += 1;
      const temp = [];
      axios.get(`notice?page=${this.page}`, {
      }).then((response) => {
        temp.push(response.data.data);
        this.notices = this.notices.concat(temp);
        $state.loaded();
      });

      // $state.loaded();

      // setTimeout(() => {
      //   const temp = [];
      //   for (let i = this.notices.length + 1; i <= this.notices.length + 10; i += 1) {
      //     temp.push(i);
      //   }
      //   this.notices = this.notices.concat(temp);
      //   $state.loaded();
      // }, 1000);
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
