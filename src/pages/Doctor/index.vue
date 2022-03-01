<template>
  <div id="doctor">
    <div class="left">
      <div
        class="classify"
        v-for="l in classtify"
        :key="l.departmentid+''"
        @click="findeclass(l.departmentid)"
      >
        <font size="5px">{{ l.departmentname }}</font>
      </div>
    </div>
    <div class="items">
      <div v-for="l in list" class="item" :key="l.doctorid+''">
        <div class="name">
          <font size="5">{{ l.name }}</font>
          <button class="edit" @click="subscribe(l.id)" type="info">预约</button>
        </div>
        <div class="position">
          <font color="#fff000">{{ l.department }}--{{ l.position }}</font>
        </div>
        <div>
          <p>{{ l.introduce }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "doctor",
  data() {
    return {
      list: [

      ],
      classtify: [
                {
          departmentid:0,
          departmentname: "全部医生"
        }
      ],
    };
  },
  // TODO 注入数据
  mounted() {
    this.$axios.get("/doctor/findDeparment").then(e=>{
      let data = e.filter(e1=>e1.departmentid==1)
      this.classtify.push(...data)
    })
    
    this.$axios.get("/doctor/check").then(e=>{
      this.list = e
    })

  },
  methods: {
    findeclass(e) {
      console.log(e);
    },
    // TODO 编写预约
    subscribe(id){
      console.log(id);
    }
  },
};
</script>

<style  scoped>
#doctor {
  height: 100%;
}
.item {
  /* height: 70px; */
  background: rgba(150, 6, 6, 0.397);
  padding: 9px;
  margin-top: 3px;
  border-radius: 9px;
}
.left {
  height: 100%;
  float: left;
  /* background: blue; */
  width: calc(30vw);
  overflow-y: auto;
}
.classify {
  margin: 7px 3px 0px 5px;
  height: 46px;
  background: rgba(114, 42, 173, 0.253);
  border-radius: 9px;
}
.items {
  float: left;
  width: calc(70vw);
  height: 100%;
  overflow-y: auto;
}
.edit {
  float: right;
  width: 68px;
  border-radius: 9px;
  /* background: yellow; */
}
</style>