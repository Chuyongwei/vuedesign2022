<template>
<div id="app">
<router-view ></router-view>
<!-- <conte></conte> -->
<!-- <home></home> -->
</div>
</template>

<script>
import Navication  from './pages/Navication.vue'
import conte from './layouts/W-Conte'
  export default {
  components: { conte, Navication },
    
  }
</script>

<style scoped>
#app{
  background: #4b9b7d;
  height: 100%;
  /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0; */
}
</style>