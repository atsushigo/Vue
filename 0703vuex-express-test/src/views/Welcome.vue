<template>
	<div>
		welcome
		<router-link v-if="!isLoggedIn" to="/login">Login</router-link>
	</div>
</template>

<script>
	import {mapGetters} from "vuex"
	export default {
		methods:{
			...mapGetters(["isLoggedIn"])
		}
	}
</script>

<style scoped>

</style>