<template>
  <div class="newsPage">
      <Head></Head>
      <Banner></Banner>
  <div class="newsPageMain webContain">
      <el-row :gutter="30">

          <!-- 左侧 -->
          <el-col :span="6" style="padding-right:0">
            <div class=" bg-purple">
               <el-row class="tac">
                <el-col :span="21" class="listleft">
                  <h5 class="leftTit textC">NEWS</h5>
                    <el-row :gutter="30" style="margin:0;">
                        <Sidebar :menuList="menuList" @getId = 'getId'/>
                    </el-row>

                </el-col>
               </el-row>
               <el-row class="tac">
                <el-col :span="21" class="listleftImg" >
                  <img :src="$t('m.weChat')">
                </el-col>
               </el-row>
            </div>
          </el-col>

          <!-- 右侧 -->

           <el-col :span="18" class="newsRight"  style="padding:0px ;">
            <div class=" bg-purple">
              <el-row :gutter="30" style="margin-top:0;" class="newsRightTit">
                    <el-col :span="10" style="padding:0;">
                      <span class="newsTit"> Company News</span>
                    </el-col>
                    <el-col :span="14" style="padding:0;">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                      <el-breadcrumb-item> <i class="el-icon-caret-right maincolor"></i>Position：</el-breadcrumb-item>
                      <el-breadcrumb-item :to="{ path: '/' }">  Home</el-breadcrumb-item>
                      <el-breadcrumb-item>News</el-breadcrumb-item>
                      <el-breadcrumb-item>Company News</el-breadcrumb-item>

                    </el-breadcrumb>
                    </el-col>
                </el-row>

                <el-row :gutter="30">

                  <el-col :span="24" v-for="item in listNavrightContent.right_list" :key="item.id" class="right_list_item"  >
                    <div class="grid-content partnerItem bg-purple "  @click="toDetailPage(item.id)" >
                      <!-- <img class=" border fl" width="84px" height="84px" :src="item.img" alt=""> -->
                     <div class="rightContent">
                        <p><strong>{{item.title}}{{id}}</strong><span class="fr">【2018-11-08】</span></p>
                        <p class="content">{{item.content}}</p>
                     </div>
                    </div>
                  </el-col>

                </el-row>

            </div>
             <!-- 分页 -->
             <div class="Page"  v-if="id!=1" >
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  background
                  layout="prev, pager, next"
                  :total="1000">
                </el-pagination>
             </div>
          <!-- <pageRight :id='id'></pageRight> -->
          <!-- <router-view></router-view> -->
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
import Sidebar from "@/common/SideBar/SideBar";
// import pageRight from "@/components/productList/pageRight.vue";
export default {
  name: "newsPage",
  data() {
    return {
      lang: "zh", //当前语言种类
      currentPage: "", //当前页数
      listIndex: 1,
      id: 1,

      listNavrightContent: {
        title: "Company News",
        right_list: [
          {
            id: "55",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: " Adpo brings better choices for life.",
            content:'Guangzhou Puya Electronic Technology Co., Ltd. is mainly engaged in operating brands. Its main brand [adpo] is the first brand of screen protector in China. It is one of the few professional sales professional sales......'
          },
          {
            id: "56",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: " Adpo brings better choices for life.",
             content:'Guangzhou Puya Electronic Technology Co., Ltd. is mainly engaged in operating brands. Its main brand [adpo] is the first brand of screen protector in China. It is one of the few professional sales professional sales......'
          },
          {
            id: "57",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: " Adpo brings better choices for life.",
             content:'Guangzhou Puya Electronic Technology Co., Ltd. is mainly engaged in operating brands. Its main brand [adpo] is the first brand of screen protector in China. It is one of the few professional sales professional sales......'
          },
          {
            id: "64",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: " Adpo brings better choices for life.",
             content:'Guangzhou Puya Electronic Technology Co., Ltd. is mainly engaged in operating brands. Its main brand [adpo] is the first brand of screen protector in China. It is one of the few professional sales professional sales......'
          },
          {
            id: "65",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: " Adpo brings better choices for life.",
             content:'Guangzhou Puya Electronic Technology Co., Ltd. is mainly engaged in operating brands. Its main brand [adpo] is the first brand of screen protector in China. It is one of the few professional sales professional sales......'
          },
          {
            id: "66",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: " Adpo brings better choices for life.",
            content:'Guangzhou Puya Electronic Technology Co., Ltd. is mainly engaged in operating brands. Its main brand [adpo] is the first brand of screen protector in China. It is one of the few professional sales professional sales......'
          }
        ]
      },

      menuList: [
        {
          id: "1",
          path: "/func1", //菜单项所对应的路由路径
          title: "Company News", //菜单项名称
          children: [
            // {
            //   id: "11",
            //   path: "/func311",
            //   title: "保护膜",
            //   children: []
            // },
            // {
            //   id: "12",
            //   path: "/func312",
            //   title: "贴膜",
            //   children: []
            // },
            // {
            //   id: "13",
            //   path: "/func313",
            //   title: "功能31-3",
            //   children: []
            // }
          ] //是否有子菜单，若没有，则为[]
        },
        {
          id: "2",
          path: "/func2",
          title: "Industry News",
          children: []
        },
        {
          id: "3",
          path: "/fun32",
          title: "Protective Film",
          children: []
        },
        {
          id: "4",
          path: "/func4",
          title: "Film",
          children: []
        },
        // {
        //   id: "3",
        //   path: "/func3",
        //   title: "功能3",
        //   children: [
        //     {
        //       id: "31",
        //       path: "/func31",
        //       title: "功能3-1",
        //       children: []
        //     },
        //     {
        //       id: "32",
        //       path: "/func32",
        //       title: "功能3-2",
        //       children: []
        //     },
        //     {
        //       id: "33",
        //       path: "/func33",
        //       title: "功能3-3",
        //       children: []
        //     }
        //   ]
        // }
      ]
    };
  },
  components: {
    Food,
    Head,
    Banner,
    Sidebar,
    // pageRight
  },
  created() {

  },
  methods: {


    handleSizeChange(size) {},
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },


    getId(id){
      console.log('====');
      console.log(id);
       this.id = id;
    },
    toDetailPage(id){
        this.$router.push({name: 'detailPage', query: {nav_id:this.$route.query.nav_id,id:id}})
    }
  },
  mounted() {
     this.id = this.$route.query.id;
    //  this.$set(this.id ,this.$route.query.id);
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less" >
@import url(../../styles/common.less);
.newsPage {
  height: 100%;
  width: 100%;
  .newsPageMain {
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

  .newsTit {
    width: 116px;
    height: 40px;
    font-size: 22px;
    font-weight: bold;
    color: #8EC01F;
    line-height: 40px;
  }
  .el-menu-item-group__title {
    display: none;
    padding: 0;
  }
  .listleftImg {
    background: rgba(142, 192, 31, 1);
    height: 400px;
  }
  .listleft {
    overflow: hidden;
    margin-bottom: 20px;
    border: 1px solid #8ec01f;
  }
  .leftTit {
    font-size: 22px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    background: #8ec01f;
  }
  .el-breadcrumb {
    height: 40px;
    line-height: 40px;
    float: right;
  }
  .newsRightTit {
    border-bottom: 2px solid #8ec01f;
    margin: 0 !important;
  }

  .right_list_item {


    margin-top: 30px;
    p {
      padding: 5px 0;

    }
    .rightContent{
      // padding-left: 100px;
    }
    .content{

        .ellipsis-line(@line: 2);
    }
  }
}
</style>
