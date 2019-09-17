<template>
  <div class="header">
    <div class="header-inner clearfix">
      <router-link tag="div"
                   to="/"
                   class="header-logo">
        <img src="http://static2.cnodejs.org/public/images/cnodejs_light.svg"
             alt="">
      </router-link>
      <div class="header-search">
        <span class="iconfont magnifier">&#xe60d;</span><input type="text">
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
      cursor: pointer;

      img {
        max-width: 100%;
        vertical-align: middle;
      }
    }

    .header-search {
      position: relative;
      float: left;
      height: 28px;
      width: 233px;

      .magnifier {
        display: inline-block;
        position: absolute;
        width: height;
        left: 5px;
        top: 1px;
        transform: rotate(-270deg);
        color: #595a59;
      }

      input {
        width: 206px;
        height: 20px;
        padding: 3px 5px 3px 24px;
        border-radius: 15px;
        background-color: #888;
        transition: all 0.3s;
      }

      input:hover {
        background-color: #fff;
      }

      input:hover .magnifier {
        color: #adadad;
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
