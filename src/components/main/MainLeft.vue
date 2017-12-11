<template>
  <div class="left">

<!--主体左侧列表-->
    <div class="left-page" v-bind:style="left_bg_h">
      	<div class="nav-page">
				<div v-show="!isshowxxk">
					<div class="default">
						<span class="default-group">
							<i class="iconfont icon-wenjianjia"></i>&nbsp;默认组
						</span>
					</div>
					<ul class="home_page">
						<li v-for="(item,index) in allpage":key="index">
							<span class="page_title" ref="bianji" @click="leftnamec(index)">{{item.navigationBarTitleText}}</span>
							<div class="nature" ref="infobox">
								<span class="iconfont icon-lajitong"></span>
								<span class="iconfont icon-bianjiyemian" @click="write(index)"></span>
							</div>
							<div class="bianjiyemian" ref="bianjibox">
                <input type="text" ref="text" value="" on-fouce>
                <span class="u_srue" @click="sure(index)">确认</span>	
                <span class="u_del">取消</span>
              </div>
						</li>
					</ul>
				</div>

        <ul v-show="isshowxxk" id="left" class="gl-tab tuozhuailianjie" >
          <!--文本-->
          <li class="tuo_text" @click="alerttext($event,index)"  v-for="(items,index) in components" :key="index">
					 <div v-for="(item,index) in items" :key="index" >
							<span class="iconfont icon-wenben"></span>
							<br/>{{item.title}}
						</div>
					</li>
				
    
        </ul>
      </div>
			
    </div>


  </div>
</template>

<script>
export default {
  props: ["isshowxxk",'allpage'],
  data() {
    return {
     
      components: "",
      left_bg_h: {
        height: 700 + "px"
      },
			
    };
  },
  created() {
    //发起请求-获取组件名
    this.$ajax
      .get("../../components/components.json")
      .then(res => {
        this.components = res.data.uis;
        //console.log(this.components+"1212")
      })
      .catch(err => console.log(err));
  },
  meunted() {
    let cur = document.documentElement.clientHeight;
  //  console.log(cur);
  },
  methods: {
    alerttext(e, index) {


          // var sj = Math.random() * 100;
          // this.components[index].id = sj
          let componentsj = cloneObj(this.components)

          //深拷贝方法
          function cloneObj(obj) {
            var str, newobj = obj.constructor === Array ? [] : {};
            if (typeof obj !== 'object') {
              return;
            } else if (window.JSON) {
              str = JSON.stringify(obj), //系列化对象
                newobj = JSON.parse(str); //还原
            } else {
              for (var i in obj) {
                newobj[i] = typeof obj[i] === 'object' ?
                  cloneObj(obj[i]) : obj[i];
              }
            }
            return newobj;
          };



		this.$emit("LsData", componentsj[index]);
    
    },
		write(index){
			// const self=this;	
			this.$refs.infobox[index].style.display = 'none';
			this.$refs.bianjibox[index].style.display='block'
			console.log(index)
		},
		sure(index){ 
			let getMenuText = this.$refs.bianji[index].innerText;
			console.log(getMenuText)
			// getMenuText=this.$refs.text[index].value
			this.allpage[index].navigationBarTitleText= this.$refs.text[index].value
			console.log(this.$refs.text[index].value)
			this.$refs.infobox[index].style.display = 'inline';
			this.$refs.bianjibox[index].style.display='none';
			if(this.$refs.text[index].value!=''){
				getMenuText=this.$refs.text[index].value
			}else{
				getMenuText=this.items.navigationBarTitleText;
				console.log("获取不到item");
			}
			this.$refs.text[index].value='';
		},
		
		//点击左侧名字事件
		leftnamec(index){
			this.$emit("pageindexFn", index);
		}
		
  }
};
</script>

<style scoped>
/* 组件库 */
.gl-tab {
  width: 300px;
  overflow: hidden;
  background-color: #f8f8f8;
}

.gl-tab li {
  width: 33%;
  text-align: center;
  height: 95px;
  margin: 0px;
  float: left;
  color: #666;
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  cursor: pointer;
}

.gl-tab li span {
  display: inline-block;
  margin-top: 30%;
  font-size: 20px !important;
  margin-bottom: 5px;
}
.gl-tab li:nth-child(3n) {
  border-right: 0;
}

/* 页面管理 */
.left-page {
  text-align: left;
  height: 100%;
  left: -300px;
  width: 300px;
  float: left;
  margin-left: -100%;
  /* margin-left:300px; */
  position: relative;
}
.nav-page {
  position: relative;
  height: calc(100%);
  background-color: #f8f8f8;
  z-index: 100;
  border-top: none;
  vertical-align: top;
  box-shadow: 1px 5px 8px #c6c6c6;
}

.default {
  width: 100%;
  height: 42px;
  border-bottom: 1px solid #d6d6d6;
  webkit-transform: rotateZ(90deg);
}

.default::before {
  content: "";
  position: absolute;
  left: 11px;
  top: 16px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid #666;
  transition: all linear 0.3s;
}

.default span {
  font-size: 16px;
}

.default i {
  display: inline-block;
  margin: 0;
  padding: 0;
  float: none;
  font-size: 17px !important;
  margin-left: 26px;
  margin-top: 11px;
}

.funct {
  height: 100%;
  line-height: 42px;
  float: right;
  margin-right: 20px;
}

.funct span {
  display: inline-block;
  margin-left: 5px;
}

.default:hover .copyreader span {
  display: block;
  cursor: pointer;
}

.copyreader {
  display: inline;
}

.copyreader span {
  float: right;
  display: none;
  padding: 13px 10px 0 0;
  float: right;
}

.icon-bianjiyemian {
  font-size: 17px !important;
}

.revamp {
  position: absolute;
  bottom: 56px;
  width: 300px;
  padding: 12px 0;
  line-height: 35px;
  text-align: center;
  background-color: #fff;
  color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 999;
}

.tj_btn {
  display: inline-block;
  width: 40%;
  margin: 0 10px;
  cursor: pointer;
  letter-spacing: normal;
  border-radius: 4px;
  background-color: #efbf1f;
  cursor: pointer;
}

.tj_btn i {
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 16px;
  vertical-align: middle;
  text-indent: 0;
  text-decoration: none;
  text-align: center;
  /*z-index: 999;*/
  margin-top: -16px;
  margin-left: -4px;
}

.property_index {
  height: 39px;
  line-height: 40px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  text-indent: 2.5em;
  position: relative;
  cursor: pointer;
  margin-left: -20px;
}

.property_index:before {
  content: "";
  position: absolute;
  left: 20px;
  top: 16px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid #666;
  transition: all linear 0.3s;
}

.property_pro {
  height: 39px;
  line-height: 40px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  text-indent: 2.5em;
  position: relative;
  cursor: pointer;
}

.property_pro:before {
  content: "";
  position: absolute;
  left: 20px;
  top: 16px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid #666;
  transition: all linear 0.3s;
}

.stages {
  position: absolute;
  height: 60px;
  width: 100%;
  text-align: center;
  background: #fff;
  bottom: -2px;
}

.bgstg {
  margin: 13px auto;
  width: 150px;
  height: 35px;
  line-height: 35px;
  border-style: none;
  background: #efbf1f;
  border-radius: 5px;
  display: inline-block;
  color: #fff;
  cursor: pointer;
}

.del {
  position: absolute;
  right: -1px;
  top: -1px;
  width: 15px;
  height: 15px;
  line-height: 14px;
  font-size: 13px;
  border: 1px solid #37a1ec;
  border-radius: 2px;
  background-color: #fff;
  color: #37a1ec;
  cursor: pointer;
  text-align: center;
  z-index: 999;
  display: none;
}

.home_page {
  overflow: hidden;
  margin-top: -1px;
}

.home_page li {
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #efbf1f;
  position: relative;
}

.page_title {
  display: inline-block;
  width: 150px;
  height: 42px;
  margin-left: 23px;
}

.nature {
  display: inline;
}

.icon-lajitong {
  font-weight: bold;
}

.icon-bianjiyemian {
  font-weight: bold;
}

.nature span {
  float: right;
  margin-right: 10px;
}

.management {
  width: 100%;
  overflow: hidden;
  display: block;
  margin-left: -30px;
}

.managementse {
  width: 100%;
  overflow: hidden;
  display: block;
  margin-left: -30px;
}

.page_name {
  display: inline-block;
  width: 110px;
  text-align: right;
  margin-top: 10px;
  float: left;
}

#page_name {
  width: 140px;
  height: 14px;
  margin-left: 5px;
  margin-top: 10px;
  float: left;
  background-color: #f6f6f6;
  border: 1px solid #d3d3d3;
  text-indent: 6px;
}

.input {
  display: inline-block;
  border: 1px solid #ccc;
  background: #f6f6f6;
  height: 15px;
  font-size: 14px;
  line-height: 15px;
  padding: 6px;
  outline: 0;
  -webkit-user-select: text;
  color: inherit;
}

#page_title {
  width: 168px;
  height: 14px;
  margin-left: 5px;
  margin-top: 10px;
  float: left;
  background-color: #f6f6f6;
  border: 1px solid #d3d3d3;
  text-indent: 6px;
}

.management label {
  margin-top: 10px;
  display: inline-block;
  width: 100%;
}

.check {
  margin-top: 16px;
}

.question {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border: 1px solid red;
  color: red;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.backcolor {
  margin: 0;
  overflow: hidden;
  cursor: pointer;
  padding: 2px;
  display: inline-block;
  background: #eee;
  color: #333;
  vertical-align: middle;
  margin-left: -5px;
}

.spasert {
  position: relative;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
  width: 25px;
  height: 20px;
  border: solid 1px #222;
  margin-right: 5px;
  float: left;
  z-index: 0;
}

.xbj {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 20px;
  font-size: 23px;
  color: #d6d6d8;
}

.below {
  padding: 2px 0;
  height: 16px;
  line-height: 16px;
  float: left;
  font-size: 10px;
}

.bgc-title {
  display: inline-block;
  margin-left: 35px;
  margin-top: 10px;
}

.set_bgc {
  color: #efbf1f;
  cursor: pointer;
}

#cp3 {
  position: relative;
}

.activation:before {
  transform: rotateZ(90deg);
  -webkit-transform: rotateZ(90deg);
  -moz-transform: rotateZ(90deg);
  -ms-transform: rotateZ(90deg);
}

.property_box {
  display: none;
  width: 100%;
  height: 83px;
  position: relative;
}

.particulars {
  width: 286px;
  height: 53px;
  position: absolute;
  top: 16px;
  left: 20px;
  border-bottom: 1px solid #dcdcdc;
  text-align: center;
  line-break: 53px;
}

.component_style {
  width: 100%;
  height: 51px;
  border-bottom: 1px solid #d3d3d3;
}

.component_style span {
  display: inline-block;
  width: 96px;
  height: 51px;
  text-align: center;
  line-height: 51px;
}

.activeser {
  color: #efbf1f;
  border-bottom: 2px solid #efbf1f;
}

.set_style {
  width: 100%;
  height: 223px;
  position: relative;
}

.fot_size {
  width: 80px;
  height: 33px;
  border: 1px solid #a5a5a5;
  margin: 10px;
  line-height: 34px;
  border-radius: 10px;
  position: relative;
}

.fot_size:before {
  content: "px";
  position: absolute;
  top: -1px;
  left: 29px;
  z-index: 1;
  font-size: 16px;
}

.fot_size input {
  width: 50px;
  height: 18px;
  border: none;
  background-color: #f6f6f6;
  margin-left: 9px;
  font-size: 16px;
  color: #7a7a7a;
  outline: none;
}

.up_down td {
  border: 1px solid;
  width: 15px !important;
}

#up {
  width: 23px;
  position: absolute;
  left: 41px;
  top: 0px;
  border-left: 1px solid #dcdcdc;
}

#down {
  width: 23px;
  position: absolute;
  left: 41px;
  top: 15px;
  border-left: 1px solid #dcdcdc;
}

.font_box {
  position: absolute;
  left: 114px;
  top: 7px;
  overflow: hidden;
}

.font_box span {
  display: inline-block;
  margin-left: 5px;
  font-size: 20px;
}

.font_box b {
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
  font-size: 18px;
}

.font_box i {
  display: inline-block;
  margin-left: 10px;
  font-size: 18px;
  cursor: pointer;
}

.font_box u {
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 18px;
  cursor: pointer;
}

textarea {
  width: 200px;
  height: 180px;
  word-break: break-all;
  background: #fff;
}

.sette_title {
  display: block;
  margin: 5px 0 7px 0px;
  font-size: 14px;
  color: #484848;
  text-align: left;
  background: #e5e5e5;
  text-indent: 1em;
  height: 42px;
  line-height: 42px;
  width: 100%;
  border: 1px solid #dadada;
}

.option_box {
  overflow: hidden;
}

.option_box li {
  width: 97px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  float: left;
  cursor: pointer;
  background-color: #d6d6d6;
}

.option_box li:first-child {
  margin-left: 10px;
}

.op_active {
  background-color: #959595 !important;
  color: #fff !important;
}

.image_box {
  width: 100%;
  overflow: hidden;
}

.set_img {
  width: 100%;
  height: 87px;
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 87px;
  position: relative;
}

.img_select {
  width: 82px;
  height: 82px;
  margin-top: 3px !important;
  margin-left: 30px !important;
  cursor: pointer;
}

.change_img {
  display: inline-block;
  width: 72px;
  height: 27px;
  text-align: center;
  line-height: 27px;
  position: absolute;
  top: 32px;
  left: 116px;
  color: #efbf1f;
}

.comt_box {
  display: block;
}

.btn_incident {
  width: 100%;
  height: 80px;
}

.btn_style {
  display: inline-block;
  font-size: 14px;
  margin-top: 31px;
  margin-left: 10px;
}
.btn_style input {
  background-color: #f6f6f6;
  border: none;
  border: 1px solid #d3d3d3;
  width: 184px;
  height: 15px;
  padding: 5px;
  outline: none;
}

.full_yellow {
  display: block;
  line-height: 30px;
  margin-top: 20px;
  background-color: #efbf1f;
  color: #fff;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 20px;
  width: 200px;
  margin-left: 63px;
}

.pitch {
  width: 255px;
  height: 24px;
  line-height: 24px;
  margin-top: 10px;
  margin-left: 10px;
}
.pitch select {
  width: 140px;
  height: 100%;
  outline: none;
  border: 1px solid #cccccc;
  background-color: #f6f6f6;
}

.pitch {
  margin-top: 20px;
  margin-bottom: 20px;
}

.add_classify {
  width: 288px;
  height: 30px;
  border-radius: 5px;
  background-color: #efbf1f;
  margin-left: 20px;
  margin-bottom: 20px;
  text-align: center;
  line-height: 30px;
  color: #fff;
}

.set_classf {
  width: 282px;
  height: 30px;
  border: 1px solid #dddddd;
  position: relative;
}

.set_clsbox {
  overflow: hidden;
}

.set_clsbox li {
  margin-left: 22px;
  margin-bottom: 10px;
}

.set_classf:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 10px;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 8px solid #888;
  border-bottom: 5px solid transparent;
  transition: all linear 0.3s;
}

.set_txt {
  display: inline-block;
  width: 220px;
  min-width: 220px;
  min-height: 30px;
  text-indent: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 28px;
  text-align: left;
  line-height: 30px;
  padding-left: 10px;
}

.set_clsbox {
  width: 100%;
  height: 455px;
  overflow: auto;
}

.content_imglist {
  width: 288px;
  height: 312px;
  margin: 10px auto;
}

.add_img {
  display: inline-block;
  width: 100%;
  height: 30px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  color: #fff;
  border-radius: 5px;
  background-color: #efbf1f;
}

.img_listbox li {
  width: 100%;
  margin-top: 10px;
  margin-left: 3px;
}

.content_imgtext {
  width: 288px;
  overflow: hidden;
  margin: 10px auto;
}

.add_list {
  display: inline-block;
  width: 100%;
  height: 30px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  color: #fff;
  border-radius: 5px;
  background-color: #efbf1f;
}

.imgtxt_set li {
  margin-top: 10px;
  margin-bottom: 10px;
}

.delete {
  float: right;
  margin-top: 5px;
}

.grabble {
  width: 100%;
  height: 289px;
  margin-top: 20px;
  margin-left: 20px;
}

.mark {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border: 1px solid red;
  color: red;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.hint {
  margin-top: 10px;
  height: 30px;
  width: 240px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f6f6f6;
  padding-left: 10px;
}

.choose_list {
  height: 30px;
  width: 250px;
  border-radius: 5px;
  background: #f6f6f6;
  padding-left: 10px;
}

.review {
  width: 100%;
  height: 239px;
}

.review p {
  display: inline-block;
  margin-top: 10px;
  margin-left: 10px;
}

.set_element {
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #dadada;
  position: relative;
  line-height: 44px;
  background-color: #e5e5e5;
}
.set_element:before {
  content: "";
  position: absolute;
  left: 80px;
  top: 18px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid #666;
  transition: all linear 0.3s;
}

.set_border {
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #dadada;
  position: relative;
  line-height: 44px;
  background-color: #e5e5e5;
}

.set_border:before {
  content: "";
  position: absolute;
  left: 80px;
  top: 18px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid #666;
  transition: all linear 0.3s;
}

.setsty_box {
  width: 100%;
  height: 234px;
}

.measure {
  width: 320px;
  height: 26px;
  display: block;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 20px;
}

.change_img {
  cursor: pointer;
}

.shade {
  width: 1366px;
  height: 768px;
  z-index: 9999;
  background-color: rgba(52, 52, 52, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: none;
}

.moban {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(25, 25, 25, 0.5);
}

.xiugai {
  border: none;
  width: 150px;
  height: 35px;
  background-color: #f8f8f8;
  outline: none;
  border-bottom: 1px dashed #efbf1f;
  margin-left: 5px;
}

.determine {
  width: 55px;
  height: 29px;
  margin-right: 10px;
  border: none;
  background-color: #efbf1f;
  color: #fff;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  line-height: 29px;
}
.cancel {
  width: 55px;
  height: 29px;
  margin-right: 10px;
  border: none;
  background-color: #efbf1f;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  line-height: 29px;
}

.nta_box {
  position: absolute;
  right: 0px;
  bottom: 3px;
}

.borderd {
  border: 2px dashed orange;
  width: 100%;
  height: 30px;
}
.borderd:before {
  content: "请放入这里";
  color: red;
  padding-left: 40%;
  line-height: 30px;
}

.select_borderd {
  border: 1px dashed coral;
}

.bianjiyemian{
	position: absolute;
	left: 0; top: 0;
	display: none;
}
.bianjiyemian input{
	height: 40px;
	border: none;
	background-color: #F8F8F8;
	border-bottom: 1px dashed #efbf1f;
	padding-left: 10px;
}
.u_srue,
.u_del{
	display: inline-block;
	width: 40px;
	height: 22px;
	line-height: 22px;
	font-size: 14px;
	color: #fff;
	text-align: center;
	background-color: #efbf1f;
	border-radius: 5px;
}


</style>
