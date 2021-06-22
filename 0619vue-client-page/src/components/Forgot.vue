<template>
	<form @submit.prevent>
		<Error :error="error" />
		<Success v-if="message" :message="message" />
		<h3>Forgot Password</h3>

		<div class="form-group">
			<label>Email</label>
			<input v-model="email" type="email" class="form-control" placeholder="Email" />
		</div>

		<button class="btn btn-primary btn-block" @click="handleSubmit()">Submit</button>
	</form>
</template>

<script>
import axios from 'axios';
import Error from './Error.vue';
import Success from './Success.vue';
export default {
	name: 'Forgot',
	components: {
		Error,
		Success
	},
	data() {
		return {
			email: null,
			message: '',
			error: ''
		};
	},
	methods: {
		async handleSubmit() {
			try {
				const response = await axios.post('/forgot', {
					email: this.email
				});
				console.log(response);
				this.message = '已發送Email至您信件';
			} catch (e) {
				this.error = '您的Email有誤';
			}
		}
	}
};
</script>

<style></style>
