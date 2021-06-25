<template>
	<nav>
		<ul>
			<li>
				<!-- exact是處理點下去後樣式殘留的問題 -->
				<router-link to="/" exact>部落格</router-link>
				<router-link to="/add" exact>撰寫部落格</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'BlogHeader'
};
</script>

<style>
ul {
	list-style: none;
	text-align: center;
	margin: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #fff;
	text-decoration: none;
	padding: 12px;
	margin: 5px;
	border-radius: 5px;
}
nav {
	background: crimson;
	padding: 30px 0;
	margin-bottom: 40px;
}
.router-link-active {
	background: rgba(255, 255, 255, 0.8);
	color: #444;
}
</style>
