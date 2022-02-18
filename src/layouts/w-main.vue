<template>
    <el-container class="v-content"  >
      <!-- <elcontainer>dsaf</elcontainer> -->
      <base-table style="height:92%" ></base-table>
      <!-- <v-main>dsfg</v-main> -->
      <el-footer style="height:8%">@ <font color="red">魏少</font> 倾情制作</el-footer>
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
.v-content {
    display: block;
    position: relative;
    left: 0;
    top: 0;
    height: 100%;
    /* overflow-y: scroll; */
}
</style>