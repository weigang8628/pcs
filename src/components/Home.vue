<template>
  <div>
    <!-- 整体结构部分 -->
    <!-- 左边 -->
    <div class="box_middule">
      <div class="phone_setBox">
        <CenterBox @currentcomponentFn="currentcomponentFn" @centerindexFn="centerindexFn"  :allcomponents="tplTemp.htmls[pageindex|0].uis" :centerShow="centerShow"  :zjitems="zjitems" :tpljson="tpljson" :pagevalue="tplTemp.htmls[pageindex|0].navigationBarTitleText" :pagebgcolor="tplTemp.htmls[pageindex|0].style" :foot="tplTemp.foot" ></CenterBox>
      </div>
      <LeftBox @lsdata = "lsdatafn" @pageindex="pageindexFn"  :isshowxxk="isshowxxk" :allpage="tplTemp.htmls"></LeftBox>
      <RightBox :currentcomponent="currentcomponent" :rigthShow="rigthShow" :rigthShowUi="rigthShowUi" :centerindex="centerindex" :pagevalue="tplTemp.htmls[pageindex|0].navigationBarTitleText" :pageindex="pageindex" :pagebgcolor="tplTemp.htmls[pageindex|0].style"></RightBox>
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
              backgroundColor: "#FFD7F9"
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
            frontColor: "#FFDEF6",
            backgroundColor: "pink",
            style: {
              backgroundColor: "#FBFBD1"
            },
            uis: [
            ]
          },
          {
            navigationBarTitleText: "内容页",
            frontColor: "#000000",
            backgroundColor: "pink",
            style: {
              backgroundColor: "#E2FFE2"
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
                fontSize: 14,
                color: "#f00",
                defimg: "http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/2145220171108160254148.png",
                selimg: "http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/4631420171108160254132.png"
              }
            },
            {
              title: "列表页",
              url: "",
              style: {
                fontSize: 14,
                color: "#f00",
                backgroundColor:"#fff",
                defimg: "http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/2145220171108160254148.png",
                selimg: "http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/4631420171108160254132.png"
              }
            },
            {
              title: "购物车",
              url: "",
              style: {
                fontSize: 14,
                color: "#f00",
                defimg: "http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/2145220171108160254148.png",
                selimg: "http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/4631420171108160254132.png"
              }
            },
            {
              title: "我的",
              url: "",
              style: {
                fontSize: 14,
                color: "#ff0000",
                defimg: "http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/2145220171108160254148.png",
                selimg: "http://www.weixapps.com:3200/res/form/8a8283495f5c7321015f5ce8bb110010/297eb6155f35043d015f3505adfd0004/4631420171108160254132.png"
              }
            }
          ],
          toolbarStyle: {
            imgSize: 24,
            fontSize: 14,
            color: "#ff0000",
            backgroundColor: "#cccccc"
          }
        }
      }
    };
  },
  components: {
    LeftBox,
    CenterBox,
    RightBox,
  },
  methods: {
    lsdatafn(data) {
      this.tplTemp.htmls[currentindex].uis.push(data); //系统组件 //currentindex页面索引
      //console.log(this.tplTemp.htmls[0].uis);
      this.centerShow = Object.keys(data)[0];
    },
    currentcomponentFn(data) {
      this.currentcomponent = data;
      this.rigthShow = true;
      this.rigthShowUi = Object.keys(data)[0];
    },
    centerindexFn(data){
      this.centerindex = data
    },
    //页面索引值
    pageindexFn(data){
      this.pageindex = data;
      currentindex = this.pageindex;
    },
  },
  created() {
  },
  updated(){
    var newuis = this.tplTemp.htmls[0].uis
    this.$emit("newuisFn", newuis);
  }
};
</script>

<style>

</style>
