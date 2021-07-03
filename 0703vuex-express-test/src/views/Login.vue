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
import {mapMutations} from "vuex"
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
		...mapMutations(["setUser","setToken"]),
		async login() {
			const response = await fetch('http://localhost:3010/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					user:this.user
				})
			});
			const {user,token} = await response.json()
			console.log(user,token)
			this.setUser(user)
			this.setToken(token)
		}
	}
};
</script>

<style scoped></style>
