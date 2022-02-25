<template>
  <div>
    <el-row>
      <el-col :offset="8" :span="10"
        ><h1 style="color: red">登录页面</h1></el-col
      >
    </el-row>
    <el-row>
      <el-col :offset="2" :span="5"><font size="4"> 用户名：</font> </el-col>
      <el-col :span="16">
        <el-input
          v-model="user.username"
          placeholder="请输入用户名"
          clearable
        ></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="2" :span="5"><font size="4"> 密码：</font> </el-col>
      <el-col :span="16">
        <el-input
          v-model="user.password"
          placeholder="请输入内容"
          @keyup.enter.native="handlogin"
          show-password
        ></el-input>
      </el-col>
    </el-row>
        <el-row v-if="!login">
      <el-col :offset="2" :span="5"><font size="4"> 确认密码：</font> </el-col>
      <el-col :span="16">
        <el-input
          v-model="user.password"
          placeholder="请输入内容"
          @keyup.enter.native="handlogin"
          show-password
        ></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="2" :span="20">
        <el-button
          type="primary"
          v-if="login"
          style="width: 100%"
          @click="handlogin"
          >登录</el-button
        >
        <el-button type="primary" v-else style="width: 100%" @click="handlogin"
          >注册</el-button
        >
        <el-button type="text" @click="login=!login">返回{{login?"注册页面":"登录页面"}}</el-button>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      login: true,
      showpass: true,
    };
  },
  mounted() {
    console.log(this.$store.state.user);
    if (this.$store.state.user != null)
      this.$router.push({ path: "/home/doctor" });
  },
  methods: {
    handlogin() {
      console.log(JSON.stringify(this.user));
      this.$axios.post("/user/login", this.user).then((e) => {
        console.log(e);
        this.$store.commit("loginin", e);
        this.$router.push({ path: "home" || "/" }); // 跳转
      });
    },
    
  },
};
</script>

<style lang="scss" scoped>
</style>