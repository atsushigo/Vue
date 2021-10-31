<template>
	<section class="todo-input">
		<input type="text" placeholder="請輸入需要添加的事項" v-model="inputText" @change="print()" />
		<button @click="addItem()">添加</button>
	</section>
</template>
<script type="text/javascript">
export default {
	data() {
		return {
			inputText:""
		};
	},
	methods:{
		print(){console.log(this.inputText)},
		addItem(){
			this.$emit("addItem",this.inputText)
			/* this.list.push(this.inputText) */
			this.inputText = ""
		},
	}
};
</script>
