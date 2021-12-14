<template>
  <div>
    <Header />
    <div class="m-content">
      <!-- form表單 https://element.eleme.io/#/zh-CN/component/form#biao-dan-yan-zheng -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="標題" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="摘要" prop="description">
          <el-input type="textarea" v-model="ruleForm.description"></el-input>
        </el-form-item>

        <el-form-item label="内容" prop="content">
          <!-- 引入markdown編輯器 -->
          <mavon-editor v-model="ruleForm.content"></mavon-editor>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即創建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "BlogEdit",
  componets: { Header },
  data() {
    return {
      ruleForm: {
        id: "",
        title: "",
        description: "",
        content: "",
      },
      rules: {
        title: [
          { required: true, message: "請輸入標題", trigger: "blur" },
          {
            min: 3,
            max: 25,
            message: "長度在 3 到 25 個字符",
            trigger: "blur",
          },
        ],
        description: [
          { required: true, message: "請輸入摘要", trigger: "blur" },
        ],
        content: [{ trequired: true, message: "請輸入內容", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const _this = this;
          //發出編輯頁面post 攜帶token認證在headers
          this.$axios
            .post("/blog/edit", this.ruleForm, {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            })
            .then((res) => {
              console.log(res);
              //消息提示框  https://element.eleme.io/#/zh-CN/component/message-box#xiao-xi-ti-shi
              _this.$alert("操作成功", "提示", {
                confirmButtonText: "確定",
                //用戶按下確定按鈕後把它轉向到部落格列表頁面  /blogs
                callback: (action) => {
                  _this.$router.push("/blogs");
                },
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {
    //編輯頁面邏輯是：先用url上的blogId和後端拿這筆部落格頁面資料，有需要編輯在用methods發出post回寫資料給後端
    /* {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit
  },   */
    const blogId = this.$route.params.blogId;
    console.log(blogId);
    const _this = this;
    if (blogId) {
      this.$axios.get("/blog/" + blogId).then((res) => {
        const blog = res.data.data;
        _this.ruleForm.id = blog.id;
        _this.ruleForm.title = blog.title;
        _this.ruleForm.description = blog.description;
        _this.ruleForm.content = blog.content;
      });
    }
  },
};
</script>

<style scoped>
.m-content {
  text-align: center;
}
</style>