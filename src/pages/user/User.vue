<template>
  <div>
    <home-header></home-header>
    <div id="main">
      <user-info :UserInfo="UserInfo"></user-info>
    </div>
  </div>
</template>
<script>
import UserInfo from './components/Info'
import HomeHeader from '../home/components/Header'
export default {
  name: 'User',
  components: {
    UserInfo,
    HomeHeader
  },
  data () {
    return {
      UserInfo: {}
    }
  },
  methods: {
    getUserData () {
      this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.loginname}`).then((response) => {
        let res = response.data
        if (res.success && res.data) {
          const data = res.data
          this.UserInfo = data
          console.log(data)
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
#main {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;
}
</style>
