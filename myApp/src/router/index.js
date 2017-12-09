import Vue from 'vue'
import Router from 'vue-router'
import Myhome from '@/components/home/MyHome'
import MyContent from '@/components/content/MyContent'
import MyContact from '@/components/contact/MyContact'
import MyPicture from '@/components/picture/MyPicture'
import MyAbout from '@/components/about/MyAbout'
// import MyContact from '@/components/contact/MyContact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MyHome',
      component: Myhome
    },
    {
      path: '/content',
      name: 'MyContent',
      component: MyContent
    } ,
    {
      path: '/contact',
      name: 'MyContact',
      component: MyContact
    },
    {
      path: '/picture',
      name: 'MyPicture',
      component: MyPicture
    },
    {
      path: '/about',
      name: 'MyAbout',
      component: MyAbout
    }
  ]
})
