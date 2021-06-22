<template>
	<div v-if="message" class="alert alert-success" role="alert">
		{{message}}
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'Success',
		props:['message']
	}
</script>