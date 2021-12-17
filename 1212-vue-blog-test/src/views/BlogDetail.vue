<template>
  <div>
    <Header />
    <div class="m-blog">
      <h2>{{ blog.title }}</h2>
      <el-link icon="el-icon-edit">
        <router-link :to="{ name: 'BlogAdd', params: { blogId: blog.id } }">
          編輯
        </router-link>
      </el-link>
      <el-divider></el-divider>
      <div class="markdown-body" v-html="blog.content"></div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
//這插件import包即可
/* import "github-markdown-css/github-markdown.css" */
import "github-markdown-css";
export default {
  components: { Header },
  data() {
    return {
      blog: {
        //抓取此頁params id EX:localhost:8080/blog/14
        id: "",
        title: "預設title",
        content: "預設內容",
      },
    };
  },
  methods: {},
  created() {
    const blogId = this.$route.params.blogId;
    console.log(blogId);
    const _this = this;
    this.$axios.get("/blog" + blogId).then((res) => {
      const blog = res.data.data;
      _this.blog.id = blog.id;
      _this.blog.title = blog.title;

      //處理md格式顯示
      var MarkdownIt = require("markdown-it");
      var md = new MarkdownIt();
      var result = md.render(blog.content);

      _this.blog.content = result;
    });
  },
};
</script>

<style scoped>
/* 邊框背景 element提供 */
.m-blog {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 auto;
  width: 90%;
  min-height: 700px;
  padding: 20px 10px;
}

.markdown-body {
}
</style>