import Vue from 'vue'
import Router from 'vue-router'
import LoginIn from '@/pages/LoginIn'
import LoginUp from '@/pages/LoginUp'
import Home from '@/pages/Home'
import SongList from '@/pages/SongList'
import Singer from '@/pages/Singer'
import MyMusic from '@/pages/MyMusic'
import SongListAlbum from '@/pages/SongListAlbum'
import SingerAlbum from '@/pages/SingerAlbum'
import Search from '@/pages/Search'
import Info from '@/pages/Info'
import UpLoad from '@/pages/Upload'
import Lyric from '@/pages/Lyric'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: resolve => require(['../pages/404.vue'], resolve)
    },
    {
      path: '/',
      name: 'login-in',
      component: LoginIn
    },
    {
      path: '/login-up',
      name: 'login-up',
      component: LoginUp
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/song-list',
      name: 'song-list',
      component: SongList
    },
    {
      path: '/my-music',
      name: 'my-music',
      component: MyMusic
    },
    {
      path: '/song-list-album/:id',
      name: 'song-list-album',
      component: SongListAlbum
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/singer-album/:id',
      name: 'singer-album',
      component: SingerAlbum
    },
    {
      path: '/lyric/:id',
      name: 'lyric',
      component: Lyric
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/upLoad',
      name: 'upLoad',
      component: UpLoad
    }
  ]
})
