<template>
  <div id="detail">
    <div id="doctorTitle">
      <div><h4>里一个我不服</h4></div>
      <div>周期： <span>回答说客家话</span></div>
    </div>
    <div id="doctorContent">
      <p>nihao</p>
    </div>
    <div id=""></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data(){
      return{
          name:"",
          doctor_id: ""
      }
  },
  mounted(){
    console.log(this.$route.params.id);
    this.doctor_id = this.$route.params.id
  },
  methods:{

  }
};
</script>


<style lang="scss" scoped>
#doctorTitle{
  background: red;
  // height: 60px;
}
</style>