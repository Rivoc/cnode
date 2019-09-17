<template>
  <div id="sideBar">
    <div class="panel">
      <div class="header">
        <p>CNode：Node.js专业中文社区</p>
      </div>
      <div class="inner-info">
        您可以 登录 或 注册 , 也可以
        <a class="sign-in"
           href="/auth/github">
          通过 GitHub 登录
        </a>
      </div>
    </div>
    <div class="panel friendship-community">
      <div class="header">
        <p>友情社区</p>
      </div>
      <div class="inner-info">
        <ul>
          <li><a class="community"
               href="https://ruby-china.org/"
               target="_blank"><img src="http://static2.cnodejs.org/public/images/ruby-china-20150529.png"
                   alt=""></a></li>
          <li><a class="community"
               href="http://golangtc.com/"
               target="_blank"><img src="http://static2.cnodejs.org/public/images/golangtc-logo.png"
                   alt=""></a></li>
          <li><a class="community"
               href="http://phphub.org/"
               target="_blank"><img src="http://static2.cnodejs.org/public/images/phphub-logo.png"
                   alt=""></a></li>
          <li><a class="community"
               href="https://testerhome.com/"
               target="_blank"><img src="http://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"
                   alt=""></a></li>
        </ul>
      </div>
    </div>
    <div class="panel">
      <div class="header">
        <p>客户端二维码</p>
      </div>
      <div class="inner-info">
        <div class="cnode-app-download">
          <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"
               alt="">
          <div class="source">
            <a href="https://github.com/soliury/noder-react-native">客户端源码地址</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SideBar'
}
</script>
<style lang="stylus" scoped>
.sign-in {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 10px;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  letter-spacing: 2px;
  border-radius: 3px;
  color: #fff;
  background-color: #5bc0de;
  text-decoration: none;
}

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

    .community {
      display: block;
      width: 65%;
      margin-bottom: 10px;

      img {
        width: 100%;
      }
    }

    .cnode-app-download {
      text-align: center;

      img {
        width: 200px;
      }

      .source {
        a {
          color: #778087;
          font-size: 13px;
          font-family: 'Hiragino Sans GB';
        }
      }
    }
  }
}
</style>
