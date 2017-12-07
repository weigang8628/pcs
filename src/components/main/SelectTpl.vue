<template>
  <div>
    <!-- 模板中心 -->
    <div class="tcs-mb">
      <Row>
        <i-col span="4">
          <div class="mbfl-t">
        <ul>
          <h3>请选择套餐</h3>
          <i-button type="ghost">A套餐</i-button>
          <i-button type="ghost">B套餐</i-button>
        </ul>
        <ul>
          <h3>请选择行业</h3>
          <i-button type="ghost">婚纱摄影</i-button>
          <i-button type="ghost">餐饮</i-button>
          <i-button type="ghost">医疗</i-button>
          <i-button type="ghost">维修</i-button>
          <i-button type="ghost">上门服务</i-button>
          <i-button type="ghost">金融</i-button>
        </ul>
      </div>
        </i-col>
        <i-col span="20">
          <div class="mbfl-l">
        <ul> 
          <li v-for="(item,index) in alltpl " :key="index">
            <router-link to="{path:'/news', query:{page: index }}">
              <h3>{{item.appname}}</h3>
              <img :src="item.tplimg" alt="">
              <span>立即使用</span>
            </router-link>
          </li>
        </ul>
      </div>
        </i-col>
    </Row>
    
    <Row>
      <i-col>
        <div @click="srue">取消</div>
        <div @click="srue">确定</div>
      </i-col>
    </Row>
    
    
      
    </div>
  </div>
  <!-- 头部结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      alltpl: [
        {
          appname: "我是第一个模板",
          tplid: "01",
          tplimg: "http://www.weixapps.com/applet/img/muban7.jpg"
        },
        {
          appname: "我是第二个模板",
          tplid: "02",
          tplimg: "http://www.weixapps.com/applet/img/muban7.jpg"
        },
        {
          appname: "我是第一个模板",
          tplid: "03",
          tplimg: "http://www.weixapps.com/applet/img/muban7.jpg"
        }
      ]
    }
  },
  methods:{
    srue(){
      this.$emit('isxs',this.off)
    },
    send(){
      this.$ajax.get("../../tpl/tpl02.json").then(res => {
        console.log(res.data)
          this.json=res.data
          this.$emit("muban",this.json)
          console.log(this.json)
    
      }).catch(err => console.log(err));

    }
  }
};
</script>

<style scoped lang='less'>
.ivu-btn-ghost {
  background-color: #fff;
  	width: 80px;
}
.tcs-mb {
  overflow: hidden;
  background-color: #f4f4f4;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

  .mbfl-t {
  }
  .mbfl-l {
    ul {
      li {
        float: left;
        h3 {
          font-size: 16px;
        }
        img {
          width: 100px;
        }
      }
    }
  }
}
</style>
