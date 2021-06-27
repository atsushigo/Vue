<template>
	<!-- 這邊要注意onSubmit傳過來是用值的狀態要用submit接不可以submit() TypeError -->
	<!-- 可以理解為個組件中間只傳值 而不是function -->
	<div>
		<h1 class="text-center">Edit</h1>
		<ProductForm :product="product" :onSubmit="submit"></ProductForm>
	</div>
</template>

<script>
import API from '@/lib/API';
import ProductForm from './ProductForm.vue';
export default {
	name: 'Create',
	components: {
		ProductForm
	},
	data() {
		return {
			product: {
				title: '',
				description: '',
				price: 0,
				quantity: 0,
				image: ''
			}
		};
	},
	mounted() {
		const id = this.$route.params.id;
		this.load(id);
	},
	methods: {
		load(id) {
			API.getProduct(id).then(product => {
				this.product = product;
			});
		},
		submit() {
			// 特別注意轉型
			// this.product.quantity = Number(this.product.quantity);
			API.updateProduct(this.product)
				.then(res => {
					console.log(res);
					//接回傳的對象拿id跳轉頁面
					//this.$router.push({name:"SingleProduct",params:{id:this.product.id}})
					this.$router.push("'/product/'+this.product.id");
				})
				.catch(err => {
					console.log(err);
					this.$router.push("'/product/'+res.id");
				});
		}
	}
};
</script>

<style></style>

<!-- submit() {
			// console.log(this.product)
			if (this.$refs.form.validate()) {
				// 特別注意轉型
				// this.product.quantity = Number(this.product.quantity);
				API.createProduct(this.product)
					.then(res => {
						console.log(res);
						//接回傳的對象拿id跳轉頁面
						this.$router.push("'/product/'+res.id");
					})
					.catch(err => {
						console.log(err);
					});
				
			} else {
				alert('not OK');
			}
		}, -->
