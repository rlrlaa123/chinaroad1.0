<template>
  <div>
    <headers :header-name="headerName"></headers>
    <div class="notice-wrapper">
      <div class="notice-container" v-for="notice in notices" v-bind:key="notice.id">
        <h3 class="notice-title">주요공지</h3>
        <div class="notice-contents">
          <div class="notice-text">주요공지</div>
          <div class="notice-info">
            <span class="notice-created-at">2018-02-13</span>
            <span class="notice-views">22 views</span>
          </div>
        </div>
      </div>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
  </div>
</template>

<script>
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
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
      ],
    };
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        const temp = [];
        for (let i = this.notices.length + 1; i <= this.notices.length + 10; i += 1) {
          temp.push(i);
        }
        this.notices = this.notices.concat(temp);
        $state.loaded();
      }, 1000);
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
