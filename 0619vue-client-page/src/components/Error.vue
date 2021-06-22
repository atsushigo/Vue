<template>
	<div v-if="error" class="alert alert-danger" role="alert">
		{{error}}
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'Error',
		props:['error']
	}
</script>