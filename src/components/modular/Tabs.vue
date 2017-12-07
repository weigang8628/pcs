<template>
  <div id="app">
 <ul>  
  <li @click="toggle($index ,tab.view)" v-for="tab in tabs" :class="{active:active==$index}">
    {{tab.type}}  
   </li> 
 </ul> 
 <component :is="currentView"></component>
</div>
</template>

<script>
//遍历接收到的isLog数据
// var that="";
// function a() {
  
// }
export default {
  props: {isLog:Object},
  data () {
    return {
      images_boxstyle:
      {
        "textAlign": "center",
        "paddingTop":"20px",
        "backgroundColor":"#ccc",
      },
      images_imgstyle:{
      }
    }
  },
  created(){
    
    Object.keys(this.isLog).forEach(element => {
      this.images_imgstyle[element] = this.isLog[element];
      //console.log(element+":"+this.isLog[element]);
    });
  },
  updated(){
   
    Object.keys(this.isLog).forEach(element => {
      this.images_imgstyle[element] = this.isLog[element];
      //console.log(element+":"+this.isLog[element]);
    });
    
  }
}
</script>

<style scoped>
  
  /* 图片组件图片的样式 */
.imges img {
  width: 100%;
  
}
</style>
