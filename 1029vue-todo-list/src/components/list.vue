<template>
	<section>
		<ul class="todo-list">
			<li class="todo-item" v-for="(item, index) in childrenList" :key="index">
				<span>{{ index + 1 }}</span>
				<p>{{ item }}</p>
				<button @click="removeItem(index)">完成</button>
			</li>
			<!-- <li class="todo-item">
				<span>2.</span> <p>吃飯</p> <button>完成</button>
			</li>
			<li class="todo-item">
				<span>3.</span> <p>讀書</p> <button>完成</button>
			</li> -->
		</ul>
		<div class="todo-nodata" v-show="!this.childrenList.length">還沒有todo-數據，請添加</div>
	</section>
</template>

<script>
export default {
	props:{
		childrenList:{type:Array}
	},
	data() {
		return {};
	},
	methods:{
		removeItem(index){
			console.log(index)
		}
	}
};
</script>
