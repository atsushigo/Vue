<template>
	<div class="hello ma-5"><v-btn to="/product" color="primary">Products</v-btn></div>
	<!-- <router-link to="/product">Product</router-link> -->
	<!-- :to="{ name: 'Product' }" -->
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
};
</script>

<syle scoped>
	
</syle>
