<template>
  <div id="app">
    <router-view/>
    <!-- 头部 -->
    <SelectTpl v-show="xs" :xs="xs" @isxs="isxsFn" @muban="muban" :newuis="newuis"></SelectTpl>
    <Top @isshowxxkFn="isshowxxkFn" @isxs="isxsFn"></Top><!--  -->
    <Home :isshowxxk="isshowxxk" :tpljson="tpljson" @newuisFn="newuisFn"></Home>
  </div>
</template>

<script>

import Home from "./components/Home.vue";
import Top from "./components/main/MainTop.vue";
import SelectTpl from "./components/main/SelectTpl.vue";
export default {
  name: "app",
  data() {
    return {
      xs:'',
      isshowxxk:'',
      tpljson:{},
      newuis:[],
    }
  },
  methods:{
    isshowxxkFn(data) {
      this.isshowxxk = data;
    },
    isxsFn(data){
      this.xs=data
    },
    muban(data){
     // console.log(data)
      this.tpljson=data
    },
    newuisFn(data){
      this.newuis = data;
    }
  },
  components: {
    Top,
    Home,
    SelectTpl,
  }
  
}
</script>

<style scoped>

</style>
