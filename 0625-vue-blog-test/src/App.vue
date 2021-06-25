<template>
	<div id="app">
		<BlogHeader></BlogHeader>
		<!-- <AddBlog></AddBlog> -->
		<!-- <ShowBlog></ShowBlog>-->
		<router-view></router-view>
	</div>
</template>

<script>
// import AddBlog from './components/AddBlog.vue'
// import ShowBlog from './components/ShowBlog.vue'
import BlogHeader from './components/BlogHeader.vue';

export default {
	name: 'App',
	components: {
		BlogHeader
		//    AddBlog,
		// ShowBlog
	}
};
</script>

<style></style>
