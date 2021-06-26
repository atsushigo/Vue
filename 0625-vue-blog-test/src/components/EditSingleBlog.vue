<template>
	<div id="edit-blog">
		<h3>編輯部落格</h3>
		<form action="" v-if="!submitted">
			<label for="">部落格標題</label>
			<input type="text" v-model="blog.title" required />

			<label for="">部落格內容</label>
			<textarea rows="" cols="" v-model="blog.body"></textarea>

			<!-- <div id="checkboxes">
				<label for="">Vue.js</label>
				<input v-model="blog.categories" type="checkbox" name="" id="" value="Vue.js" />
				<label for="">Node.js</label>
				<input v-model="blog.categories" type="checkbox" name="" id="" value="Node.js" />
				<label for="">React.js</label>
				<input v-model="blog.categories" type="checkbox" name="" id="" value="React.js" />
				<label for="">Angular.js</label>
				<input v-model="blog.categories" type="checkbox" name="" id="" value="Angular.js" />
			</div> -->
			<label for="">部落格分類</label>
			<input type="text" v-model="blog.userId" />
			
			<label for="">作者ID</label>
			<!-- <select v-model="blog.id">
				<option v-for="(aid, index) in id" :key="index">{{ aid }}</option>
			</select> -->
			<input type="text" v-model="blog.id" />
			<button @click.prevent="postData">編輯部落格</button>
		</form>
		
		<div v-if="submitted">
			<h3>部落格發送成功</h3>
		</div>
		
		<hr />
		<div id="preview">
			<h3>部落格總覽</h3>
			<p>部落格標題: {{ blog.title }}</p>
			<p>部落格內容:</p>
			<p>{{ blog.body }}</p>
			<p>部落格分類:第{{ blog.userId }}類</p>
			<!-- <ul>
				<li v-for="(aid, index) in blog.id" :key="index">{{ aid }}</li>
			</ul> -->
			<p>作者ID:{{blog.id}}</p>
		</div>
	</div>
</template>

<script type="text/javascript">
// import axios from 'axios';
import axios from '../myaxios.js'
export default {
	name: 'AddBlog',
	data() {
		return {
			id:this.$route.params.id,
			// blog: {
			// 	title: '',
			// 	content: '',
			// 	categories: [],
			// 	author: ''
			// },
			//直接拿後端回傳的資料類型
			blog:{},
			// authors: ['A作者', 'B作者', 'C作者', 'D作者'],
			submitted: false
		};
	},
	methods: {
		postData() {
			axios
				.put('/posts', {
					blog:this.blog
				})
				.then(res => {
					console.log(res);
					this.submitted = true;
				})
				.catch(err => console.log(err));
		}
	},
	created() {
		axios.get('/posts/'+this.id).then(res=>{
			// this.blog.title = res.data.title;this.blog.content = res.data.content;
			this.blog = res.data
		}).catch()
	}
};
</script>

<style type="text/css" scoped>
	#edit-blog *{
		box-sizing: border-box;
	}
	
	#edit-blog{
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
