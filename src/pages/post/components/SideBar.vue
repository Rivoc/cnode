<template>
  <div id="sideBar">
    <div class="panel author-summary">
      <div class="header">
        <p class="author">作者</p>
      </div>
      <div class="inner-info">
        <router-link :to="{
                      name:'User',
                      params:{
                        loginname:UserInfo.loginname
                      }
                      }"
                     class="big-avatar">
          <img :src="UserInfo.avatar_url"
               alt="头像"
               class="user-big-avatar">
        </router-link>

        <router-link :to="{
                      name:'User',
                      params:{
                        loginname:UserInfo.loginname
                        }
                      }"
                     tag="span"
                     class="user-name">{{UserInfo.loginname}}</router-link>
        <div class="score">积分:{{UserInfo.score}}</div>
      </div>
    </div>
    <div class="panel author-topic">
      <div class="header">
        <p class="recent-create">作者其它话题</p>
      </div>
      <div class="inner-info">
        <router-link tag="div"
                     :to="/topic/
                     +item.id"
                     class="cell"
                     v-for="(item,index) in UserInfo.recent_topics.slice(0,5)"
                     :key="index">{{item.title}}
        </router-link>
      </div>

    </div>
    <div class="panel author-reply">
      <div class="header">
        <p class="recent-create">作者最近回复的话题</p>
      </div>
      <div class="inner-info">
        <router-link tag="div"
                     :to="{
                      name:'Post',
                      params:{
                       id:item.id
                     }
                            }"
                     class="cell"
                     v-for="(item,index) in UserInfo.recent_replies.slice(0,5)"
                     :key="index">{{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PostSideBar',
  props: {
    UserInfo: Object
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  }

}
</script>
<style lang="stylus" scoped>
#sideBar {
  width: 290px;
  font-size: 14px;
  float: right;
  margin-bottom: 20px;
}

.panel {
  border-radius: 3px;
  background-color: #fff;
  margin-bottom: 13px;

  .header {
    padding: 10px;
    background: #f6f6f6;
    font-family: 'Hiragino Sans GB';
    font-size: 13px;
  }

  .inner-info {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    font-size: 14px;
    font-family: 'Tahoma';

    .big-avatar { // 图片外包div占位，防抖
      display: inline-block;
      width: 48px;
      height: 48px;

      .user-big-avatar {
        width: 100%;
        vertical-align: middle;
      }
    }

    .user-name {
      margin-left: 5px;
      font-size: 16px;
      vertical-align: middle;
      cursor: pointer;
    }

    .score {
      margin: 10px 0;
    }

    .cell {
      line-height: 36px;
      color: #778087;
      font-family: 'Hiragino Sans GB';
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
    }
  }
}
</style>
