<template>
	<div>
		<v-layout row wrap>
			<v-flex xs12>
				<v-card class="mx-auto">
					<v-img class="white--text align-end" height="200px" :src="product.img"><v-card-title>Top 10 Australian beaches</v-card-title></v-img>

					<v-card-subtitle class="pb-0">{{ product.title }}</v-card-subtitle>

					<v-card-text class="text--primary">
						<div>{{ product.description }}</div>
					</v-card-text>

					<v-card-actions><v-btn :to="'/edit/'+product.id" color="orange" text>Edit</v-btn></v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</div>
</template>

<script type="text/javascript">
import API from '@/lib/API';
export default {
	name: 'SingleProduct',
	data() {
		return {
			product: {}
		};
	},
	mounted() {
		const id = this.$route.params.id;
		// 或者寫成解構函數
		// const {id} = this.$route.params;
		// console.log(id);
		this.load(id)
	},
	methods:{
		load(){
			API.getProduct().then((product)=>{
				this.product = product
			})
		}
	}
};
</script>

<style type="text/css"></style>
