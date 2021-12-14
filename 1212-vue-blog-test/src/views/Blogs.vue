<template>
  <div class="macontainer">
    <Header />

    <div class="block">
      <el-timeline>
        <!-- 時間需要再格式化 toLocaleString() -->
        <el-timeline-item
          :timestamp="blog.created"
          placement="top"
          v-for="(blog, index) in blogs"
          :key="index"
        >
          <el-card>
            <h4>
              <router-link
                :to="{ name: 'BlogDetail', params: { blogId: blog.id } }"
              >
                {{ blog.title }}
              </router-link>
            </h4>
            <p>{{ blog.description }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>

      <!-- element組件寫法 @current-change    https://element.eleme.io/#/zh-CN/component/pagination#attributes-->
      <el-pagination
        class="mpage"
        background
        layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
        @current-change="page(this.currentPage)"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      //默認取第一頁
      blogs: {},
      currentPage: 1,
      total: 1,
      pageSize: 5,
    };
  },
  methods: {
    //取得此頁訊息
    page(currentPage) {
      const _this = this;
      _this.$axios.get("/blogs?currentPage=" + currentPage).then((res) => {
        console.log(res);

        //後端返回的名稱records current
        //前端變數得到數據渲染
        _this.blogs = res.data.data.records;
        _this.currentPage = res.data.data.currentPage;
        _this.total = res.data.data.total;
        _this.pageSize = res.data.data.pageSize;
      });
    },
  },
  created() {
    //呼叫page方法 默認第一頁渲染
    this.page(1);
  },
};
</script>

<style scoped>
.mpage {
  margin: 0 auto;
  text-align: center;
}
</style>