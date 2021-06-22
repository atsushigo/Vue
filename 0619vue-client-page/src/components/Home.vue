<template>
	<div>
		<h3 v-if="user">Hello,{{ user }}</h3>
		<h3 v-if="!user">You are not logged in</h3>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'Home',
	props:['user'],
};
</script>

<style type="text/css"></style>
