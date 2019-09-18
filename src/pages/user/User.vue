<template>
  <div>
    <home-header></home-header>
    <div id="main">
      <div class="loading"
           v-show="loading">
        <img src="../../assets/loading.gif"
             alt="">
      </div>
      <user-side-bar v-if="UserInfo"
                     :UserInfo="UserInfo"></user-side-bar>
      <user-info v-if="UserInfo"
                 :UserInfo="UserInfo"></user-info>
    </div>
  </div>
</template>
<script>
import UserInfo from './components/Info'
import HomeHeader from '../home/components/Header'
import UserSideBar from './components/SideBar'
export default {
  name: 'User',
  components: {
    UserInfo,
    HomeHeader,
    UserSideBar
  },
  data () {
    return {
      UserInfo: null,
      loading: true
    }
  },
  methods: {
    getUserData () {
      this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.loginname}`).then((response) => {
        let res = response.data
        if (res.success && res.data) {
          const data = res.data
          this.UserInfo = data
          this.loading = false
        }
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getUserData()
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
