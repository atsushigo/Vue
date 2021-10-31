<template>
	<div id="app">
		<header>todoList</header>
		<section class="todo-input">
			<input type="text" placeholder="請輸入需要添加的事項"  v-model="inputText" @change="print()"/>
			<button>添加</button>
		</section>
		
		<section>
			<ul class="todo-list">
				<li class="todo-item" v-for="(item,index) in list" :key="index">
					<span>{{index+1}}</span> <p>{{item}}</p> <button>完成</button>
				</li>
				<!-- <li class="todo-item">
					<span>2.</span> <p>吃飯</p> <button>完成</button>
				</li>
				<li class="todo-item">
					<span>3.</span> <p>讀書</p> <button>完成</button>
				</li> -->
			</ul>
		</section>
	</div>
</template>

<script>
export default {
	name: 'App',
	data(){
		return{
			list:["打遊戲","吃飯","讀書"],
			inputText:""
		}
	},
	methods:{
		print(){console.log(this.inputText)}
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
ul{
	marign:0;
	padding: 0;
	list-style: none;
}
p{
	margin: 0;
}
</style>
