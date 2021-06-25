<template>
	<div id="single-blog">
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.body }}</article>
	</div>
</template>

<script>
import axios from 'axios';
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
			.get('https://jsonplaceholder.typicode.com/posts' + '/' + this.id)
			.then(res => {
				this.blog = res.data;
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}
};
</script>

<style type="text/css" scoped>
	#single-blog{
		max-width: 960px;
		margin: 0 auto;
		padding: 20px;
		background-color: #eee;
		border:1px dotted #aaa;
	}
</style>
