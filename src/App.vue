<template>
<div id="app">
<router-view ></router-view>
<!-- <conte></conte> -->
<!-- <home></home> -->
</div>
</template>

<script>
import Home from './pages/Home'
import conte from './layouts/W-Conte'
  export default {
  components: { conte, Home },
    
  }
</script>

<style scoped>
#app{
  background: blue;
  
  /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0; */
}
</style>