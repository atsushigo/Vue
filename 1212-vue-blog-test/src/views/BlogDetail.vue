<template>
  <div>
    <Header />
    <div class="m-blog">
      <h2>{{ blog.title }}</h2>
      <el-divider></el-divider>
      <div v-html="blog.content"></div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
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
      _this.blog.content = blog.content;
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
}
</style>