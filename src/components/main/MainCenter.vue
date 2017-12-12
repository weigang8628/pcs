<template>
  <div>
    <!-- 手机显示屏 -->
      <div class="muddle-phone" >
        <!-- 手机侧边栏 -->
        <div class="side_bar_wrap">
          <div class="side_bar_box">
            <div class="side_bar">
              <div class="side_bar_content">
                <div class="side_bar_top" >
                  <h4>组件</h4>
                </div>
                <div class="side_bar_bottom ui-sortable">
                  <Row class="side_bar_bottom_padding" v-for="(items,index) in allcomponents" :key="index">
                      <Col span="18" v-for="(item,index) in items" :key="index">{{item.title}}</Col>
                      <Col span="6"><input type="checkbox" name="" id="" value="" checked="checked"></Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="muddle-phone-box" > 
          <!--话筒-->
          <span class="telephone-receiver"></span>
          <!--显示屏-->
          <div class="screen_box" >
            <div class="screen tuozhuailianjie ui-sortable" id="right" :style="{backgroundColor:pagebgcolor.backgroundColor}">
              <div class="first_1" style="display: block;" data-xcxmc="" data-color="#000000" draggable="false">
                <div :class="index==currentactive ? 'phone-mkbox phoneactive showclose':'phone-mkbox' " v-for="(item,index,key) in allcomponents" :key="index" style="background-color: #f5e9bc;   position: relative;">
                  <div @click="showXx($event,index)">
                      <!-- 单张图片 -->
                      <div class="componenttexts" v-if="Object.keys(item)[0]=='imgs'">
                        <div :style="{marginTop:item.imgs.style.marginTop+'px', backgroundColor:item.imgs.style.backgroundColor,textAlign:item.imgs.style.textAlign}">
                          <img :style="{width:item.imgs.style.width+'%', height:item.imgs.style.height+'px'}" :src="item.imgs.url" alt="">
                        </div>
                      </div>
                      <!-- 文本组件 -->
                      <div class="componenttexts" v-if="Object.keys(item)[0]=='texts'">
                        <div> {{item.texts.text}} </div>
                      </div>
                  </div> 
                   <div class="del" @click="delcomponent(item,index)" style="position:absolute; right:0px; top:-24px; background-color:#f00; width:28px; color:#fff; text-align:center; z-index:100">
                     X
                   </div>
               </div>
               <!-- json模板 -->
              <div v-html="tpljson.html">
                <div>{{tpljson.html}}</div>
              </div>
              </div>
              <div class="h"></div>
            </div>
            <!-- 底部工具栏 -->
            <div class="footer_tab" >
              <div class="footer_tab" datatype="bottom_list">
                <ul class="homeFooter" :style="{ backgroundColor: '#ccc',borderTop:'1px solid yellow'}">
                  <li class="footer_list" :style="{ width : 100 / foot.toolBars.length + '%'}" @click="setFooterBar" v-for="(item,index) in foot.toolBars" :key="index">
                    <img :style="{width:foot.toolbarStyle.imgSize+'px',height:foot.toolbarStyle.imgSize+'px',marginTop:4+'px'}" :src="item.style.defimg" data-default_src="item.style.defimg" data-select_src="item.style.selimg">
                    <p :style="{fontSize:foot.toolbarStyle.fontSize+'px', color:'#ff0000' }">{{item.title}}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props: [
    "allcomponents",
    "centerShow",
    "zjitems",
    "tpljson",
    "pagevalue",
    "pagebgcolor",
    "foot"
  ],
  data() {
    return {
      lsdatasbak: [],
      currentcomponent: [],
      isShowAttribute: false,
      currentclose: "",
      currentactive: "false" //默认不出现选中效果
    };
  },
  created() {
    this.tpldata = this.tpljson;
  },
  updated() {},
  components: {},
  methods: {
    RightAttribute() {
      this.isShowAttribute = true;
    },
    //点击前数据到传到右侧
    showXx(e, index) {
      this.currentcomponent = this.allcomponents[index]; //当前的组件的数据，点击左侧的时候触发
      this.$emit("currentcomponentFn", this.currentcomponent); //传递数据到-app-right
      this.$emit("centerindexFn", index);
      this.currentactive = index; //判断选中
      this.currentclose = true;
    },
    //删除组件
    delcomponent(index) {
      this.allcomponents.splice(index, 1);
      if (this.allcomponents.length == 0) {
        this.currentclose = false;
        alert("最后一条数据了，确定要删除吗？");
      }
    },
    //设置底部工具栏
    setFooterBar(index) {
      alert("索引" + index);
    }
  }
};
</script>

<style scoped>
.phone_setBox {
  width: 100%;
  float: left;
  position: relative;
}

.phone-mkbox {
  margin-left: 2px;
  margin-right: 2px;
}
.phoneactive {
  border: 0px dashed red;
  box-shadow: 0px 0px 2px red;
  border: 1px solid #f00;
}
.phone-mkbox .del {
  display: none;
}
.showclose .del {
  display: block;
}
.muddle-phone {
  width: 420px;
  height: 583px;
  margin: 12px auto;
  position: relative;
  padding-left: 100px;
}
.muddle-phone-box {
  background-color: #f4f4f4;
  border-radius: 32px;
  padding-bottom: 30px;
}
.telephone-receiver {
  display: inline-block;
  width: 77px;
  height: 9px;
  border-radius: 5px;
  border: 1px solid #8d8a8a;
  margin-left: 120px;
}
.screen_box {
  width: 320px;
  height: 530px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 2px;
  border-top: 2px solid #8d8a8a;
  border-bottom: 2px solid #8d8a8a;
  position: relative;
  overflow: hidden;
}

.screen {
  width: 334px;
  height: 529px;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 2px;
  position: relative;
}

/* 手机侧边栏 */

@media screen and (max-width: 1300px) {
  .side_bar_wrap {
    width: 200px !important;
  }
  .side_bar_content {
    width: 200px !important;
  }
}
.side_bar_wrap {
  width: 105px;
  height: 500px;
  background-color: #f6f6f6;
  position: absolute;
  left: -330px;
  top: 30px;
  margin-left: 324px;
}
.side_bar_box {
  width: 100%;
  height: 100%;
  position: relative;
}
.side_bar {
  position: absolute;
  width: 90%;
  height: 100%;
  overflow: hidden;
}
.side_bar_content {
  width: 230px;
  height: 100%;
  position: absolute;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0;
}
.side_bar_top {
  width: 100%;
  height: 40px;
  background-color: #f6f6f6;
  padding: 0;
  line-height: 40px;
  border-bottom: 1px solid #efbf1f;
  margin-bottom: 15px;
}
.side_bar_top > h4 {
  margin: 0;
  margin-left: 20px;
  padding: 0;
  color: #efbf1f;
}
.side_bar_bottom {
  width: 100%;
  font-size: 14px;
}
.side_bar_bottom_padding {
  padding-left: 10px;
}
.side_bar_bottom > div {
  width: 50%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #dcdcdc;
  cursor: pointer;
}
.side_bar_bottom > div > p {
  float: left;
  margin-left: 10px;
  font-size: 14px;
}
.side_bar_bottom > div > input {
  float: right;
  margin-right: 10px;
  margin-top: 15px;
}
@media screen and (max-width: 1200px) {
  .side_bar_bottom > div {
    width: 60%;
  }
}

.footer_tab {
  position: absolute;
  width: 100%;
  bottom: 0px;
}
.bottom_list {
}
.footer_tab .homeFooter {
  overflow: hidden;
}
.footer_tab .footer_list {
  width: 25%;
  float: left;
  text-align: center;
}
.h {
  height: 57px;
  width: 100%;
  display: block !important;
}

.componentimgs {
}
.componentimgs img {
  border: 0;
  vertical-align: top;
}
</style>
