<template>
	<div>
		<h3 v-if="user">Hello,{{ user }}</h3>
		<h3 v-if="!user">You are not logged in</h3>
	</div>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex';
export default {
	name: 'Home',
	computed: {
		...mapGetters(['users'])
	},
};
</script>

<style type="text/css"></style>
