<template>
	<div>
		<nav class="navbar navbar-expand navbar-light fixed-top">
			<div class="container">
				<router-link to="/" class="navbar-brand">Home</router-link>
				<div class="collapse navbar-collapse">
					<ul v-if="!user" class="navbar-nav ml-auto">
						<li class="nav-item"><router-link to="/login" class="nav-link">Login</router-link></li>
						<li class="nav-item"><router-link to="/register" class="nav-link">Sign up</router-link></li>
					</ul>
					
					<ul v-if="user" class="navbar-nav ml-auto">
						<li class="nav-item"><router-link to="/" @click="handleClick()" class="nav-link">Logout</router-link></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		name:'Nav',
		methods:{
			handleClick(){
				localStorage.removeItem('token');
				this.$store.dispatch('user',null)
				this.$router.push('/')
			}
		},
		computed:{
			...mapGetters(['users'])
		}
	}
	
</script>
