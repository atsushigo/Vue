import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: "",
		userInfo: {}
	},
	mutations: {
		//用token去跟後端拿userInfo
		//set 把身份儲存在token
		SET_TOKEN: (state, token) => {
			state.token = token
			localStorage.setItem("token", token)
		},
		//sessionStorage瀏覽器關閉時即丟失
		//sessionStorage 只能存"字符串"" 不能存對象 所以把資料序列化JSON.stringify
		SET_USERINFO: (state, userInfo) => {
			state.userInfo = userInfo
			seesionStorage.setItem("userInfo", JSON.stringify(userInfo))
		},
		//把token 和 userInfo清空以及所有storage
		REMOVE_INFO: (state) => {
			state.token = "",
				state.userInfo = {},
				localStorage.setItem("token", "")
			sessionStorage.setItem("userInfo", "")
		}
	},
	actions: {
		//get
	},
	modules: {}
})
