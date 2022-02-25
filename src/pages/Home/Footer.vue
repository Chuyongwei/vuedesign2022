<template>
  <div id="foot">
    <div
      v-for="i in items"
      :key="i.index"
      class="b-button"
      @click="redirectto(i.redirect)"
    >
      <font size="5" color="red">{{ i.name }}</font>
    </div>
  </div>
</template>
<script>
export default {
  name: "foot",
  data() {
    return {
      items: [
        {
          index: 1,
          redirect: "/home/doctor",
          name: "预约",
        },
        {
          index: 2,
          redirect: "/home/medical",
          name: "病历",
        },
        {
          index: 3,
          redirect: "/home/score",
          name: "预约记录",
        },
      ],
    };
  },
  methods: {
    redirectto(to){
      console.log(this.$route,to);
      if(this.$route.Path!==to){
        this.$router.push(to)
      }
    }
  },
};
</script>
<style scoped>
#foot {
  position: fixed;
  bottom: 0;
  height: 7%;
  width: 100%;
  padding-top: 5px;
  background: rgba(155, 126, 235, 0.219);
  
}
.b-button {
  
  float: left;
  background: blueviolet;
  border-radius: 9px;
  margin-top: 5px;
  margin-left: 40px;
}
</style>



