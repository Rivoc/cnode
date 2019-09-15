<template>
  <div class="header">
    <div class="header-inner clearfix">
      <div class="header-logo">
        <img src="http://static2.cnodejs.org/public/images/cnodejs_light.svg"
             alt="">
      </div>
      <div class="header-search">
        <input type="text">
      </div>
      <div class="header-nav">
        <ul>
          <li><a href="">首页</a></li>
          <li><a href="">新手入门</a></li>
          <li><a href="">API</a></li>
          <li><a href="">关于</a></li>
          <li><a href="">注册</a></li>
          <li><a href="">登录</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
.header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-family: 'Helvetica Neue', 'Luxi Sans', 'DejaVu Sans', Tahoma, 'Hiragino Sans GB';
  font-size: 13px;
  color: #ccc;
  background-color: #444;

  .header-inner {
    width: 90%;
    height: 100%;
    margin: 0 auto;

    .header-logo {
      float: left;
      width: 120px;
      padding-right: 20px;
      margin-top: -3px;
      height: 100%;
      font-size: 0;

      img {
        max-width: 100%;
        vertical-align: middle;
      }
    }

    .header-search {
      float: left;
      height: 28px;
      width: 233px;

      input {
        width: 206px;
        height: 20px;
        padding: 3px 5px 3px 22px;
        border-radius: 15px;
        background-color: #888;
        transition: all 0.3s;
      }

      input:hover {
        background-color: #fff;
      }
    }

    .header-nav {
      float: right;
      height: 100%;

      ul {
        color: #fff;

        li {
          display: inline-block;
          padding: 0 15px;

          a {
            color: #ccc;
          }
        }
      }
    }
  }
}
</style>
