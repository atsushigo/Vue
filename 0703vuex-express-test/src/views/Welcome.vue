<template>
	<div>
		welcome
		<router-link v-if="!isLoggedIn" to="/login">Login</router-link>
		<button @click="hello()">Hello</button>
	</div>
</template>

<script>
	import {mapGetters,mapState} from "vuex"
	export default {
		computed:{
			...mapGetters(["isLoggedIn"]),
			...mapState({
				token:"token"
			})
		},
		methods:{
			hello(){
				fetch('http://localhost:3010/hi',{
					headers:{
						"Authorization": "Bearer " + this.token
					}
				})
			}
		}
	}
</script>

<style scoped>

</style>