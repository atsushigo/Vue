<template>
	<div id="add-blog">
		<h3>添加部落格</h3>
		<form action="" v-if="!submitted">
			<label for="">部落格標題</label>
			<input type="text" v-model="blog.title" required />

			<label for="">部落格內容</label>
			<textarea rows="" cols="" v-model="blog.content"></textarea>

			<div id="checkboxes">
				<label for="">Vue.js</label>
				<input v-model="blog.categories" type="checkbox" name="" id="" value="Vue.js" />
				<label for="">Node.js</label>
				<input v-model="blog.categories" type="checkbox" name="" id="" value="Node.js" />
				<label for="">React.js</label>
				<input v-model="blog.categories" type="checkbox" name="" id="" value="React.js" />
				<label for="">Angular.js</label>
				<input v-model="blog.categories" type="checkbox" name="" id="" value="Angular.js" />
			</div>
			<label for="">作者</label>
			<select v-model="blog.author">
				<option v-for="(author, index) in authors" :key="index">{{ author }}</option>
			</select>
			<button @click.prevent="postData">添加部落格</button>
		</form>
		
		<div v-if="submitted">
			<h3>部落格發送成功</h3>
		</div>
		
		<hr />
		<div id="preview">
			<h3>部落格總覽</h3>
			<p>部落格標題: {{ blog.title }}</p>
			<p>部落格內容:</p>
			<p>{{ blog.content }}</p>
			<p>部落格分類:</p>
			<ul>
				<li v-for="(category, index) in blog.categories" :key="index">{{ category }}</li>
			</ul>
			<p>作者:{{ blog.author }}</p>
		</div>
	</div>
</template>

<script type="text/javascript">
import axios from '../myaxios.js';
export default {
	name: 'AddBlog',
	data() {
		return {
			blog: {
				title: '',
				content: '',
				categories: [],
				author: ''
			},
			authors: ['A作者', 'B作者', 'C作者', 'D作者'],
			submitted: false
		};
	},
	methods: {
		postData() {
			axios
				.post('/posts', {
					title: this.blog.title,
					body: this.blog.content,
					userId: 1
				})
				.then(res => {
					console.log(res);
					this.submitted = true;
				})
				.catch(err => console.log(err));
		}
	}
};
</script>

<style type="text/css" scoped>
	#add-blog *{
		box-sizing: border-box;
	}
	
	#add-blog{
		margin:20px auto;
		max-width: 600px;
		padding: 20px;
	}
	
	label{
		display: block;
		margin: 20px 0px 10px;
	}
	
	input[type="text"],textarea,select{
		display:block;
		width: 100%;
		padding: 8px;
	}
	
	textarea{
		height: 200px;
	}
	
	#checkboxes label {
		display: inline-block;
		margin-top:0;
	}
	
	#checkboxes input{
		display:inline-block;
		margin-right: 10px;
	}
	
	button{
		display: block;
		margin: 20px 0;
		background: crimson;
		color: white;
		border: 0;
		padding: 14px;
		border-radius: 4px;
		font-size: 18px;
		cursor: pointer;
	}
	/* preview區 */
	#preview{
		padding: 10px 20px;
		border: 1px dotted #ccc;
		margin: 30px 0;
	}
	
	h3{
		margin-top: 10px;
	}
</style>
