<template>
  <div>
    <home-header></home-header>
    <div id="main">
      <div class="loading"
           v-show="loading">
        <img src="../../assets/loading.gif"
             alt="">
      </div>
      <post-side-bar v-if="UserInfo"
                     :UserInfo="UserInfo"></post-side-bar>
      <post-content v-if="postContent"
                    :postContent="postContent"></post-content>

    </div>
  </div>
</template>
<script>
import PostContent from './components/Content'
import HomeHeader from '../home/components/Header'
import PostSideBar from './components/SideBar'
export default {
  name: 'Post',
  components: {
    HomeHeader,
    PostContent,
    PostSideBar
  },
  data () {
    return {
      postContent: null,
      UserInfo: null,
      loading: true
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
        this.postContent = data
        this.loading = false
        // 然后获取用户的详细信息
        this.getUserData()
      }
    },
    getUserData () {
      this.$axios.get(`https://cnodejs.org/api/v1/user/${this.postContent.author.loginname}`).then((response) => {
        let res = response.data
        if (res.success && res.data) {
          const data = res.data
          this.UserInfo = data
        }
      }).catch(function (err) {
        console.log(err)
      })
    }

  },
  beforeMount () {
    this.getPostData()
  }
}
</script>
<style lang="stylus" scoped>
.loading {
  position: fixed;
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
