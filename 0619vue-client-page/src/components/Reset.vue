<template>
	<form @submit.prevent>
		<h3>Reset Password</h3>

		<div class="form-group">
			<label>Password</label>
			<input v-model="password" type="password" class="form-control" placeholder="Password" />
		</div>

		<div class="form-group">
			<label>Password Confirm</label>
			<input v-model="passwordConfirm" type="password" class="form-control" placeholder="Password Confirm" />
		</div>
		
		<button class="btn btn-primary btn-block" @click="handleSubmit()">Submit</button>
	</form>
</template>

<script type="text/javascript">
	import axios from 'axios'
	export default {
		name:'Reset',
		data() {
			return{
				password:null,
				passwordConfirm:null,
			}
		},
		methods:{
		async handleSubmit(){
				const response = await axios.post('/reset',{
					password:this.password,
					token: this.$route.params.token
				});
				console.log(response)
				this.$router.push('/login');
			}
		}
	}
</script>
