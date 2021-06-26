<template>
	<div id="single-blog">
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.body }}</article>
		<p>作者ID:{{ blog.id }}</p>
		<p>分類:第{{ blog.userId }}類</p>
		<ul>
			<!-- <li v-for="(category,index) in blog.userId" :key="index">
				{{blog.category}}
			</li> -->
		</ul>
		<button @click="deleteblog()">刪除</button>
		<!-- 兩種寫法 -->
		<!-- button @click="$router.push('/blog/edit')" 或 
		router-link to="/blog/edit" tag="button" -->
		<!-- 要注意不要跟其他頁路由衝突到 -->
		<router-link :to="'/edit/'+id" tag="button">編輯</router-link>
	</div>
</template>

<script>
import axios from '../myaxios.js';
export default {
	name: 'SingleBlog',
	data() {
		return {
			//拿到路由的id
			id: this.$route.params.id,
			//展示的那條訊息 單個的部落格訊息對象
			blog: {}
		};
	},
	created() {
		axios
			.get('/posts' + '/' + this.id)
			.then(res => {
				this.blog = res.data;
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	},
	methods: {
		deleteblog() {
			axios
				.get('/posts/delete/' + this.id)
				.then(console.log('刪除成功'))
				.catch(console.log('刪除失敗'));
		}
	}
};
</script>

<style type="text/css" scoped>
#single-blog {
	max-width: 960px;
	margin: 0 auto;
	padding: 20px;
	background-color: #eee;
	border: 1px dotted #aaa;
}
</style>
