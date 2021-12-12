import axios from "axios"
import Element from "element-ui"
import router from "./router"
import store from "./store"

axios.defaults.baseURL = "http://localhost:8081"

//前置攔截 發起請求時固定動作設定
axios.interceptors.request.use(config=>{
	return config
})

//後置攔截 出現異常時固定動作設定
//打印出res
axios.interceptors.response.use(response=>{
	let res = response.data
	console.log("======")
	console.log(res)
	
	//成功時return讓他直接往下面then走
	if(res.code === 200) return response
	
	//默認異常
	Element.Message.error("錯誤訊息提示",{duration:3*1000})
	
	//讓他不跑then後面邏輯 直接返回異常訊息
	return Promise.reject(response.data.msg)
},
error=>{
	//權限不足或回傳請求失敗
	console.log(error)
	if(error.response&&error.response.data) {error.message = error.response.data.msg}
	if(error.response&&error.response.status === 401) {store.commit("REMOVE_INFO"); router.push("/login"); console.log("push to login")}
	
	Element.Message.error("請求失敗訊息提示",{duration:3*1000})
	return Promise.reject(error)
}
)