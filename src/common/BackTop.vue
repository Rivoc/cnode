<template>
  <div>
    <transition>
      <div id="to-top"
           @click="toTop"
           v-show="toTopShow">
        回到顶部
      </div>
    </transition>

  </div>
</template>
<script>
export default {
  name: 'BackTop',
  data () {
    return {
      toTopShow: true
    }
  },
  methods: {
    toTop () {
      // 一开始快速向上滚动，随着接近浏览器顶部速度放慢
      var spd = Math.floor((-document.documentElement.scrollTop) / 10)
      document.documentElement.scrollTop += spd
      var t = setTimeout(this.toTop, 10)
      if (document.documentElement.scrollTop === 0) {
        clearTimeout(t)
      }
    },
    handleScroll () {
      let clientHeight = document.documentElement.clientHeight
      // 获取滚动条的纵坐标位置
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (scrollTop > clientHeight) {
        this.toTopShow = true
      } else {
        this.toTopShow = false
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
#to-top {
  width: 24px;
  color: gray;
  padding: 12px 0 12px 5px;
  position: fixed;
  top: 50%;
  right: 0;
  cursor: pointer;
  text-align: center;
  z-index: 5;
  background-color: #fff;
  border-radius: 12px 0 0 12px;
  font-size: 14px;
  font-family: 'Hiragino Sans GB';
}

.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.3s;
}
</style>
