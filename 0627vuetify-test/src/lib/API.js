const API_URL = "http://localgost:8080/api/vi/products"

export default {
	getProducts() {
		return fetch(API_URL).get(API_URL)
	},
	getSingleProduct() {
		return fetch(API_URL).get('${API_URL}/${this.$route.params}')
	},
	createProduct(){
		return fetch(API_URL).get(API_URL)
	}
}
