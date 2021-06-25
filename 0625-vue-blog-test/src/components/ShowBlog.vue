<template>
	<div id="show-blog">
		<h1>博客總覽</h1>
		<input type="text" placeholder="搜索" v-model="search">
		<div v-for="(blog, index) in blogFilter" :key="index" class="single-blog">
			<h2>{{ blog.title | to-uppercase }}</h2>
			<article>{{ blog.body | cut }}</article>
		</div>
	</div>
</template>

<script type="text/javascript">
import axios from 'axios';
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
			.get('https://jsonplaceholder.typicode.com/posts')
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
	}
</style>
