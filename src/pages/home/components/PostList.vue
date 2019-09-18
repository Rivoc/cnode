<template>
  <div>
    <div id="container">
      <div class="header">
        <div class="tabs current_tab">全部</div>
        <div class="tabs">精华</div>
        <div class="tabs">分享</div>
        <div class="tabs">问答</div>
        <div class="tabs">招聘</div>
        <div class="tabs">客户端测试</div>
      </div>
      <ul class="panel">
        <li v-for="(item,key) in postList"
            :key="key"
            class="cell">
          <!-- 作者头像 -->
          <img :src="item.author.avatar_url"
               class="author-avatar"
               :alt="item.author.loginname">
          <!-- 回复量/浏览量 -->
          <div class="count">
            <span class="reply-count">
              {{item.reply_count}}/
            </span>
            <span class="visit-count">{{item.visit_count}}</span>
          </div>
          <!-- 帖子分类 -->
          <span :class="{put_top:(item.top==true),put_good:(item.good==true),topiclist_tab:(item.top!==true&&item.good!==true)}">
            {{item|formatTab}}
          </span>
          <!-- 帖子标题 -->
          <router-link :to="'/topic/'
                       +item.id">
            <span class="post-title">{{item.title}}</span>
          </router-link>
          <!-- 最后回复时间 -->
          <span class="last-reply-time">
            {{item.last_reply_at|formatDate}}
          </span>
        </li>
      </ul>
      <pagination @pageChange="handlePageChange"></pagination>
    </div>

  </div>
</template>
<script>
import Pagination from './Pagination'
export default {
  name: 'HomePostList',
  components: {
    Pagination
  },
  props: {
    postList: Array
  },
  methods: {
    handlePageChange (page) {
      this.$emit('renderList', page)
    }
  }
}
</script>
<style lang="stylus" scoped>
#container {
  position: relative;
  margin-right: 305px;
  background-color: #fff;

  .header {
    padding: 10px;
    background: #f6f6f6;
    font-family: 'Hiragino Sans GB';
    font-size: 14px;

    .tabs {
      display: inline-block;
      margin: 0 10px;
      color: #80bd01;
      padding: 3px 4px;
      border-radius: 3px;
    }

    .tabs.current_tab {
      color: #fff;
      background-color: #80bd01;
    }
  }

  .cell {
    padding: 10px;
    font-size: 14px;
    border-top: 1px solid #f0f0f0;

    .author-avatar {
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }

    .count {
      display: inline-block;
      width: 70px;
      text-align: center;
      vertical-align: middle;

      .reply-count {
        color: #9e78c0;
        font-size: 14px;
        font-family: Tahoma;
      }

      .visit-count {
        font-size: 10px;
        color: #b4b4b4;
        font-family: Tahoma;
      }
    }

    .put_top, .put_good {
      margin-right: 8px;
      padding: 2px 4px;
      border-radius: 3px;
      font-size: 12px;
      font-family: 'Hiragino Sans GB';
      color: #fff;
      background: #80bd01;
    }

    .topiclist_tab {
      margin-right: 8px;
      background-color: #e5e5e5;
      color: #999;
      padding: 2px 4px;
      border-radius: 3px;
      font-size: 12px;
      font-family: 'Hiragino Sans GB';
    }

    .post-title {
      display: inline-block;
      width: 70%;
      vertical-align: middle;
      font-size: 16px;
      line-height: 30px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #333;
      font-size: 16px;
      font-family: Hiragino Sans GB;
      cursor: pointer;
    }

    .post-title:hover {
      text-decoration: underline;
    }

    .last-reply-time {
      float: right;
      font-size: 11px;
      color: #778087;
      font-family: 'Tahoma';
      line-height: 28px;
    }
  }

  .cell:hover {
    background: #f5f5f5;
  }
}
</style>
