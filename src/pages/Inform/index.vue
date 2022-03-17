<template >
  <div id="inform">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.uname"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.sex" placeholder="请选择性别">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="2000-06-02"
            v-model="form.brithday"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Inform",
  data() {
    return {
      form: {
        uname: "",
        sex: "",
        brithday: "",
        address: "",
        health: "",
        uid:this.$store.state.uid
      },
    };
  },
  mounted(){
    
    console.log("信息界面创建",this.$store.state.user);
    this.$axios.post("/user/findpatientbyname",this.$store.state.user).then((e)=>{
      if(e.length){
        this.form = e[0]
      }
    })
    
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      this.form.brithday = this.dateFormat(this.form.brithday)
      this.$axios.post("/user/addpatient",this.form).then(e=>{
        console.log(e);
        if(e){
          alert("创建成功")
        }else{
          alert("失败")
        }
        this.$store.dispatch("setPatient")
      })
    },
    dateFormat(dateData) {
      var date = new Date(dateData)
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      var d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      const time = y + '-' + m + '-' + d
      return time
    }
  },
};
</script>
<style scoped>
#inform {
  padding: 10px 9px;
  width: 95%;
}
</style>