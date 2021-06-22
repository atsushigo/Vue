<template>	
	<form @submit.prevent>
		<h3>Forgot Password</h3>
		
		<div class="form-group">
			<label>Email</label>
			<input v-model="email" type="email" class="form-control" placeholder="Email" />
		</div>
		
		<button class="btn btn-primary btn-block" @click="handleSubmit()">Submit</button>
	</form>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'Forgot',
		data() {
			return{
				email:null,
			}
		},
		methods:{
			async handleSubmit(){
				const response = await axios.post('/forgot',{
					email:this.email
				});
				console.log(response)
			}
		},
	}
</script>

<style>
	
</style>