import axios from "axios"

axios.defaults.baseURL = "http://localhost:8081"

//前置攔截 方起請求時固定動作設定
axios.interceptors.request.use(config=>{
	return config
})

//後置攔截 出現異常時固定動作設定
//打印出res
axios.interceptors.response.use(response=>{
	let res = response.data
	console.log("======")
	console.log(res)
	
	if(res.code === 200) return response
})