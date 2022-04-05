<template >
  <div id="inform">
    <el-form ref="form" :model="form" label-width="80px">
      <el-upload
        class="avatar-uploader"
        action="/api/common/upload/"
        :on-change="handleChange"
        :data="imageData"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
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
      imageUrl: "",
      imageData:{},
      form: {
        uname: "",
        sex: "",
        brithday: "",
        address: "",
        health: "",
        uid: this.$store.state.uid,
      },
    };
  },
  mounted() {
    console.log("信息界面创建", this.$store.state.user);
    this.$axios
      .post("/user/findpatientbyname", this.$store.state.user)
      .then((e) => {
        if (e.length) {
          this.form = e[0];
          this.imageData = {id:this.$store.state.user.uid}
          console.log("图片id",this.imageData);
        }
        if (this.form.imgId !== ""&&this.form.imgId!=null) {
          this.imageUrl = "/api/common/printImg/" + this.form.imgId;
        }
      });
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      this.form.brithday = this.dateFormat(this.form.brithday);
      this.$axios.post("/user/addpatient", this.form).then((e) => {
        console.log(e);
        if (e) {
          alert("创建成功");
        } else {
          alert("失败");
        }
        this.$store.dispatch("setPatient");
      });
    },
    handleAvatarSuccess(res, file) {
      console.log("handleAvatarSuccess");
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    dateFormat(dateData) {
      var date = new Date(dateData);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      const time = y + "-" + m + "-" + d;
      return time;
    },
    handleChange(file, fileList) {
      console.log(file,fileList);
      // this.fileList = fileList.slice(-3);
    },
  },
};
</script>
<style scoped>
.avatar-uploader {
  margin: 8px auto;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  width: 115px;
  cursor: pointer;
  position: relative;
  /* overflow: hidden; */
}
.avatar-uploader:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 115px;
  height: 115px;
  line-height: 115px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>