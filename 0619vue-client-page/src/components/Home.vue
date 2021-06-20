<template>
	<h3>Hello</h3>
</template>

<script type="text/javascript">
import axios from 'axios';
export default {
	name: 'Home',
	async created() {
		const response = await axios.get('user',{
			headers:{
				Authorization:localStorage.getItem('token')
			}
		})
		console.log(response)
	}
};
</script>

<style type="text/css"></style>
