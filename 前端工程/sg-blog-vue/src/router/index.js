import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
		if (savePosition) {
			return savePosition;
		} else {
            var top;
            if (window.innerWidth >= 700) {
                 top = 676
            } else {
                 top = 267
            }
			return {
				x: 0,
				y: top
			}
		}
	},
	routes: [{
			path: '/',
			component: resolve => require(['../pages/Home.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Home'
		}, //首页
		{
			path: '/Home',
			component: resolve => require(['../pages/Home.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Home'
		}, //首页
		{
			path: '/Share',
			component: resolve => require(['../pages/Share.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Share'
		}, //分类
		{
			path: '/DetailArticle',
			component: resolve => require(['../pages/DetailArticle.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'DetailArticle'
		}, //分享详情
		{
			path: '/Reward',
			component: resolve => require(['../pages/Reward.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Reward'
		}, //赞赏
		{
			path: '/FriendsLink',
			component: resolve => require(['../pages/FriendsLink.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'FriendsLink'
		}, //友链


		{
			path: '/Login',
			component: resolve => require(['../pages/Login.vue'], resolve),
			meta: {
				auth: false
			},
			name: 'Login'
		}, //注册登录
		{
			path: '/UserInfo',
			component: resolve => require(['../pages/UserInfo.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'UserInfo'
		}, //用户个人中心

	]
})
