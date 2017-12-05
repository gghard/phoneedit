import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import aboutus from '@/components/aboutus'
import news from '@/components/news'
import product from '@/components/product'
import newsdelite from '@/components/newsdelite'
import productdelite from '@/components/productdelite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      children:[
        {
	      	path: '/home/index',
	      	name: 'index',
	      	component: index
      	},
     	{
	      	path: '/home/aboutus',
	      	name: 'aboutus',
	      	component: aboutus
      	},
     	{
	      	path: '/home/news',
	      	name: 'news',
	      	component: news
      	},
     	{
	      	path: '/home/product',
	      	name: 'product',
	      	component: product
      	},
       	{
          path: '',
          redirect: '/home/index'
        }
      ]
    },
    {
    	path: '/news/newsdelite',
    	name: 'newsdelite',
    	component: newsdelite
    },
    {
    	path: '/product/productdelite',
    	name: 'productdelite',
    	component: productdelite
    },
	{
		path: '*',
		redirect: '/home'
	}


  ]
})
