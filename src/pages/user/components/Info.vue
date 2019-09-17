<template>
  <div>
    <div class="loading"
         v-show="isloading"></div>
    <div id="container">
      <!-- 用户信息 -->
      <div class="panel">
        <!-- 用户信息头部 -->
        <div class="header">
          <router-link class="back-home"
                       to="/"
                       tag="div">主页/</router-link>
        </div>
        <div class="inner-info">
          <div class="big-avatar"> <img :src="UserInfo.avatar_url"
                 alt="头像"
                 class="user-big-avatar"></div>
          <span class="user-name">{{UserInfo.loginname}}</span>
          <div class="score">{{UserInfo.score}}&nbsp;积分</div>
          <div class="github-user-name">
            <span class="github iconfont">&#xe632;&nbsp;</span>
            <span>@{{UserInfo.githubUsername}}</span>
          </div>
          <div class="sign-up-time">注册时间{{UserInfo.create_at|formatDate}}</div>
        </div>
      </div>
      <!-- 最近创建的话题 -->
      <div class="panel">
        <div class="header">
          <p class="recent-create">最近创建的话题</p>
        </div>
        <!-- 最近创建的话题列表，最多显示2条 -->
        <div class="cell"
             v-for="(item,index) in UserInfo.recent_topics.slice(0,2)"
             :key="index">
          <div class="small-avatar">
            <img class="user-small-avatar"
                 :src="UserInfo.avatar_url"
                 alt="头像">
          </div>
          <!-- 帖子标题 -->
          <router-link :to="'/topic/'
                       +item.id">
            <div class="title">{{item.title}}</div>
          </router-link>
          <span class="last-reply-time">{{item.last_reply_at|formatDate}}</span>
        </div>
        <div class="cell-more">查看更多»</div>
      </div>
      <!-- 最近参与的话题 -->
      <div class="panel">
        <div class="header">
          <p class="recent-create">最近参与的话题</p>
        </div>
        <!-- 控制数据显示，最多显示五条 -->
        <div class="cell"
             v-for="(item,index) in UserInfo.recent_replies.slice(0,5)"
             :key="index">
          <!-- 参与话题的原作者，点击原作者跳转到他的个人信息页 -->
          <router-link :to="'/user/'+item.author.loginname">
            <div class="small-avatar">
              <img class="user-small-avatar"
                   :src="item.author.avatar_url"
                   :alt="item.author.loginname">
            </div>
          </router-link>
          <!-- 帖子标题,点击标题跳转到相应帖子 -->
          <router-link :to="'/topic/'
                       +item.id">
            <div class="title">{{item.title}}</div>
          </router-link>
          <span class="last-reply-time">{{item.last_reply_at|formatDate}}</span>
        </div>
        <div class="cell-more">查看更多»</div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  props: {
    UserInfo: Object
  },
  data () {
    return {
      isloading: false
    }
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  }
}
</script>
<style lang="stylus" scoped>
#container {
  margin: 0 auto;
  margin-right: 305px;

  .panel {
    border-radius: 3px;
    background-color: #fff;
    margin-bottom: 13px;

    .header {
      padding: 10px;
      background: #f6f6f6;
      font-family: 'Hiragino Sans GB';
      font-size: 14px;

      .back-home {
        color: #80bd01;
      }
    }

    .inner-info {
      padding: 10px;
      border-top: 1px solid #e5e5e5;
      font-size: 14px;
      font-family: 'Tahoma';

      .big-avatar { // 图片外包div占位，防抖
        display: inline-block;
        width: 40px;
        height: 40px;

        .user-big-avatar {
          width: 100%;
          vertical-align: middle;
        }
      }

      .score {
        margin-top: 5px;
        font-family: 'Hiragino Sans GB';
        margin: 10px 0;
      }

      .github.iconfont:hover {
        color: #000;
      }

      .github-user-name {
        color: #778087;
        margin-bottom: 10px;
      }

      .sign-up-time {
        margin-top: 5px;
        color: #778087;
        margin-bottom: 10px;
      }
    }

    .cell {
      padding: 10px;
      border-bottom: 1px solid #e5e5e5;
      font-family: 'Hiragino Sans GB';

      .small-avatar {
        display: inline-block;
        width: 30px;
        height: 30px;
        vertical-align: middle;

        .user-small-avatar {
          width: 100%;
        }
      }

      .title {
        display: inline-block;
        width: 70%;
        margin-left: 60px;
        color: #0088cc;
        font-size: 16px;
        font-family: 'Tahoma';
        vertical-align: middle;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
      }

      .title:hover {
        text-decoration: underline;
      }

      .last-reply-time {
        float: right;
        margin-right: 5px;
        color: #777;
      }
    }

    .cell-more {
      padding: 10px;
      font-family: 'Hiragino Sans GB';
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
