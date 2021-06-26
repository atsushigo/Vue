<template>
	<div id="show-blog">
		<h1>博客總覽</h1>
		<input type="text" placeholder="搜索" v-model="search">
		<div v-for="(blog, index) in blogFilter" :key="index" class="single-blog">
			<!-- 動態路由的話要:to -->
			<router-link :to="'/blog/'+blog.id">
			<h2>{{ blog.title | to-uppercase }}</h2></router-link>
			<article>{{ blog.body | cut }}</article>
		</div>
	</div>
</template>

<script type="text/javascript">
import axios from '../myaxios.js';
export default {
	name: 'ShowBlog',
	data() {
		return {
			blogs: [],
			search:""
		};
	},
	created() {
		// url換成本地放靜態資料夾才可以-> "./../static/posts.json" 
		axios
			.get('/posts')
			.then(res => {
				//slice(1,3)寫法瀏覽器沒支持 所以換filter()
				this.blogs = res.data.filter(obj => obj.id < 10 && obj.id > 0);
			})
			.catch(err => {
				console.log(err);
			});
	},
	computed:{
		//for迴圈從這裡撈已經過濾的資料
		blogFilter(){
			return this.blogs.filter(blog=>{
				return blog.title.toLowerCase().match(this.search)
			})
		}
	},
	// filters:{
	// 	//局部註冊自訂方法
	// 	"to-uppercase":value=>{
	// 		return value.toUpperCase()
	// 	}
	// }
};
</script>

<style type="text/css" scoped>
	#show-blog{
		max-width: 800px;
		margin:0 auto;
	}
	
	.single-blog{
		padding: 20px;
		margin: 20px 0;
		box-sizing: border-box;
		background: #eee;
		border: 1px dotted #aaa;
	}
	
	#show-blog>a{
		color: #4444;
		text-decoration: none;
	}
	
	input[type=text]{
		padding: 8px;
		width: 100%;
		box-sizing: border-box;
	}
</style>
