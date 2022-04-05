<template>
  <div>
    <div id="head" style="text-align: center" >
      <font size="6" @click="Tocomplete">{{ user.username }}用户界面</font
      ><span style="float: right" @click="logout">退出</span>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/pages/Home/Footer";
export default {
  name: "home",
  data() {
    return {
      user: {
        uid:0,

      },
    };
  },
  components: {
    Footer,
  },
  mounted() {
    this.user = this.$store.state.user
    console.log("sdaf",this.user);
    // this.user.uid = this.$store.state.uid;
    // console.log("home的",this.$store.state.uid,this.user);
    // if (this.user.uid===0) this.$router.push({ path: "/" });
    // else {
    //   console.log(this.user);
    //   this.$axios.post("/user/checkUserBy",this.user).then(e=>{
    //     this.user = e.data
    //   this.$store.commit("getuser",this.user)
    //   })
    // }
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ path: "/login" });
    },
    Tocomplete(){
      this.$router.push({ path: "/home/inform" });
    }
  },
};
</script>

<style scoped>
#head {
  /* position: fixed; */
  width: 100%;
  /* top: 0px; */
  height: 6%;
  /* padding: 5px; */
  background: #4b9b7c;
}

#content {
  /* position: relative; */
  height: calc(86vh);
  /* bottom: 60px; */
  background: white;
  overflow-y: auto;
}
</style>