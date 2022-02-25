<template>
  <div id="doctor">
    <div class="left">
      <div
        class="classify"
        v-for="l in classtify"
        :key="l.index+''"
        @click="findeclass(l.index)"
      >
        <font size="6px">{{ l.name }}</font>
      </div>
    </div>
    <div class="items">
      <div v-for="l in list" class="item" :key="l.index+''">
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
      ],
    };
  },
  // TODO 注入数据
  mounted() {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        index: i,
        name: "张三",
        department: "吃饭",
        position: "老大",
        introduce: "曾经是一个好吃懒做的人，后来发奋学习成为了一名大神",
      });
      
      this.classtify.push({
        index:i,
        name:"呼吸科"
      })
    }
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