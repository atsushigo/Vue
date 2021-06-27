import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Product from '../views/Product.vue'
import SingleProduct from '../views/SingleProduct.vue'
import Create from '../views/Create.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Landing',
		component: Landing
	},
	{
		path: '/product/create',
		name: 'Create',
		component: Create
	},
	{
		path: '/product',
		name: 'Product',
		component: Product
	},
	{
		path: '/product/:id',
		name: 'SingleProduct',
		component: SingleProduct
	},
	{
		path:'/product/:id/edit',
		name:'Edit',
		component: Edit
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
