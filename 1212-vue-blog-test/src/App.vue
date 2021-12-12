<template>
	<div id="app">
		<el-container>
			<el-header><img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Blogger_logo.svg/1280px-Blogger_logo.svg.png" /></el-header>
			<el-main>Main</el-main>
		</el-container>
		<router-view />
	</div>
</template>

<style>
.logo {
	height: 60%;
	margin-top: 0.4125rem;
}
.el-header,
.el-footer {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
}

.el-aside {
	/* background-color: #d3dce6; */
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	/* background-color: #e9eef3; */
	color: #333;
	text-align: center;
	line-height: 160px;
}

body > .el-container {
	margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
	line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
	line-height: 320px;
}
</style>
