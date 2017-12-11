<template>
  <div>
    <!-- 模板 -->
    <transition name="fade">
        <div class="tcs-mb">
          <div class="mbfl-t">
            <ul>
              <h3>请选择套餐</h3>
              <li><a href="javascript:;">A套餐</a><i>1999.00</i></li>
              <li><a href="javascript:;">B套餐</a><i>18900.00</i></li>
            </ul>
            <ul>
              <h3>请选择行业</h3>
              <li><a href="javascript:;">婚纱摄影</a></li>
              <li><a href="javascript:;">餐饮</a></li>
              <li><a href="javascript:;">医疗</a></li>
              <li><a href="javascript:;">维修</a></li>
              <li><a href="javascript:;">上门服务</a></li>
              <li><a href="javascript:;">金融</a></li>
            </ul>
            
          </div>  `
          <div class="mbfl-l">
            <ul>
              <li v-for="(item,index) in alltpl" :key="index" @click="send(index)">
                  
                  <h3>{{item.appname}} id:{{index+2}}</h3>
                  <img :src="item.tplimg" alt="">
                  <span @click="srue">立即使用</span>
              </li>
              <!-- <li @click="send">
                  <h3>蛋糕店</h3>
                  <img src="http://www.weixapps.com:3200/res/form/2c91a36a5fdd8c9a015ffb7cb6661552/297eb6155f35043d015f3505adfd0004/4912820171127173017719.jpg" alt="">
                  <span>立即使用</span>
              </li> -->


            </ul>
          </div>
          <div @click="srue">确定</div>
        </div>
    </transition>

  </div>
  <!-- 头部结束 -->

</template>

<script>
export default {
  props: ["newuis"],
  data() {
    return {
      off: false,
      alltpl: [
        {
          appname: "蛋糕店",
          tplid: "01",
          tplimg:
            "http://www.weixapps.com:3200/res/form/2c91a36a5fdd8c9a015ffb7cb6661552/297eb6155f35043d015f3505adfd0004/4912820171127173017719.jpg"
        },
        {
          appname: "家居Lite",
          tplid: "02",
          tplimg:
            "http://www.weixapps.com:3200/res/form/2c91a36a5fdd8c9a015ffb7cb6661552/297eb6155f35043d015f3505adfd0004/7163320171127163129989.jpg"
        },
        {
          appname: "我是第一个模板",
          tplid: "03",
          tplimg: "http://www.weixapps.com/applet/img/muban14.jpg"
        }
      ],
      json: {}
    };
  },
  methods: {
    srue() {
      this.$emit("isxs", this.off);
    },
    send(index) {
      if (this.newuis.length != 0) {
        var fgalert = confirm("有没保存的模板数据，确定要清空么？");
        if (fgalert == true) {
          this.newuis.splice(0, this.newuis.length);
          this.$ajax
            .get("../../tpl/tpl" + [index + 2] + ".json")
            .then(res => {
              this.json = res.data;
              this.$emit("muban", this.json);
              //var fgalert= confirm("有没保存的数据，确定要清空么？");
            })
            .catch(err => console.log(err));
        }
      } else {
        this.$ajax
          .get("../../tpl/tpl" + [index + 2] + ".json")
          .then(res => {
            this.json = res.data;
            this.$emit("muban", this.json);
            //var fgalert= confirm("有没保存的数据，确定要清空么？");
          })
          .catch(err => console.log(err));
      }
    }
  },
  updated() {}
};
</script>

<style scoped lang='less'>
.fade-enter-active,
.fade-leave-active {
  transition: 1s all ease;
}

.fade-enter-active {
  opacity: 1;
  width: 100%;
  height: 300px;
}
.fade-leave-active {
  opacity: 0;
  width: 100%;
  height: 0px;
}

.fade-enter,
.fade-leave {
  opacity: 0;
  width: 100%;
  height: 0px;
}
.tcs-mb {
  overflow: hidden;
  background-image: url('../../assets/img/tplbg.jpg');
  .mbfl-t {
    float: left;
  }
  .mbfl-l {
    float: left;
    width: 80%;
    ul {
      overflow: hidden;
      padding-top: 20px;
      
      li {
        float: left;
        width: 130px;
        height: 178px;
        background-color: #fff;
        margin-left: 20px;
        padding: 7px;
        position: relative;
        h3 {
          font-size: 16px;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 26px;
          line-height: 26px;
          text-align: center;
          background-color: rgba(0, 0, 0, .5);
          color:#fff;
          font-weight: normal;
          font-size: 14px;
        }
        img {
          width: 100%;
          height: 100%;
        }
        span{
          position: absolute;
          left: 0;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}
</style>
