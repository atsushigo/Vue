import Vue from 'vue'
import Vuex from 'vuex'
//要注意大小寫Vue大小寫 
Vue.use(Vuex);

const state = {
	user: null
};

const store = new Vuex.Store({
	state,
	getters: {
		//只從state拿資料
		user: (state) => {
			return state.user;
		}
	},
	actions: {
		//接收子組件互動(dispatch)
		//用actions改變mutations
		user(context, user) {
			context.commit('user', user)
		}
	},
	mutations: {
		//mutation會改變user資料然後getters會拿到
		user(state, user) {
			state.user = user;
		}
	},
});

export default store;
