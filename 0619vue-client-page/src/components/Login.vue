<template>
	<form @submit.prevent>
		<!-- <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> -->
		
		<div v-if="error" class="alert alert-danger" role="alert">
			{{error}}
		</div>
		
		<h1>Login</h1>
		<div class="form-floating">
			<h5>Email</h5>
			<input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
		</div>
		<div class="form-floating">
			<h5>Password</h5>
			<input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password" />
		</div>

		<button class="w-100 btn btn-lg btn-primary" @click="handleSubmit()">Login</button>
		<p class="forgot-password text-right"><router-link to="forgot">Forgot password?</router-link></p>

		<p class="mt-5 mb-3 text-muted">&copy; 2021</p>
	</form>
</template>

<script type="text/javascript">
import axios from 'axios';
export default {
	name: 'Login',
	data() {
		return {
			email: '',
			password: '',
			error:'',
		};
	},
	methods: {
		async handleSubmit() {
			try {
				const response = await axios.post('login', {
					email: this.email,
					password: this.password
				});
				console.log(response);
				localStorage.setItem('token', response.data.token);
				//接到後端傳回的data後傳給共用管理狀態
				this.$store.dispatch('user', response.data.user);
				this.$router.push('/');
			} catch (e) {
				//給UI顯示錯誤訊息
				this.error = "帳號或密碼錯誤"
			}
		}
	}
};
</script>

<style type="text/css">
.bd-placeholder-img {
	font-size: 1.125rem;
	text-anchor: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}

@media (min-width: 768px) {
	.bd-placeholder-img-lg {
		font-size: 3.5rem;
	}
}

button {
	margin-top: 10px;
}
</style>
