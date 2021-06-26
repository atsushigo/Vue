import axios from 'axios'

const myaxios = axios.create({
	baseURL:"https://jsonplaceholder.typicode.com",
	// headers:common['Authorization'] = localStorage.getItem('token')
})

export default myaxios