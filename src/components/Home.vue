<template>
  <div >
    <!-- 主体部分 -->
    <!-- 左边 -->
    <div class="box_middule">
      <div class="phone_setBox">
        <CenterBox @currentcomponentFn="currentcomponentFn" @centerindexFn="centerindexFn" @removecomponetFn="removecomponetFn"  :isLog = "mbjson " :allcomponents="tplTemp.htmls[0].uis" :centerShow="centerShow" :imgw="imgw"></CenterBox>
      </div>
      <LeftBox @LsData = "lsdatafn" :isshowxxk="isshowxxk"></LeftBox>
      <RightBox @isLogFn = "lisLogFn" @imgwFn="imgwFn" :isLog = "mbjson" :currentcomponent="currentcomponent" :rigthShow="rigthShow" :rigthShowUi="rigthShowUi" :centerindex="centerindex"></RightBox>
    </div>
  </div>
</template>

<script>
import LeftBox from "./main/MainLeft";
import CenterBox from "./main/MainCenter.vue";
import RightBox from "./main/MainRight.vue";

export default {
	props:['isshowxxk'],
  data() {
    return {
      rigthShow:false,
      rigthShowUi:"",
      lsdata: [],
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
        tplid: "1",
        navigationBarBackgroundColor: "rgba(0,0,0,0)",
        tplimg:
          "http://www.weixapps.com:3200/res/form/2c91a36a5fdd8c9a015ffb7cb6661552/297eb6155f35043d015f3505adfd0004/7163320171127163129989.jpg",
        htmls: [
          {
            navigationBarTitleText: "首页",
            style: {
              backgroundColor: "#ff0000"
            },
            uis: [
              // {
              //   imgs: {
              //     id: "1",
              //     title: "图片1",
              //     url:
              //       "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
              //     style: {
              //       width: 80,
              //       height: 90,
              //       padding: 20,
              //       marginTop: 10,
              //       backgroundColor: "#ff0000"
              //     }
              //   }
              // }
            ]
          },
          {
            navigationBarTitleText: "列表页",
            style: {
              backgroundColor: "yellow"
            }
          }
        ],
        foot: {}
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
      this.tplTemp.htmls[0].uis.push(data); //系统组件
      console.log(this.tplTemp.htmls[0].uis);
      this.centerShow = Object.keys(data)[0];
      
    },
    currentcomponentFn(data) {
      this.currentcomponent = data;
      this.rigthShow = true;
      this.rigthShowUi = Object.keys(data)[0];
      console.log("下面是app中打印的接收到的数据");
      console.log(this.currentcomponent);
    },
    centerindexFn(data){
      this.centerindex = data
      //console.log(this.centerindex+"111111")
    },
    removecomponetFn(data){
        console.log("索引"+data+"要被删除");
       // this.tplTemp.htmls[0].uis
    },
    imgwFn(data){
        this.imgw = data
    }

    
  },
  created() {
    
    //发起请求
    this.$ajax
      .get("")
      .then(res => {
        this.appname = res.data.appname;
        console.log(this.appname);
        //图片宽度
        this.imgwidth = res.data.htmls["0"].uis["0"].imgs.style.width;
        this.imgwidth = this.imgwidth.substring(0, this.imgwidth.length - 2);
        //图片高度
        this.imgheight = res.data.htmls["0"].uis["0"].imgs.style.height;
        this.imgheight = this.imgheight.substring(0, this.imgheight.length - 2);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>

</style>
