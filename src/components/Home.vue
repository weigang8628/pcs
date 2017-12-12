<template>
  <div >
    <!-- 主体部分 -->
    <!-- 左边 -->
    <div class="box_middule">
      <div class="phone_setBox">
        <CenterBox @currentcomponentFn="currentcomponentFn" @centerindexFn="centerindexFn"  :isLog = "mbjson " :allcomponents="tplTemp.htmls[pageindex|0].uis" :centerShow="centerShow" :imgw="imgw"  :zjitems="zjitems" :tpljson="tpljson" :pagevalue="tplTemp.htmls[pageindex|0].navigationBarTitleText" :pagebgcolor="tplTemp.htmls[pageindex|0].style" :FooterBars="tplTemp.foot.toolBars" ></CenterBox>
      </div>
      <LeftBox @LsData = "lsdatafn" @pageindexFn="pageindexFn"  :isshowxxk="isshowxxk" :allpage="tplTemp.htmls"></LeftBox>
      <RightBox @isLogFn = "lisLogFn" @imgwFn="imgwFn" :isLog = "mbjson" :currentcomponent="currentcomponent" :rigthShow="rigthShow" :rigthShowUi="rigthShowUi" :centerindex="centerindex" :pagevalue="tplTemp.htmls[pageindex|0].navigationBarTitleText" :pageindex="pageindex" :pagebgcolor="tplTemp.htmls[pageindex|0].style"></RightBox>
    </div>
  </div>
</template>

<script>

import LeftBox from "./main/MainLeft";
import CenterBox from "./main/MainCenter.vue";
import RightBox from "./main/MainRight.vue";

let currentindex=0 ; //页面id默认是0 首页
export default {
	props:['isshowxxk','tpljson'],
  data() {
    return {
      rigthShow:false,
      rigthShowUi:"",
      lsdata: [],
      zjitems:[],
      pageindex:'',
      mbjson: {
        width: "80%",
        height: "100px",
        marginTop: "10px",
        backgroundColor: "#ff0000"
      },
      currentcomponent: [],
      centerShow:'',
      centerindex:'',
      imgw:'',
      tplTemp: {
        appname: "我的第一个模板01",
        tplid: 1,
        navigationBarBackgroundColor: "rgba(0,0,0,0)",
        frontColor: "#000000",
        backgroundColor: "pink",
        tplimg:
          "http://www.weixapps.com:3200/res/form/2c91a36a5fdd8c9a015ffb7cb6661552/297eb6155f35043d015f3505adfd0004/7163320171127163129989.jpg",
        htmls: [
          {
            navigationBarTitleText: "首页",
            frontColor: "#000000",
            backgroundColor: "pink",
            style: {
              backgroundColor: "#ffffff"
            },
            uis: [
            ],
            foot: [
              {
                title:"首页",
                img:"http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/2145220171108160254148.png",
                imgActive:"http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/2145220171108160254148.png",
                url:"http://www.baidu.com"
              },
              {
                title:"购物车",
                img:"http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/2145220171108160254148.png",
                imgActive:"http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/2145220171108160254148.png",
                url:"http://www.baidu.com"
              },
              {
                title:"我的",
                img:"http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/2145220171108160254148.png",
                imgActive:"http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/2145220171108160254148.png",
                url:"http://www.baidu.com"
              }
            ]
          },
          {
            navigationBarTitleText: "列表页",
            frontColor: "#000000",
            backgroundColor: "pink",
            style: {
              backgroundColor: "yellow"
            },
            uis: [
            ]
          },
          {
            navigationBarTitleText: "内容页",
            frontColor: "#000000",
            backgroundColor: "pink",
            style: {
              backgroundColor: "green"
            },
            uis: [
            ]
          }
        ],
        foot: {
          isHide:false,
          toolBars: [
            {
              title: "首页",
              url: "",
              style: {
                fontSize: "24px",
                color: "#f00",
                defimg: "",
                selimg: ""
              }
            },
            {
              title: "列表页",
              url: "",
              style: {
                fontSize: "24px",
                color: "#f00",
                defimg: "",
                selimg: ""
              }
            },
            {
              title: "购物车",
              url: "",
              style: {
                fontSize: "24px",
                color: "#f00",
                defimg: "",
                selimg: ""
              }
            },
            {
              title: "我的",
              url: "",
              style: {
                fontSize: "24px",
                color: "#f00",
                defimg: "",
                selimg: ""
              }
            }
          ],
          toolbarStyle: {
            fontSize: "24px",
            color: "#f00",
            backgroundColor: "#ccc"
          }
        }
      }
    };
  },
  components: {
    LeftBox,
    CenterBox,
    RightBox
  },
  methods: {
    lisLogFn(data) {
      this.mbjson = data;
    },
    lsdatafn(data) {
      console.log("---------------------");
      console.log(currentindex);
      // console.log(pageindex+"qqq");



      this.tplTemp.htmls[currentindex].uis.push(data); //系统组件
      console.log(this.tplTemp.htmls[0].uis);
      this.centerShow = Object.keys(data)[0];
      
    },
    currentcomponentFn(data) {
      this.currentcomponent = data;
      this.rigthShow = true;
      this.rigthShowUi = Object.keys(data)[0];
    //  console.log("下面是app中打印的接收到的数据");
    //  console.log(this.currentcomponent);
    },
    centerindexFn(data){
      this.centerindex = data
      console.log(this.centerindex+"www")
    },
    imgwFn(data){
        this.imgw = data
    },
    //页面索引值
    pageindexFn(data){
      this.pageindex = data;
      currentindex = this.pageindex;
    },
    

    
  },
  created() {
    
    //发起请求
    this.$ajax
      .get("")
      .then(res => {
        this.appname = res.data.appname;
        //图片宽度
        this.imgwidth = res.data.htmls["0"].uis["0"].imgs.style.width;
        this.imgwidth = this.imgwidth.substring(0, this.imgwidth.length - 2);
        //图片高度
        this.imgheight = res.data.htmls["0"].uis["0"].imgs.style.height;
        this.imgheight = this.imgheight.substring(0, this.imgheight.length - 2);
       // console.log(res.data);
      })
      .catch(err => console.log(err));
  },
  updated(){
    var newuis = this.tplTemp.htmls[0].uis
    this.$emit("newuisFn", newuis);
  }
};
</script>

<style>

</style>
