<template>
  <div class="tou_box" style="border: 1px dashed red;">
    <div class="imges" datatype="img" :style="images_boxstyle" >
     
      <img  :style="images_imgstyle" src="http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/7768420171027161830531.png" alt="">
     {{isLog}}{{images_imgstyle}}
      <br/>发打发是单个打发打发是单个 打发打发是单个打发打发是单个打发打发是单个打发打发是单个
    </div>
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
