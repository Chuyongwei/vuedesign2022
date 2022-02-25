<template>
  <div>
    <div id="head" style="text-align: center" >
      <font size="6" @click="Tocomplete">{{ user }}用户界面</font
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
  name: "home1",
  data() {
    return {
      user: "",
    };
  },
  components: {
    Footer,
  },
  mounted() {
    this.user = this.$store.state.user;
    console.log(this.user);
    if (this.$store.state.user == null) this.$router.push({ path: "/" });
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ path: "/" });
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
  background: rgba(155, 126, 235, 0.219);
}

#content {
  /* position: relative; */
  height: calc(86vh);
  /* bottom: 60px; */
  background: white;
  overflow-y: auto;
}
</style>