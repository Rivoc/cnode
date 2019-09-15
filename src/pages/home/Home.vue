<template>
  <div>
    <HomeHeader></HomeHeader>
    <home-post-list :postList="postList"></home-post-list>
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
      console.log(response)
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
<style lang="stylus" scoped></style>
