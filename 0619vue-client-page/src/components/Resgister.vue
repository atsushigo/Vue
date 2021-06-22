<template>
	<form @submit.prevent>
		<Error v-if="error" :error="error" />

		<h3>sign up</h3>

		<div class="form-group">
			<label for="">First Name</label>
			<input type="text" class="form-control" v-model="first_name" placeholder="First Name" />
		</div>

		<div class="form-group">
			<label for="">Last Name</label>
			<input type="text" class="form-control" v-model="last_name" placeholder="Last Name" />
		</div>

		<div class="form-group">
			<label for="">Email</label>
			<input type="email" class="form-control" v-model="email" placeholder="Email" />
		</div>

		<div class="form-group">
			<label for="">Password</label>
			<input type="password" class="form-control" v-model="password" placeholder="Password" />
		</div>

		<div class="form-group">
			<label for="">Confirm Password</label>
			<input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm Password" />
		</div>

		<button class="btn btn-primary btn-block" @click="handleSubmit()">Sign up</button>
	</form>
</template>

<script type="text/javascript">
import axios from 'axios';
import Error from './Error.vue';

export default {
	name: 'Register',
	components: Error,
	data() {
		return {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			password_confirm: '',
			error: ''
		};
	},
	methods: {
		async handleSubmit() {
			try {
				const response = await axios.post('register', {
					first_name: this.first_name,
					last_name: this.last_name,
					email: this.email,
					password: this.password,
					password_confirm: this.password_confirm
				});
				console.log(response);
				this.$router.push('/login');
			} catch (e) {
				//給UI顯示錯誤訊息
				this.error = '輸入框非法錯誤';
			}
		}
	}
};
</script>
