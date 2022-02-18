<template>
  <div id="app">
    <!-- <h1>我的学习历程</h1> -->
    <!-- <Echart></Echart> -->
    <!-- <element-demo></element-demo> -->

    <el-container style="height:100%">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import Echart from "../components/Echarts.vue";
import ElementDemo from "../components/ElementDemo.vue";

export default {
  name: "App",
  components: {
    Echart,
    ElementDemo,
  },
};
</script>


<style>
#app {
  margin: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  right: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
