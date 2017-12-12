<template>
  <div>
    <div class="header" >
      <!--头部页面管理与组件切换-->
      <ul class="cut_tab">
        <li :class="isshowxxk?'active':''"  @click="PageManagement" >
          <span class="iconfont icon-yemianguanli"></span>&nbsp;页面管理</li>
        <li :class="isshowxxk?'':'active'" @click="ComponentLibrary">
          <span class="iconfont icon-zujianku"></span>&nbsp;组件库
          <span class="right"></span>
        </li>
      </ul>
      <!--头部中间部分-->
      <div class="middle-part">
        <ul>
          <li>
            <a href="#">
              <span class="iconfont icon-lishi"></span>&nbsp;首页
            </a>
          </li>
          <li>
            <a href="//shang.qq.com/wpa/qunwpa?idkey=160b4bcaba1f9b708eb19b31d892b50bbf344b8b2e46d462c1921b7b33294038">
              <span class="iconfont icon-kefu"></span>&nbsp;客服
            </a>
          </li>
          <li>
            <div style="cursor: pointer" onclick="gomyguanli('2c91a36a5fdd8c9a016000717f661a6f')">
              <span class="iconfont">
                <!-- <img style="width: 16px;height: 16px" src="/applet/img/htgl.png"> -->
              </span>&nbsp;后台管理
            </div>
          </li>
          <li @click="showtp">
            <a href="javascript:;">
              <span class="iconfont icon-moban"></span>&nbsp;模板
            </a>    
          </li>

        </ul>
      </div>
      <!--头部预览 保存 发布-->
      <div class="cont-right">
        <ul>
          <li id="keep">保存</li>
          <li class="generate" id="generate">
            <span class="iconfont icon-shengchengpingzheng"></span>生成</li>
          <li class="generate" id="xz">
            <span class="iconfont icon-shengchengpingzheng"></span>下载</li>
        </ul>
      </div>
    </div>
    <!-- 头部结束 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshowxxk:true,
      isshow:true,
    }
  },
  methods:{
    PageManagement(){
      this.isshowxxk=true;
      this.$emit('isshowxxkFn',!this.isshowxxk)//传递数据到-app-left显示隐藏
    },
    ComponentLibrary(){
      this.isshowxxk=false;
      this.$emit('isshowxxkFn',!this.isshowxxk)//传递数据到-app-left显示隐藏
    },
    showtp(){
      this.$emit('isxs',this.isshow)
    }
  }
}
</script>

<style scoped>
  .header {
    width: 100%;
    margin: 0 auto;
    height: 55px;
    line-height: 55px;
    background-color: #fff;
    color: #000;
    z-index: 999;
    box-shadow: 0 0 5px 0 #a5a5a5;
    margin-bottom: 5px;
}

.cut_tab {
    width: 300px;
    height: 55px;
    float: left;
    position: relative;
}

.cut_tab li {
    width: 150px;
    height: 55px;
    float: left;
    line-height: 55px;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
}

.active {
    color: #EFBF1F;
    border-bottom: 2px solid #efbf1f;
    height: 55px;
}

.active:before {
    content: '';
    display: block;
    position: absolute;
    border-style: solid;
    border-width: 10px;
    border-color: transparent;
    bottom: -1px;
    left: 73px;
    border-bottom-color: #EFBF1F;
    }

.middle-part {
    width: 40%;
    height: 100%;
    margin: 0 auto;
    float: left;
    text-align: center;
}

.middle-part ul li {
    float: left;
    width: 25%;
}

.middle-part ul li a {
    color: #404040;
    transition: color 1s;
}

.middle-part ul li a:hover{
	color:#EFBF1F;
}

.cont-right {
    width: 30%;
    float: right;
    height: 55px;
}

.cont-right li {
    float: left;
    width: 80px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    margin-top: 13px;
    margin-right: 17px;
    border-radius: 5px;
    color: #EFBF1F;
    border: 1px solid #EFBF1F;
    cursor: pointer;
}

.generate {
    background-color: #EFBF1F;
    color: #fff !important;
}
</style>
