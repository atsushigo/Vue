<template>
	<div>
		<h1>Login</h1>
		<form action="" @submit.prevent>
			<input v-model="user.username" placeholder="username" />
			<br />
			<input v-model="user.password" type="password" placeholder="password" />
			<br />
			<button type="submit" @click="login()">Login</button>
		</form>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			user: {
				username: '',
				password: ''
			}
		};
	},
	methods: {
		login() {
			fetch('http://localhost:3010/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					user:this.user
				})
			});
		}
	}
};
</script>

<style scoped></style>
