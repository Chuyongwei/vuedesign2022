<template>
  <div id="medical">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="科室">
              <span>{{ props.row.departmentname }}</span>
            </el-form-item>
            <el-form-item label="医生">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="症状">
              <span>{{ props.row.symptoms }}</span>
            </el-form-item>
            <el-form-item label="处方" label-width="40px">
              <div style="">
                {{ props.row.prescription }}
              </div>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="病历 ID" prop="medicalid"> </el-table-column>
      <el-table-column label="科室" prop="departmentname"> </el-table-column>
      <el-table-column label="日期" prop="date"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "MedicalTable",
  mounted() {
    let thisdoc = this;
    setTimeout(function () {
      thisdoc.patient = thisdoc.$store.state.patient;
      console.log("跟踪里的信息", thisdoc.patient);
      if (!thisdoc.patient) {
        alert("请创建个人信息");
        thisdoc.$router.push("/home/inform");
      }
      thisdoc.getList();
    }, 1000);
  },
  data() {
    return {
      tableData: [
      ],
      patient: {},
    };
  },
  methods: {
    getList() {
      console.log("申请", this.patient);
      // this.$axios.post("/user/checkmedical", this.patient).then((data) => {
      //   console.log("获取到的信息", data);
      //   this.patientData = data;
      // });
      this.$axios.post("/user/checkmedical", this.patient).then((data) => {
        console.log("病历", data);
        this.tableData = data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#medical {
  width: 95%;
  padding: 2%;
  // background: #ff0;
}
.table-expand {
  font-size: 0;
  // background: #ff0;
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