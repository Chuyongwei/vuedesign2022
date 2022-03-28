<template>
  <div id="doctor">
    <div class="left">
      <div
        class="classify"
        v-for="l in classtify"
        :key="l.departmentid + ''"
        @click="findeclass(l.departmentid)"
      >
        <font size="5px">{{ l.departmentname }}</font>
      </div>
    </div>
    <div class="items">
      <div v-for="l in listclass" class="item" :key="l.doctorid + ''">
        <div class="name">
          <div style="width:50px;height:50px;background:red;float:left">
            <img src="/api/common/printImg/9" alt="" style="width:100%;height:100%">
          </div>
          <font size="5">{{ l.name }}</font>
          <button class="edit" @click="subscribe(l.doctorid)" type="info">
            预约
          </button>
        </div>
        <div class="position">
          <font color="#fff000">{{ l.departmentname }}--{{ l.position }}</font>
        </div>
        <div>
          <p>{{ l.introduce }}</p>
        </div>
      </div>
    </div>
    <div class="subscribe" v-if="showsubscribe">
      <el-form width="90">
        <el-form-item label="日期">
          <el-input type="input"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "doctor",
  data() {
    return {
      list: [],
      listclass: [],
      classtify: [
        {
          departmentid: 0,
          departmentname: "全部医生",
        },
      ],
      showsubscribe:false
    };
  },
  // TODO 注入数据
  mounted() {
    this.$axios.get("/doctor/checkDeparment").then((e) => {
      let data = e.filter((e1) => e1.departmentid == 1);
      this.classtify.push(...data);
    });

    this.$axios.get("/doctor/check").then((e) => {
      this.list = e;
      this.listclass = this.list;
    });
  },
  methods: {
    findeclass(departmentid) {
      if(departmentid!==0)
      this.listclass = this.list.filter((e) => {
        return e.departmentid == departmentid;
      });
      else
      this.listclass= this.list
      // console.log(e);
    },
    // TODO 编写预约
    subscribe(doctorid) {
      console.log(doctorid);
      // let inform = null;
      this.$axios
        .post("/user/findpatientbyname", this.$store.state.user)
        .then((data) => {
          console.log("预约时获取病人的数据", data);
          if (data.length) {
            let inform = data[0];
            return inform;
          } else {
            alert("请创建个人信息");
            this.$router.push("/home/inform");
          }
        })
        .then((data) => {
          let json = { 
            doctorid,
            ...data
          };
          
          this.$axios.post("/user/subscribe", json).then((data) => {
            if(data==2) {
              // console.log("sdfa");
              alert("已经预约")
            }
            console.log(data);
          });
        });
    },
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
.subscribe{
  position: fixed;
  width: 70%;
  height: 40%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 40px;
}
</style>