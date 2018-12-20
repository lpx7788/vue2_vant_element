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
                      <span class="contactUsTit"> 防伪验证</span>
                    </el-col>
                    <el-col :span="14" style="padding:0;">
                    <el-breadcrumb separator-class="el-icon-arrow-right">

                      <el-breadcrumb-item :to="{ path: '/' }">     <i class="el-icon-caret-right maincolor"></i>首页</el-breadcrumb-item>
                      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                      <el-breadcrumb-item>防伪验证</el-breadcrumb-item>
                    </el-breadcrumb>
                    </el-col>
                </el-row>

                <el-row :gutter="30">
                    <div class="content">
                        <img src="../assets/banner_m1.png" height="117px" width="100%" alt="">
                        <div>
                            <el-row :gutter="30" class="mt30" >
                            <el-col :span="7">
                              <div class="grid-content bg-purple fr">
                                  <img src="../assets/banner_m1.png" height="150" width="150px" alt="">
                              </div>
                            </el-col>
                            <el-col :span="17">
                              <div class="contentList bg-purple">
                                <p>请输入阿迪普12位防伪码进行查询<span style="color:#c00">（由于阿迪普产品较多，查询后请稍等片刻）</span></p>
                                <p> <input type="text" name="" id=""></p>
                                <p> <el-button icon="el-icon-search" @click="searchClick(1)">搜索</el-button></p>
                              </div>
                            </el-col>

                          </el-row>
                          <el-row :gutter="30" class="mt30" >
                            <el-col :span="7">
                              <div class="grid-content bg-purple fr">
                                  <img src="../assets/banner_m1.png" height="150" width="150px" alt="">
                              </div>
                            </el-col>
                            <el-col :span="17">
                              <div class="contentList bg-purple">
                                <p>请输入阿迪普12位防伪码进行查询<span style="color:#c00"></span></p>
                                <p> <input type="text" name="" id=""></p>
                                <p> <el-button icon="el-icon-search"  @click="searchClick(2)">搜索</el-button></p>
                              </div>
                            </el-col>

                          </el-row>
                          <el-row :gutter="30" class="mt30" >
                            <el-col :span="7">
                              <div class="grid-content bg-purple fr">
                                  <img src="../assets/banner_m1.png" height="150" width="150px" alt="">
                              </div>
                            </el-col>
                            <el-col :span="17">
                              <div class="contentList bg-purple">
                                <p>请输入阿迪普12位防伪码进行查询<span style="color:#c00"></span></p>
                                <p> <input type="text" name="" id=""></p>
                                <p> <el-button icon="el-icon-search"  @click="searchClick(3)">搜索</el-button></p>
                              </div>
                            </el-col>

                          </el-row>
                          <el-row :gutter="30" class="mt30" >
                            <el-col :span="7">
                              <div class="grid-content bg-purple fr">
                                  <img src="../assets/banner_m1.png" height="150" width="150px" alt="">
                              </div>
                            </el-col>
                            <el-col :span="17">
                              <div class="contentList bg-purple">
                                <p>请输入阿迪普12位防伪码进行查询<span style="color:#c00"></span></p>
                                <p> <input type="text" name="" id=""></p>
                                <p> <el-button icon="el-icon-search"  @click="searchClick(4)">搜索</el-button></p>
                              </div>
                            </el-col>

                          </el-row>
                        </div>

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
    // this.getData();
  },
  methods: {
    searchClick () {
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


      .contentList{
        margin-top: 27px;
      }
      p{

        line-height: 30px;
        button{
          margin-top: 10px;
          height: 30px;
          padding: 0 20px;

        }
      }
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



}
</style>
