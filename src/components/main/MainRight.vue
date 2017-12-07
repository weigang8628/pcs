<template>
  <div>
    <!--主体右侧部分-->
    <div class="rg-amend" :style="right_bg_h"  >
      <div class="demo" >
        <hr/>
       <!-- index: {{centerindex}} key:{{rigthShowUi}}
       {{currentcomponent}} -->
          <div v-if="rigthShow" >
           
            {{Object.keys(rigthShow)[0]}}

            <!-- Imgs组件 -->
            <div v-if="rigthShowUi=='imgs'">
              <!-- {{currentcomponent[rigthShowUi]}} -->

              <div class="skeletonList">
                <span class="skeletonName">图片宽度：</span>
                <span >
                              

                  <Input-number :max="100" :min="0" @input="ss" :value="currentcomponent[rigthShowUi].style.width" ></Input-number>              
                </span>
                <span class="skeletonCue">(单位：% 1~100)</span>
              </div>
              <div class="skeletonList">
                <span class="skeletonName">图片高度：</span>
                <span >
                  <Input-number :max="100" :min="0"  :value="currentcomponent[rigthShowUi].style.height" ></Input-number>              
                </span>
                <span class="skeletonCue"></span>
              </div>
              <div class="skeletonList">
                <span class="skeletonName">上边间距：</span>
                <span >
                  <Input-number :max="100" :min="0"  :value="currentcomponent[rigthShowUi].style.padding" ></Input-number>              
                </span>
                <span class="skeletonCue">(1~100)</span>
              </div>
              <div class="skeletonList">
                <span class="skeletonName">背景颜色：</span>
                <span >
                  <color-picker v-model="currentcomponent[rigthShowUi].style.backgroundColor" :colors="colors" />
                </span>
                <span >
                  <i-input class="resetInput "  :value="currentcomponent[rigthShowUi].style.backgroundColor" > </i-input>
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

            <!-- Imgs组件 -->
            <div v-else-if="rigthShowUi=='texts'">
              
              <!-- {{currentcomponent[rigthShowUi]}} -->
              <div class="skeletonList">
                <span class="skeletonName">文字大小：</span>
                <span >
                  <Input-number :max="100" :min="0"  :value="currentcomponent[rigthShowUi].style.fontSize" ></Input-number>              
                </span>
                <span class="skeletonCue">px (1~100)</span>
              </div>
              <div class="skeletonList">
                <span class="skeletonName">文字颜色：</span>
                <span >
                  <color-picker :value="currentcomponent[rigthShowUi].style.color" :colors="colors" />
                </span>
                <span >
                  <i-input class="resetInput "  :value="currentcomponent[rigthShowUi].style.color" > </i-input>
                </span>
              </div>
              <div class="skeletonList">
                <span class="skeletonName">文字内容：</span>
                <span >
                  <i-input style="width:144px" :value="currentcomponent[rigthShowUi].text" ></i-input>              
                </span>
                
              </div>



            </div> 

          </div>
          <!-- <div v-else>
            bbbb
          </div> -->
      
      </div>
      
      <!-- <div class="skeletonList">
        <span class="skeletonName">图片宽度：</span>
        <span >
          <i-input class="resetInput " @on-focus="inputFocus($event)" data-id="skeletonOnlyImgWidth" v-model="isLog.width" > </i-input>
        </span>
        <span class="skeletonCue">(1~100)</span>
      </div>
      <div class="skeletonList">
        <span class="skeletonName">图片高度：</span>
        <span>
          <i-input class="resetInput" on-focus="inputFocus" id="skeletonOnlyImgHeight" v-model="isLog.height"></i-input>
        </span>
        <span class="skeletonCue"></span>
      </div>
      <div class="skeletonList">
        <span class="skeletonName">上边间距：</span>
        <span >
          
          <i-input class="resetInput valueInput  " on-focus="inputFocus"  id="skeletonOnlyImgMarginTop" v-model="isLog.marginTop"></i-input>
        </span>
        <span class="skeletonCue">(1~100)</span>
      </div>
      <div class="skeletonList">
        <span class="skeletonName">背景颜色：</span>
        <span >
          
          <color-picker v-model="bgcolor" />
        </span>
        <span >
          <i-input class="resetInput " id="skeletonOnlyImgWidth" v-model="isLog.backgroundColor" > </i-input>
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
      </div> -->
    </div>
  </div>
</template>

<script>
var that;

export default {
  props: ["isLog", "currentcomponent", "rigthShow", "rigthShowUi","centerindex"],
  data() {
    return {
      bgcolor:'', //背景颜色
      modal_link: false, //弹出层_链接
      modal_img: false, //弹出层_图片
      button_img: "靠左",
      select_link: "",
      appname: "",
      colors:['#f00','green','blue'],
      //页面背景图片
      right_bg_h: {
        height: 700 + "px"
      }
    };
  },
  
  methods: {
    ok() {
      this.$Message.info("点击了确定");
    },
    ss(){
      this.$emit("imgwFn", this.currentcomponent[this.rigthShowUi].style.width);
    },
    inputFocus(e) {
      //debugger
      //修改文本框的值
      function inputvalue(obj) {
        // debugger
        var getinputvalue = obj.inputvalue;
        var min = obj.min;
        var max = obj.max;
        e.target.onkeydown = function(ev) {
          var ev = ev || window.event;
          if (ev.keyCode == "40") {
            getinputvalue--;
            if (getinputvalue <= min) {
              getinputvalue = min;
            }
          }
          if (ev.keyCode == "38") {
            getinputvalue++;
            if (getinputvalue >= max) {
              getinputvalue = max;
            }
          }
          //console.log(id.id)//获取id名字
          //判断添加什么类型的单位
          that.isLog.width = getinputvalue + "%"; //宽度
        };
      }
      // debugger
      inputvalue({
        inputvalue: parseInt(this.isLog.width),
        min: 0,
        max: 100
      });
    }
  },
  updated() {
    this.$emit("isLogFn", this.isLog);
   
   
   
  },
  created() {
  },
  watch: {
    aa() {
      console.log("24332")
    }
  }
};
</script>

<style scoped>
.rg-amend {
  width: 333px;
  right: -333px;
  margin-left: -333px;
  position: relative;
  float: left;
  color: #666666;
  font-size: 14px;
  height: 100%;
  background-color: #f6f6f6;
  box-sizing: border-box;
  overflow-x: auto;
  padding-left: 20px;
  overflow-y: scroll;
  background-color: #f6f6f6;
  box-shadow: 1px -5px 8px #c6c6c6;
  padding-top: 20px;
}

#skeletonBody {
  position: absolute;
  top: 55px;
  right: 0;
  width: 340px;
  color: #666666;
  font-size: 16px;
  height: 600px;
  background-color: #f6f6f6;
}
#skeletonBody_con {
  position: absolute;
  width: 320px;
  height: 100%;
  overflow: hidden;
}
#skeletonBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 340px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-left: 10px;
}
.resetInput {
  border: none;
  background: white;
  width: 80px;
}
.skeletonList {
  min-height: 42px;
  line-height: 42px;
}
.skeletonName {
  font-size: 16px;
  /* font-weight: bold; */
  margin: 0 6px 0;
}
/* .valueInput {
  text-align: center;
  border-radius: 6px;
  border: 1px solid #dedede;
  height: 24px;
} */
.miniInput {
  width: 40px;
}
.alignInput {
  width: 20px;
  padding: 0 6px;
  font-size: 14px;
}

.mL50 {
  margin-left: 50px;
}
.mL5 {
  margin-left: 10px;
}
.marginL20 {
  margin-left: 20px;
}
.mR5 {
  margin-right: 5px;
}
.mR10 {
  margin-right: 10px;
}
.skeletonCue {
  font-size: 14px;
  font-weight: normal;
  color: darkorange;
  margin-left: 5px;
}
.fileInput {
  width: 200px;
  border: none;
}
#skeletonBox input {
  outline: none;
  cursor: pointer;
}
.skeletonList select {
  border: solid 1px #dedede;
  border-radius: 6px;
  height: 24px;
  min-width: 40px;
  text-align: center;
  outline: none;
  box-sizing: border-box;
  padding-left: 10px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  /* background: url("../img/arrow.png") no-repeat scroll right center white; */
  padding-right: 14px;
}
.skeletonFontWeight {
  font-weight: bold;
  cursor: pointer;
}
.skeletonFontItalic {
  font-style: italic;
  font-family: "Times New Roman";
  cursor: pointer;
}
.skeletonFontUnderline {
  text-decoration: underline;
  cursor: pointer;
}

.skeletonList .linkTopage {
  width: 120px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #dedede;
  height: 24px;
  cursor: pointer;
  background: white;
}
.linkTopageContent {
  display: inline-block;
  height: 24px;
  margin-left: 0px;
  color: #fe923d;
  border: 0 none;
  outline-style: none;
  background-color: #f6f6f6;
}

.fontClassInline_Block {
  display: inline-block;
  height: 20px;
  width: 20px;
  line-height: 20px;
  text-align: center;
  padding: 6px;
  margin: 0 2px;
}
.fontClassInline_Block2 {
  width: 30px;
  height: 20px;
  padding: 6px;
  text-align: center;
  line-height: 20px;
  display: inline-block;
  cursor: pointer;
}
.fontClassInline_Block3 {
  display: inline-block;
  width: 60px;
  height: 20px;
  padding: 6px;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
}
.selectFontClassBGCAndColor {
  background: #2cb9fe;
  color: #ffffff;
  border-radius: 6px;
}

.pxInput {
  position: relative;
}
.pxInput::before {
  display: block;
  position: absolute;
  content: "px";
  right: 10px;
  top: -12px;
  width: 24px;
  height: 24px;
  font-size: 14px;
}
.bfbInput {
  position: relative;
}

.bfbInput::before {
  display: block;
  position: absolute;
  content: "%";
  right: 10px;
  top: -10px;
  width: 24px;
  height: 24px;
  font-size: 14px;
}
.captionInput {
  position: relative;
}
.captionInput::before {
  display: block;
  position: absolute;
  content: "px";
  right: 10px;
  top: 0px;
  width: 24px;
  height: 24px;
  font-size: 14px;
}
.resetTextarea {
  outline: none;
  font-size: 14px;
  border-radius: 6px;
  background: white;
  resize: none;
  line-height: 1.6em;
  color: #1e1e1e;
}
#skeletonNavFontWeight,
#skeletonNavFontItalic,
#skeletonNavFontUnderLine,
#skeletonNavFontChangeColor,
#skeletonNavFontLeft,
#skeletonNavFontCenter,
#skeletonNavFontRight {
  cursor: pointer;
}
.bgcBlue {
  background: #2cb9fe;
  color: white;
}
.checkBoxInput {
  width: 18px;
  height: 18px;
  vertical-align: middle;
}
.display-block {
  display: block;
}
.display_inline_block {
  display: inline-block;
  vertical-align: middle;
}
.colorInput {
  width: 70px;
  font-size: 14px;
}
/*#skeletonBox img{*/
/*vertical-align: middle;*/
/*}*/
.textareaSpan {
  vertical-align: top;
}
.colorShowBox {
  width: 20px;
  height: 20px;
  background: white;
}

.homeFooter_font {
  width: 30px;
}

#skeletonBtnValue {
  border: 1px solid #dedede;
  border-radius: 6px;
  padding: 4px 10px;
}

.spanBorder1 {
  border: 1px solid #dedede;
  font-size: 10px;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.search_position.checkes {
  background-color: #64e0fd;
  color: white;
}

/* iview */
.ivu-input {
  text-align: center;
}
.ivu-btn-ghost {
  background-color: #fff;
}
</style>
