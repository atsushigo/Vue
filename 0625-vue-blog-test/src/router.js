import Vue from 'vue'
import Router from 'vue-router'
import ShowBlog from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditSingleBlog from './components/EditSingleBlog.vue'

Vue.use(Router)

export default new Router({
	mode:"history",
	routes: [{
			path: "/",
			component: ShowBlog
		},
		{
			path: "/add",
			component: AddBlog
		},
		{
			path:"/blog/:id",
			component: SingleBlog
		},
		{
			path:"/edit/:id",
			component: EditSingleBlog
		}
	]
})
