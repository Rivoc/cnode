import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Post from '@/pages/post/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/topic/:id',
      name: 'Post',
      component: Post
    }
  ]
})
