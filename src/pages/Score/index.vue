<template>
  <div id="content">
    <el-table
      :data="scores"
      height="250"
      border
      style="width: 100%; background: red"
    >
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="departmentname" label="诊室"> </el-table-column>
      <el-table-column prop="name" label="医生"> </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
        <template #default="scope">
          <el-tag
            :type="
              scope.row.state === '成功'
                ? 'success'
                : scope.row.state === '失败'
                ? 'danger'
                : 'warning'
            "
            >{{ scope.row.state }}</el-tag
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "score",
  data() {
    return {
      scores: [
        {
          id: 0,
          name: "张三",
          department: "吃饭",
          date: "2022-01-02",
          state: "失败",
        },
      ],
    };
  },
  mounted() {
    this.$axios
      .post("/user/findpatientbyname", this.$store.state.user)
      .then((data) => {
        console.log("预约时获取病人的数据", data);
        if (data.length) {
          let inform = data[0];
          return inform;
        } else {
          alert("请创建个人信息");
          this.$router.push("/home/inform");
        }
      }).then(data=>{
        this.$axios.post("/user/checkmedical",data).then(data=>{
          console.log("获取到的信息",data);
          this.scores = data
        })
      })

  },
};
</script>

<style lang="scss" scoped>
#content {
  height: 100%;
  background: blue;
}
.score {
  height: 30px;
}
</style>