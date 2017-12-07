<template>
  <div>
    <div class="skeletonList">
      <span class="skeletonName">图片宽度：</span>
      <span >
        <Input-number :max="100" :min="0"  v-model="currentcomponent[rigthShowUi].style.width" ></Input-number>              
      </span>
      <span class="skeletonCue">(单位：% 1~100)</span>
    </div>
    <div class="skeletonList">
      <span class="skeletonName">图片高度：</span>
      <span >
        <Input-number :max="100" :min="0"  v-model="currentcomponent[rigthShowUi].style.height" ></Input-number>              
      </span>
      <span class="skeletonCue"></span>
    </div>
    <div class="skeletonList">
      <span class="skeletonName">上边间距：</span>
      <span >
        <Input-number :max="100" :min="0"  v-model="currentcomponent[rigthShowUi].style.padding" ></Input-number>              
      </span>
      <span class="skeletonCue">(1~100)</span>
    </div>
    <div class="skeletonList">
      <span class="skeletonName">背景颜色：</span>
      <span >
        
        <color-picker v-model="currentcomponent[rigthShowUi].style.backgroundColor" :colors="colors" />
      </span>
      <span >
        <i-input class="resetInput "  v-model="currentcomponent[rigthShowUi].style.backgroundColor" > </i-input>
      </span>
    </div>
    <div class="skeletonList">
      <span class="skeletonName">选择图片：</span>
      <Button  type="ghost" @click="modal_img = true" id="skeletonOnlyImgChoose" >选择图片</Button>
      <span class="skeletonCue">点击选择图片</span>
        <modal
            v-model="modal_img"
            title="请选择图片"
            @on-ok="ok"
            >
            <p>图片a</p>
            <p>图片b</p>
            <p>图片c</p>
        </modal>
        
      </div>
      <div class="skeletonList">
        <span class="skeletonName">图片对齐：</span>
        <radio-group v-model="button_img" type="button">
            <radio label="靠左"></radio>
            <radio label="居中"></radio>
            <radio label="靠右"></radio>
        </radio-group>
      </div>
      <div class="skeletonList">
        <span class="skeletonName">链接页面：</span>
        <span>
          <Select v-model="select_link" style="width:170px;">
                <Option value="index">首页</Option>
                <Option value="list">列表页</Option>
                <Option value="shop">购物车</Option>
                <Option value="us">我的</Option>
            </Select>
        </span>
      </div>
  </div>
</template>
<script>

export default {
  props: ["isLog", "currentcomponent", "rigthShow", "rigthShowUi"],
  data () {
    return {
      
    }
  },
  created(){
   
  }
}
</script>

<style scoped>
  
</style>
