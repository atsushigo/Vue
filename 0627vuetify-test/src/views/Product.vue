<template>
	<div>
		<v-layout row wrap>
			<v-flex xs4 v-for="(product, index) in products" :key="index">
				<v-card class="mx-auto">
					<v-img class="white--text align-end" height="200px" :src="product.img"><v-card-title>Top 10 Australian beaches</v-card-title></v-img>

					<v-card-subtitle class="pb-0">{{ product.title }}</v-card-subtitle>

					<v-card-text class="text--primary">

						<div>{{ product.description }}</div>
					</v-card-text>

					<v-card-actions>
						<v-btn color="orange" text :to="'/product/'+product.id">View</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</div>
</template>

<script type="text/javascript">
import API from '@/lib/API';
export default {
	name: 'Product',
	data() {
		return {
			products: [1, 2, 3, 4]
		};
	},
	mounted() {
		this.load();
	},
	methods: {
		load() {
			API.getProducts().then(products => (this.products = products));
		}
	}
};
</script>

<style type="text/css"></style>
