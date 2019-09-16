<template>
  <div>
    <home-header></home-header>
    <div id="main">
      <post-content :postContent="postContent"></post-content>
    </div>
  </div>
</template>
<script>
import PostContent from './components/Content'
import HomeHeader from '../home/components/Header'
export default {
  name: 'Post',
  components: {
    HomeHeader,
    PostContent
  },
  data () {
    return {
      postContent: {}
    }
  },
  methods: {
    getPostData () {
      this.$axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`).then(this.handleGetPostDataSucc)
      // console.log(this.$route.params.id)
    },
    handleGetPostDataSucc (response) {
      let res = response.data
      if (res.success && res.data) {
        const data = res.data
        console.log(data.replies)
        console.log(data.content)
        this.postContent = data
      }
    }
  },
  beforeMount () {
    this.getPostData()
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
