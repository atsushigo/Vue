<template>
	<form>
		<!-- <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> -->
		<h1>Login</h1>
		<div class="form-floating">
			<h5>Email</h5>
			<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
		</div>
		<div class="form-floating">
			<h5>Password</h5>
			<input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
		</div>

		<button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
		<p class="mt-5 mb-3 text-muted">&copy; 2021</p>
	</form>
</template>

<script type="text/javascript">
export default {
	name: 'Login'
};
</script>

<style type="text/css">
.bd-placeholder-img {
	font-size: 1.125rem;
	text-anchor: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}

@media (min-width: 768px) {
	.bd-placeholder-img-lg {
		font-size: 3.5rem;
	}
}

button {
	margin-top: 10px;
}

</style>
