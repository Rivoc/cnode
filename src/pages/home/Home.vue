<template>
  <div>
    <HomeHeader></HomeHeader>
    <div id="main">
      <home-post-list :postList="postList"></home-post-list>
    </div>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomePostList from './components/PostList'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomePostList
  },
  data () {
    return {
      postList: []
    }
  },
  methods: {
    getHomeData () {
      this.$axios.get('https://cnodejs.org/api/v1/topics', {
        page: 1,
        limit: 20
      }).then(this.handleGetDataSucc).catch(() => {
        console.log('失败')
      })
    },
    handleGetDataSucc (response) {
      let res = response.data
      if (res.success && res.data) {
        const data = res.data
        this.postList = data
      }
    }
  },
  beforeMount () {
    this.getHomeData()
  }
}
</script>
<style lang="stylus" scoped>
#main {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;
}
</style>
