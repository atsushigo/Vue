<template>
	<form @submit.prevent>
		<Error v-if="error" :error="error" />
		<Success v-if="message" :message="message" />
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
import axios from 'axios';
import Error from './Error.vue';
import Success from './Success.vue';
export default {
	name: 'Reset',
	components: {
		Error,
		Success
	},
	data() {
		return {
			password: null,
			passwordConfirm: null,
			error: '',
			message: '',
		};
	},
	methods: {
		async handleSubmit() {
			try {
				const response = await axios.post('/reset', {
					password: this.password,
					token: this.$route.params.token
				})
				this.message = "重新設置成功",
				console.log(response)
				this.$router.push('/login')
			} catch (e) {
				this.error = '您的資料有誤';
			}
		}
	}
}
</script>
