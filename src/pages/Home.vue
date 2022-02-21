<template >
  <!-- <div id="main-content"> -->

  <el-container id="main-content">
    <el-header height="10%">{{this.$store.state.msg}}dgf</el-header>
    <el-container id="main-content" style="height: 90%">
      <!-- <el-aside width="200px">Aside</el-aside> -->
      <w-aside></w-aside>
      <w-main></w-main>
    </el-container>
    <!-- <el-footer height="66px">外层底部</el-footer> -->
  </el-container>
  <!-- </div> -->
</template>

<script>
import WAside from "../layouts/W-aside";
import wMain from "../layouts/W-main";

export default {
  components: { wMain, WAside },
  beforeMount(){
    console.log(this.$store);
  }
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
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: 0;
  /* position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  right: 0; */
}
#main-content {
  width: 100%;
  background: red;
  height: 100%;
  /* display: fixed;
  position: absolute;
  left: 0;
  top: 0px;
  bottom: 0;
  margin: 0; */
}
</style>