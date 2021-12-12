<template>
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
	  <el-form-item label="用戶名" prop="username">
	    <el-input v-model="ruleForm.username"></el-input>
	  </el-form-item>
	  <el-form-item label="密碼" prop="password">
	    <el-input  type="password" v-model="ruleForm.password"></el-input>
	  </el-form-item>
	  
	  <el-form-item>
	    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
	    <el-button @click="resetForm('ruleForm')">重置</el-button>
	  </el-form-item>
	</el-form>
</template>

<script>
	export default {
	    data() {
	      return {
	        ruleForm: {
	          name: '',
	          region: '',
	          date1: '',
	          date2: '',
	          delivery: false,
	          type: [],
	          resource: '',
	          desc: ''
	        },
	        rules: {
	          username: [
	            { required: true, message: '請輸入用戶名稱', trigger: 'blur' },
	            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
	          ],
	          password: [
	            { required: true, message: '請輸入密碼', trigger: 'blur' },
	            /* { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' } */
	          ],
	          
	        }
	      };
	    },
	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('submit!');
				//防止axios指向和vue指向混淆 要用vuex的this
				const _this = this
				this.$axios.post("http://localhost:8081/login",this.ruleForm).then(res=>{
					console.log("請求成功",res)
					const jwt = res.headers['authorization']
					const userInfo = res.data.data
					console.log(userInfo)
					
					//把數據全局共享出去到vuex
					_this.$store.commit("SET_TOKEN",jwt)
					_this.$store.commit("SET_USERINFO",userInfo)
					
					//獲取用戶訊息
					console.log(_this.$store.getters.getUser)
					//跳轉到詳情頁面
					_this.$router.push("/blogs")
				})
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
	    }
	  }
</script>

<style scoped>
.demo-ruleForm{
	max-width: 500px;
	margin: 0 auto;
}
</style>