<template>
  <div id="content">
    <el-table
      :data="scores"
      height="250"
      border
      style="width: 100%; background: red"
    >
      <el-table-column prop="trackdate" label="预约日期"> </el-table-column>
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
            >{{ scope.row.status }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="conditions" label="情况">
        <template #default="scope">
          {{scope.row.conditions||"代办"}}
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
        // {
        //   id: 0,
        //   name: "张三",
        //   department: "吃饭",
        //   date: "2022-01-02",
        //   state: "失败",
        // },
      ],
      patient: {},
    };
  },
  mounted() {
    let thisdoc = this
    setTimeout(function () {
      this.patient = thisdoc.$store.state.patient;
      console.log("跟踪里的信息", thisdoc.patient);
      if (!this.patient) {
        alert("请创建个人信息");
        thisdoc.$router.push("/home/inform");
      }
      thisdoc.getList();
    },1000);
  },
  methods: {
    getList() {
      this.$axios.post("/user/checkTrack", this.patient).then((data) => {
        console.log("获取到的信息", data);
        this.scores = data;
      });
    },
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