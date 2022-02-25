<template>
  <div id="content">
    <el-table
      :data="scores"
      height="250"
      border
      style="width: 100%; background: red"
    >
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="department" label="诊室"> </el-table-column>
      <el-table-column prop="date" label="医生"> </el-table-column>
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
          state:"失s败"
        },
      ],
    };
  },
  mounted() {
    // this.$axios.get().then
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