<template >
<div id="navigation">

  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header>HEAD</el-header>
    <el-container>
      <!-- <el-aside width="200px">Aside</el-aside> -->
      <w-aside></w-aside>
      <w-main></w-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
import WAside from "./layouts/w-aside.vue";
import wMain from "./layouts/w-main.vue";

export default {
  components: { wMain, WAside },
};
</script>

<style >
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
#navigation {
  /* height: 80px; */
  width: 100%;
  background: yellow;
}
/* *{
  margin: 0;
} */
</style>