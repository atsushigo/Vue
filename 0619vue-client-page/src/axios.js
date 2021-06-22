import axios from 'axios'

axios.defaults.baseURL = 'https://tw-sam-api-blog.herokuapp.com/'
//Authorization 要特別注意後端有沒有帶 "Bearer "
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
//要注意後台要的資料格式是什麼 application/x-www-form-urlencoded 還是 multipart/form-data 還是 application/json
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'