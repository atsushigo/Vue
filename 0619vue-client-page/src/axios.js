import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:????/'
//Authorization 要特別注意後端有沒有帶 "Bearer "
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')