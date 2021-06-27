<template>
	<!-- <h1>Create</h1>-->
	<v-form class="ma-5" ref="form" v-model="valid" lazy-validation>
		<v-text-field v-model="product.title" :counter="10" :rules="titleRules" label="Title" required></v-text-field>
		<!-- <v-text-field multi-line v-model="product.descriotion" :rules="emailRules" label="Description" required></v-text-field> -->
		<v-textarea
			name="input-7-1"
			v-model="product.description"
			filled
			label="Label"
			auto-grow
			value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
		></v-textarea>
		<v-text-field :rules="priceRules" prefix="$" v-model.number="product.price" label="Price" required></v-text-field>
		<v-text-field :rules="quantityRules" v-model.number="product.quantity" label="Quantity" required></v-text-field>
		<v-text-field :rules="imageRules" v-model.trim="product.image" label="Image" required></v-text-field>
		<v-btn :disabled="!valid" color="success" class="mr-4" @click="submit()">Submit</v-btn>

		<v-btn color="error" class="mr-4" @click="clear()">Clear</v-btn>
	</v-form>
</template>

<script type="text/javascript">
export default {
	props: ['product', 'onSubmit'],
	name: 'ProductForm',
	data() {
		return {
			valid: true,
			titleRules: [
				title => {
					if (title.trim() === '') return 'Title must no be empty';
				}
			],
			priceRules: [
				price => {
					if (isNaN(price)) return 'Price must be a number';
					if (Number(price) <= 0) return 'Price must be greater than 0';
				}
			],
			quantityRules: [
				quantity => {
					if (isNaN(quantity)) return 'Quantity must be a valid number';
					if (Number(quantity) < 0) return 'Quantity must be 0 or greater';
				}
			],
			imageRules: [
				image => {
					if (!image) return 'Please enter image';
				}
			]
		};
	},
	methods: {
		//把submit實際行為交給獨立組件管理 function傳的名稱自己定義
		submit() {
			if (this.$refs.form.validate()) {
				this.onSubmit();
			}
		},
		clear() {
			this.$refs.form.reset();
		}
	}
};
</script>

<style type="text/css"></style>
