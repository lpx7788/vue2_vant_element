import Vue from 'vue'
import Router from 'vue-router'
import footer from '@/common/footer'
import header from '@/common/header'
import banner from '@/common/banner'
import showVideo from '@/common/showVideo'
import home from '@/components/home'
// import productList from '@/components/productList'
import demo from '@/components/demo'
import productList from '@/components/productList/index'
import news from '@/components/news/index'
// import pageRight from '@/components/productList/pageRight'
import contactUs from '@/components/contactUs'
import authenticity from '@/components/authenticity'
import exhibitionStyle from '@/components/exhibitionStyle'
import aboutUs from '@/components/aboutUs'
import videoPage from '@/components/videoPage'
import detailPage from '@/components/detailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/banner',
      name: 'banner',
      component: banner
    },
    {
      path: '/productList',
      name: 'productList',
      component: productList
      // children: [
      //   {
      //     path: '/productList/pageRight',
      //     name: 'pageRight',
      //     component: pageRight
      //   }
      // ]
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/authenticity',
      name: 'authenticity',
      component: authenticity
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/exhibitionStyle',
      name: 'exhibitionStyle',
      component: exhibitionStyle
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/showVideo',
      name: 'showVideo',
      component: showVideo
    },
    {
      path: '/videoPage',
      name: 'videoPage',
      component: videoPage
    },
    {
      path: '/detailPage',
      name: 'detailPage',
      component: detailPage
    }

  ]
})
