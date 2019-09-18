<template>
  <div>
    <HomeHeader></HomeHeader>
    <div id="main">
      <div class="loading"
           v-show="loading">
        <img src="../../assets/loading.gif"
             alt="">
      </div>
      <home-side-bar></home-side-bar>
      <home-post-list v-if="postList"
                      :postList="postList"
                      @renderList="handleRender"></home-post-list>
    </div>
    <back-top></back-top>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomePostList from './components/PostList'
import HomeSideBar from './components/SideBar'
import BackTop from '../../common/BackTop'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomePostList,
    HomeSideBar,
    BackTop
  },
  data () {
    return {
      postList: null,
      page: 1,
      loading: true
    }
  },
  methods: {
    getHomeData () {
      this.$axios.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: this.page,
          limit: 20
        }

      }).then(this.handleGetDataSucc).catch(() => {
        console.log('失败')
      })
    },
    handleGetDataSucc (response) {
      let res = response.data
      if (res.success && res.data) {
        const data = res.data
        this.postList = data
        this.loading = false
      }
    },
    handleRender (page) {
      this.page = page
      this.getHomeData()
    }
  },
  beforeMount () {
    this.getHomeData()
  }
}
</script>
<style lang="stylus" scoped>
.loading {
  position: fixed;
  z-index: 3;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #e1e1e1;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
  }
}

#main {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;
}
</style>
