<template>
    <el-container  style="height: 500px;">
      <!-- <elcontainer>dsaf</elcontainer> -->
      <base-table style="height: 500px;"></base-table>
      <!-- <v-main>dsfg</v-main> -->
      <el-footer>dasf</el-footer>
    </el-container>

</template>

<script>
import BaseTable from "../pages/BaseTable.vue";
export default {
  components: { BaseTable },
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
<style  scoped>

</style>