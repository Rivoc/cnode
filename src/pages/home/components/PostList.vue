<template>
  <div>
    <!-- 数据未返回时显示加载动画 -->
    <div class="loading"
         v-show="loading">
      <img src="../../../assets/loading.gif"
           alt="">
    </div>
    <!-- 数据返回显示主题帖子列表 -->
    <div id="main">
      <div id="container">
        <div class="panel">
          <ul>
            <li v-for="(item,key) in postList"
                :key="key"
                class="cell">
              <img :src="item.author.avatar_url"
                   class="author-avatar"
                   :alt="item.author.loginname">
              <span class="count">
                <span class="reply-count">
                  {{item.reply_count}}/
                </span>
                <span class="visit-count">{{item.visit_count}}</span>
              </span>
              <span class="post-title">{{item.title}}</span>
              <span class="last-reply-time">
                {{item.last_reply_at|formatDate}}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePostList',
  props: {
    postList: Array
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>
<style lang="stylus">
#main {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;

  #container {
    margin: 0 auto;
    margin-right: 305px;
    background-color: #fff;

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

      .post-title {
        max-width: 70%;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
        font-size: 16px;
        line-height: 30px;
        color: #333;
        font-size: 16px;
        font-family: Hiragino Sans GB;
      }

      .last-reply-time {
        float: right;
        font-size: 11px;
        color: #778087;
        font-family: 'Tahoma';
        line-height: 28px;
      }
    }
  }
}
</style>
