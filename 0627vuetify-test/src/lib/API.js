const API_URL = "http://localgost:8080/api/vi/products"

export default {
	getProducts() {
		return fetch(API_URL).then((res) => res.json())
	}
}
