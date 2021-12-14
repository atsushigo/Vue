<template>
  <div class="macontainer">
    <Header />

    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2018/04/12" placement="top">
          <el-card>
            <h4>更新模板</h4>
            <p>提交於2021/04/12 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>

      <el-pagination
        class="mpage"
        background
        layout="prev, pager, next"
        :total="1000"
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
  created(){
	  //呼叫page方法 默認第一頁渲染
	  this.page(1)
  }
};
</script>

<style scoped>
.mpage {
  margin: 0 auto;
  text-align: center;
}
</style>