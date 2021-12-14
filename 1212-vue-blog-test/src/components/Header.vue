<template>
  <div class="m-content">
    <div class="block">
      <el-avatar :size="50" :src="user.avatar"></el-avatar>
      <div>{{ user.username }}</div>
    </div>

	<!-- 沒有用戶訊息時顯示登入按鍵 有時則顯示退出 -->
    <div class="maction">
      <span><el-link href="/blogs" type="info">主頁</el-link></span>
      <el-divider direction="vertical"></el-divider>
      <span><el-link href="/blog/add" type="success">發表文章</el-link></span>
	  <el-divider direction="vertical"></el-divider>
      <span v-show="!hasLogin"><el-link href="/login" type="primary">登入</el-link></span>
      <el-divider direction="vertical"></el-divider>
      <span v-show="hasLogin"><el-link @click="logout()" type="danger">退出</el-link></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: {
        username: "請先登入",
        avatar:
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      },
	  hasLogin:false
    };
  },
  methods: {
    //jwt無狀態 把localstorage刪掉就好
    logout() {
      //axios導向
      //取token logout  store清值
      const _this = this;
      _this.$axios
        .get("/logout", {
          headers: {
            "Authorization": localStorage.getItem("token"),
          },
        })
        .then(res => {
          _this.$store.commit("REMOVE_INFO");
          _this.$router.push("/login");
        });
		//跳轉到登入頁面
		this.$router.push("/login")
    },
  },
  created() {
    if (this.$store.getters.getUser) {
      this.user.username = this.$store.getters.getUser.username;
      this.user.avatar = this.$store.getters.getUser.avatar;

	  this.hasLogin = true
    }
  },
};
</script>

<style scoped>
.m-content {
  /* 給長度才可居中 */
  margin: 0 auto;
  max-width: 960px;
  text-align: center;
}

.maction {
  margin: 10px 0;
}
</style>
