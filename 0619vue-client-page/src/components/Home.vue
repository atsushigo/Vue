<template>
	<div>
		<h3 v-if="user">Hello,{{ user }}</h3>
		<h3 v-if="!user">You are not logged in</h3>
	</div>
</template>

<script type="text/javascript">
import axios from 'axios';
export default {
	name: 'Home',
	data() {
		return {
			user: null
		};
	},
	async created() {
		this.user = response.data.user;
		const response = await axios.get('user');
		console.log(response);
	}
};
</script>

<style type="text/css"></style>
