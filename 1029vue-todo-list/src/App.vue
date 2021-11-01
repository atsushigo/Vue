<template>
	<div id="app">
		<header>todoList</header>
		<TodoInput @addItem="addChildrenItem"/>
		<!-- 要注意不能用addChildrenItem() 要用名稱addChildrenItem -->
		<TodoList :childrenList="list" @removeItem="removeItem"/>
	</div>
</template>

<script>
	import TodoInput from "./components/input.vue"
	import TodoList from "./components/list.vue"
    export default {
	name: 'App',
	components:{
		TodoInput,TodoList
	},
	data(){
		return{
			list:["打遊戲","吃飯","讀書"],
		}
	},
	methods:{
		addChildrenItem(val){
			this.list.push(val)
		},
		removeItem(num){
			this.list.splice(num,1)
		}
	}
};
</script>

<style>
#app {
	width: 400px;
	height: 500px;
	margin: 80px auto;
	padding-top:20px;
}
header{
	font-size:20px;
	line-height: 40px;
	text-align: center;
}
.todo-input{
	display: flex;
}
.todo-input input{
	flex:1;
	height: 34px;
	margin-right: 20px;
	padding-left: 10px;
	border-radius: 6px;
	font-size:15px;
}
.todo-input button{
	width: 70px;
	height: 50px;
	background-color: darkturquoise;
	border:none;
	border-radius:6px;
	color:#fff;
}
.todo-item{
	display: flex;
	height: 40px;
	padding: 0 20px;
}
.todo-item span{
	padding-right: 10px;
}
.todo-item p{
	flex:1
}
.todo-item button{
	width: 50px;
	height:32px;
	background-color: red;
	border: none;
	border-raius:6px;
	color: #FFFFFF;
}
.todo-nodata{
	font-size: 28px;
	line-height: 80px;
	text-align: center;
	color: aqua;
}
ul{
	marign:0;
	padding: 0;
	list-style: none;
}
p{
	margin: 0;
}
</style>
