<template>
  <div id="app">
    <router-view/>
    <!-- 头部 -->
    <SelectTpl v-show="xs" :xs="xs" @isxs="isxs"></SelectTpl>
    <Top @isshowxxkFn="isshowxxkFn" @isxs="isxs"></Top><!--  -->
    <Home :isshowxxk="isshowxxk"></Home>
  </div>
</template>

<script>
import Top from "./components/main/Top.vue";
import Home from "./components/Home.vue";
import SelectTpl from "./components/main/SelectTpl.vue";
export default {
  name: "app",
  data() {
    return {
      xs:'',
      isshowxxk:'',
    }
  },
  methods:{
    isshowxxkFn(data) {
      this.isshowxxk = data;
    },
    isxs(data){
      this.xs=data
    }
  },
  components: {
    Top,
    Home,
    SelectTpl,
  },
}
</script>

<style scoped>
</style>
