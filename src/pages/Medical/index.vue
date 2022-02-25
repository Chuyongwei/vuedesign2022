<template>
  <div id="medical"> 
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="科室">
              <span>{{ props.row.department }}</span>
            </el-form-item>
            <el-form-item label="医生">
              <span>{{ props.row.doctor }}</span>
            </el-form-item>
            <el-form-item label="症状">
              <span>{{ props.row.statue }}</span>
            </el-form-item>
            <el-form-item label="处方">
              <div style="float:right;width:90%;margin-right:1px">
                  
                      {{ props.row.other }}
                      </div>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="病历 ID" prop="id"> </el-table-column>
      <el-table-column label="科室" prop="department"> </el-table-column>
      <el-table-column label="日期" prop="date"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          doctor: "张三",
          date: "2017-02-00",
          department: "心脏课",
          statue: "心脏骤停",
          other:"多吃饭，房价肯定撒谎付款计划士大夫看见不断升级北京开会艰苦奋斗的韩国空军山东高考加分",
        }
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#medical{
    width: 95%;
    padding: 2%;
    // background: #ff0;
}
  .table-expand {
    font-size: 0;
    background: #ff0;
  }
  .table-expand label {
    width: 10px;
    color: #99a9bf;
    background: #99a9bf;
  }
  .table-expand .el-form-item {
    margin-right: 1px;
    margin-bottom: 0;
    // background: red;
    width: 100%;
  }
</style>