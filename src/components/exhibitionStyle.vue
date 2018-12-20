<template>
<!-- 联系我们 -->
  <div class="contactUsPage">
      <Head></Head>
      <Banner></Banner>
      <div class="contactUsPageMain webContain">
        <el-row :gutter="30">

          <!-- 左侧 -->
          <el-col :span="6" style="padding-right:0">
            <div class=" bg-purple">
               <el-row class="tac">
                <el-col :span="21" class="contactUsleftImg" >
                  <img src="" alt="">
                </el-col>
               </el-row>
            </div>
          </el-col>


          <!-- 右侧 -->
          <el-col :span="18" class="contactUsRight"  style="padding:0px ;">
            <div class=" bg-purple">
              <el-row :gutter="30" style="margin-top:0;" class="contactUsRightTit">
                    <el-col :span="10" style="padding:0;">
                      <span class="contactUsTit"> 会展风采</span>
                    </el-col>
                    <el-col :span="14" style="padding:0;">
                    <el-breadcrumb separator-class="el-icon-arrow-right">

                      <el-breadcrumb-item :to="{ path: '/' }">     <i class="el-icon-caret-right maincolor"></i>首页</el-breadcrumb-item>
                      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                    </el-col>
                </el-row>

                <el-row :gutter="30">
                    <div class="content">
                        - 阿迪普外贸中心
                        地址：九龙尖沙咀柯士甸道122号丽斯中心12楼
                        - 阿迪普营销中心
                        地址：广州市荔湾区西堤二马路中百电子城首层102A-102B
                        - 阿迪普生产基地
                        地址：广州市番禺区大石街会江村金河产业园D栋5楼。 邮编：511430
                        商务Email：Sales@adpo.net
                        服务Email：Service@adpo.net
                        公众微信号：adpo阿迪普

                    </div>
                </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <Food></Food>
  </div>
</template>

<script>
import { getCookie, delCookie, addCookie } from "@/utils/cookie";
import Food from "@/common/footer";
import Head from "@/common/header";
import Banner from "@/common/banner";

export default {
  name: "contactUsPage",
  data() {
    return {
      lang: "zh", //当前语言种类
      currentPage: "", //当前页数
      contactUsIndex: 1,

    };
  },
  components: {
    Food,
    Head,
    Banner
  },
  mounted(){
    this.getData();
  },
  methods: {
    getData () {
      let data = {};
      this.$http.post('http://pdd.duoduoshiyong.com/api/index.php/index/getgg', data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less" >
@import url(../styles/common.less);
.contactUsPage {
  height: 100%;
  width: 100%;
  // margin-bottom: 220px;
  .contactUsPageMain{
    min-height: 1000px;
  }
  .displayN {
    display: none;
  }
  .el-pagination {
    width: 455px;
    margin: 0 auto;
  }
  .webContain {
    margin-top: 40px;
  }
  .Page {
    margin: 0 auto;
    margin: 70px 0;
  }
  .el-menu-item-group__title {
    display: none;
    padding: 0;
  }
  .contactUsleftImg{
    background:rgba(142,192,31,1);height:400px;
  }
  .contactUsleft {
    margin-bottom:20px;
    border: 1px solid #8EC01F;
  }
  .leftTit {
    font-size: 22px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    background: #8EC01F;
  }
  .el-breadcrumb {
    height: 40px;
    line-height: 40px;
    float: right;
  }
  .contactUsRight{
    .content{
      margin-top: 28px;
      padding: 0 15px;
    }
    .contactUsRightTit {
      border-bottom: 2px solid #8EC01F;
      margin: 0 !important;
    }
  }


  .contactUsTit {
    width: 116px;
    height: 40px;
    font-size: 22px;
    font-weight: bold;
    color: #8EC01F;
    line-height: 40px;
  }
  .contactUsImg{
    // height: 100%;
    // width: 100%;
    width:270px;
    height:270px;
  }
  .right_contactUs_item{
    margin-top: 30px;
    p{
      padding: 10px 0;
    }
  }

}
</style>
