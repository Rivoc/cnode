<template>
  <div>
    <div id="container">
      <div class="panel">
        <!-- 帖子头部 -->
        <div class="topic-header">
          <!-- 帖子标题 -->
          <div class="topic-tit">
            <span :class="{put_top:(postContent.top==true),put_good:(postContent.good==true),topiclist_tab:(postContent.top!==true&&postContent.good!==true)}">
              {{postContent|formatTab}}
            </span>
            {{postContent.title}}
          </div>
          <!-- 帖子简要信息 -->
          <div class="change">
            <span>发布于：{{postContent.create_at|formatDate}}</span>
            <span>作者：{{postContent.author.loginname}}</span>
            <span>{{postContent.visit_count}}次浏览</span>
            <span>来自&nbsp;{{postContent|formatTab}}</span>
          </div>
        </div>
        <div class="topic-content markdown-body">
          <div class="inner-content">
            <div id="content"
                 v-html="postContent.content"></div>
          </div>
        </div>
      </div>
      <!-- 回复区域 -->
      <div class="reply panel">
        <div class="reply-header">{{postContent.replies.length}}&nbsp;回复</div>
        <div :class="{reply_cell:true,hotUps:(reply.ups.length>3?true:false)}"
             v-for="
             (reply,index)
             in
             postContent.replies"
             :key="index">
          <div class="author-info">
            <!-- 作者头像,点击头像跳转到作者的个人信息页 -->
            <router-link :to="{
              name:'User',
              params:{
                loginname:reply.author.loginname
              }
            }">
              <img :src="reply.author.avatar_url"
                   :alt="reply.author.loginname"
                   class="author-avatar">
            </router-link>
            <!-- 作者昵称 -->
            <router-link :to="{
              name:'User',
              params:{
                loginname:reply.author.loginname
              }
            }"
                         tag="span"
                         class="author-name">{{reply.author.loginname}}</router-link>

            <span class="floor">{{index+1}}楼</span>
            <span class="time">{{reply.create_at|formatDate}}</span>
            <!-- 点赞数,点赞数为0就不显示点赞图标 -->
            <span class="ups iconfont"
                  v-show="reply.ups.length">&#xe643;&nbsp;{{reply.ups.length}}</span>
          </div>
          <div class="reply-content markdown-body">
            <div v-html="reply.content"></div>
          </div>

        </div>
      </div>
    </div>

  </div>

</template>
<script>
export default {
  name: 'PostContent',
  props: {
    postContent: Object
  }
}
</script>
<style lang="stylus">
// @import url('../../../assets/styles/markdown-github.css');
@import url('../../../assets/styles/markdown.css');

#container {
  margin-right: 305px;

  .panel {
    border-radius: 3px;
    background-color: #fff;
    margin-bottom: 13px;
  }

  .topic-header {
    padding: 10px;
  }

  .topic-tit {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 85%;
    line-height: 130%;
    font-family: 'Tahoma';
  }

  .change {
    font-size: 12px;
    color: #838383;
    font-family: 'Hiragino Sans GB';

    span::before {
      content: '•';
    }
  }

  .topic-content {
    padding: 10px;
    border-radius: 3px;
    border-top: 1px solid #e5e5e5;
    font-size: 14px;
    line-height: 28px;
    word-break: break-word;
    font-family: 'Hiragino Sans GB';

    .inner-content {
      margin: 0 10px;
    }
  }
}

.reply.panel {
  .author-info {
    font-family: 'Hiragino Sans GB';
  }
}

.reply_cell {
  padding: 10px;
  border-top: 1px solid #f0f0f0;

  .author-avatar {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
}

.author-name {
  font-size: 12px;
  margin-left: 10px;
  font-family: 'Hiragino Sans GB';
  cursor: pointer;
}

.floor, .time {
  font-size: 11px;
  color: #0088cc;
  font-family: 'Hiragino Sans GB';
}

.floor::after {
  content: '•';
  font-family: 'Hiragino Sans GB';
}

.ups {
  float: right;
  margin-right: 10px;
  font-family: 'Hiragino Sans GB';
}

.reply-header {
  padding: 10px;
  font-family: 'Hiragino Sans GB';
  font-size: 14px;
  line-height: 20px;
  color: #444;
  background: #f6f6f6;
}

.reply-content {
  padding: 5px 0 13px 50px;
  font-size: 15px;
  font-family: 'Hiragino Sans GB';
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

.hotUps {
  background: #f4fcf0;
}

.author-avatar {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
</style>
