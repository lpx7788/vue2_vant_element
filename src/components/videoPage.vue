<template>
  <div class="listPage">
      <Head></Head>
      <Banner></Banner>
  <div class="listPageMain webContain">
      <el-row :gutter="30">

          <!-- 左侧 -->
                  <!-- 左侧 -->
          <el-col :span="6" style="padding-right:0">
            <div class=" bg-purple">
               <el-row class="tac">
                <el-col :span="21" class="contactUsleftImg" >
                   <img :src="$t('m.weChat')">
                </el-col>
               </el-row>
            </div>
          </el-col>
          <!-- <el-col :span="6" style="padding-right:0">
            <div class=" bg-purple">
               <el-row class="tac">
                <el-col :span="21" class="listleft">
                  <h5 class="leftTit textC">公司介紹</h5>
                    <el-row :gutter="30" style="margin:0;">
                        <Sidebar :menuList="menuList" @getId = 'getId'/>
                    </el-row>

                </el-col>
               </el-row>
               <el-row class="tac">
                <el-col :span="21" class="listleftImg" >
                  <img src="" alt="">
                </el-col>
               </el-row>

            </div>
          </el-col> -->

          <!-- 右侧 -->

           <el-col :span="18" class="listRight"  style="padding:0px ;">
            <div class=" bg-purple">
              <el-row :gutter="30" style="margin-top:0;" class="listRightTit">
                    <el-col :span="10" style="padding:0;">
                      <span class="listTit"> {{listNavrightContent.title}}</span>
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

                <el-row :gutter="30" v-for="item in listNavrightContent.right_list"  :key="item.id" v-show="imgDetailShow==false" >
                  <el-col :span="8" class="right_list_item"  v-for="i in item" :key="i.id" >

                    <div class="grid-content partnerItem bg-purple textC"  v-if="id==2">
                         <video width="100%" :src="i.videoUrl" controls="controls">
                         </video>
                      <p>{{i.title}}{{id}}</p>

                    </div>

                    <div class="grid-content partnerItem bg-purple textC"  @click="getUrl(i.img,i.id)"  v-else >
                      <img class="listImg border" :src="i.img" alt="">
                      <p>{{i.title}}{{id}}</p>
                    </div>

                  </el-col>
                </el-row>
                <!-- <el-row :gutter="30">
                  <img :src="imgUrl" alt="" v-show="imgDetailShow">
                </el-row> -->

            </div>
             <!-- 分页 -->
             <div class="Page">
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
      <!-- <video :image="videoUrl" v-model="isvideo"  v-on:input="handleInput"></video> -->
      <!-- <showVideo :image="videoUrl" v-show="videoUrlShow"></showVideo> -->
      <Food></Food>
  </div>
</template>

<script>
import { getCookie, delCookie, addCookie } from "@/utils/cookie";
import Food from "@/common/footer";
import Head from "@/common/header";
import Banner from "@/common/banner";
import Sidebar from "@/common/SideBar/SideBar";
import showVideo from "@/common/showVideo";
// import pageRight from "@/components/productList/pageRight.vue";
export default {
  name: "listPage",
  data() {
    return {
      lang: "zh", //当前语言种类
      currentPage: "", //当前页数
      listIndex: 1,
      id: 1,
      videoUrl: '',
      imgUrl: '',
      imgDetailShow: false,
      videoUrlShow: false,
      listNavleftContent: {
        title: "产品介绍",
        listNavLeft: [
          {
            nav_id: "1",
            name: "首页"
          },
          {
            nav_id: "2",
            name: "关于我们",
            nav_level_item: [
              {
                nav_id: "21",
                name: "品牌介绍"
              },
              {
                nav_id: "22",
                name: "品牌优势"
              },
              {
                nav_id: "23",
                name: "行业优势"
              },
              {
                nav_id: "24",
                name: "公司历程"
              },
              {
                nav_id: "25",
                name: "宣传视频"
              }
            ]
          },
          {
            nav_id: "3",
            name: "专卖店加盟"
          },
          {
            nav_id: "4",
            name: "产品介绍",
            nav_level_item: [
              {
                nav_id: "41",
                name: "保护贴系列"
              },
              {
                nav_id: "42",
                name: "机壳系列"
              },
              {
                nav_id: "43",
                name: "视听设备"
              },
              {
                nav_id: "44",
                name: "穿戴设备"
              },
              {
                nav_id: "45",
                name: "移动电源"
              },
              {
                nav_id: "46",
                name: "配件工具"
              },
              {
                nav_id: "47",
                name: "视频教程"
              }
            ]
          },
          {
            nav_id: "5",
            name: "展会风采"
          }
        ]
      },
      listNavrightContent: {
        title: " 保护贴系列",
        right_list: [
          {
            id: "55",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            videoUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            title: "1050Branded"
          },
          {
            id: "56",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            videoUrl: "http://www.outesvilla.com/upload/admin/20181023/e7f3e6663c2c8a224058e4f7373887ec.mov",
            title: "advantage"
          },
          {
            id: "57",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            videoUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            title: "1050Branded"
          },
          {
            id: "58",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            videoUrl: "http://www.outesvilla.com/upload/admin/20181023/e7f3e6663c2c8a224058e4f7373887ec.mov",
            title: "advantage"
          },
          {
            id: "59",
             img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            videoUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            title: "1050Branded"
          },
          {
            id: "60",
             img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            videoUrl: "http://www.outesvilla.com/upload/admin/20181023/e7f3e6663c2c8a224058e4f7373887ec.mov",
            title: "advantage"
          },
          {
            id: "61",
             img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            videoUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            title: "1050Branded"
          },
          {
            id: "62",
             img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            videoUrl: "http://www.outesvilla.com/upload/admin/20181023/e7f3e6663c2c8a224058e4f7373887ec.mov",
            title: "advantage"
          },
          {
            id: "63",
             img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            videoUrl: "http://www.outesvilla.com/upload/admin/20181023/e7f3e6663c2c8a224058e4f7373887ec.mov",
            title: "advantage"
          },
          {
            id: "64",
             img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            videoUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            title: "1050Branded"
          },
          {
            id: "65",
             img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            videoUrl: "http://www.outesvilla.com/upload/admin/20181023/e7f3e6663c2c8a224058e4f7373887ec.mov",
            title: "advantage"
          },
          {
            id: "66",
             img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            videoUrl: "http://www.outesvilla.com/upload/admin/20181023/e7f3e6663c2c8a224058e4f7373887ec.mov",
            title: "advantage"
          }

        ]
      },

      menuList: [
        {
          id: "1",
          path: "/func1", //菜单项所对应的路由路径
          title: "功能1", //菜单项名称
          children: [
            {
              id: "11",
              path: "/func311",
              title: "功能31-1",
              children: []
            },
            {
              id: "12",
              path: "/func312",
              title: "功能31-2",
              children: []
            },
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
          title: "功能2",
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
    showVideo
    // pageRight
  },
  created() {
    console.log(555);
    var result = [];
    for(var i=0,len=this.listNavrightContent.right_list.length;i<len;i+=3){
      result.push(this.listNavrightContent.right_list.slice(i,i+3));
    }
    this.listNavrightContent.right_list = result;

  },
  mounted(){
    console.log(666);
    this.imgDetailShow = false;

  },

watch: {
      // $route(){
        // this.pjtid = this.$route.query.pjtid;
        // this.imgDetailShow = true;
      // },

},
  methods: {
    getUrl(img,id){
      // console.log(666);
      // console.log(img);
      // this.imgUrl = img;
      // this.imgDetailShow = true;
      // this.$router.push({name: this.$route.router, query: {id:id}});

      // this.videoUrlShow = true;
      // this.videoUrl = url;
    },
    changeLanguage() {
      if (this.lang === "zh") {
        this.lang = "en";
        addCookie("lang", this.lang);
        this.$i18n.locale = this.lang;
      } else {
        this.lang = "zh";
        addCookie("lang", this.lang);
        this.$i18n.locale = this.lang;
      }
    },
    handleSizeChange(size) {},
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },

    handleOpen(index, keyPath) {
      this.listIndex = index;
    },
    handleClose(key, keyPath) {},

    //选中右菜单的时候
    selectclick(index) {
      console.log(index);
      this.listIndex = index;
    },
    getId(id){
      console.log('====');
      console.log(id);
       this.id = id;
    }
  },
  mounted() {
     this.id = this.$route.query.id;
     this.imgDetailShow = false;

    //  this.$set(this.id ,this.$route.query.id);
  }
  // watch:{
  // id(curVal,oldVal){
  // 　　　　console.log(curVal,oldVal);
  // deep:true
  // 　　},
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less" >
// @import url(../../styles/common.less);
.listPage {
  height: 100%;
  width: 100%;
  .listPageMain {
    min-height: 1000px;
  }
  .displayN {
    display: none;
  }
  .el-pagination {
    width: 455px;
    margin: 0 auto;
  }
  // .webContain {
  //   margin-top: 40px;
  // }
  .Page {
    margin: 0 auto;
    margin: 70px 0;
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
  .listRightTit {
    border-bottom: 2px solid #8ec01f;
    margin: 0 !important;
  }

  .listTit {
    width: 116px;
    height: 40px;
    font-size: 22px;
    font-weight: bold;
    color: #8ec01f;
    line-height: 40px;
  }
  .listImg {
    // height: 100%;
    // width: 100%;
    width: 270px;
    height: 270px;
  }
  .right_list_item {
    margin-top: 30px;
    p {
      padding: 10px 0;
    }
  }
}
</style>
