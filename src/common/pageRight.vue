<template>
  <div class="listPage">
      <!-- <Head></Head> -->
      <!-- <Banner></Banner> -->
      <div class="listPageMain webContain">
        <el-row :gutter="30">

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

                <el-row :gutter="30">
                  <el-col :span="8" v-for="item in listNavrightContent.right_list" :key="item.id" class="right_list_item">
                    <div class="grid-content partnerItem bg-purple textC" >
                      <img class="listImg border" :src="item.img" alt="">
                      <p>{{item.title}}</p>
                    </div>
                  </el-col>
                </el-row>

            </div>
          </el-col>
        </el-row>
      </div>
      <!-- <Food></Food> -->
  </div>
</template>

<script>
import { getCookie, delCookie, addCookie } from "@/utils/cookie";
import Food from "@/common/footer";
import Head from "@/common/header";
import Banner from "@/common/banner";

export default {
  name: "listPage",
   props: {
    id:''
  },
  data() {
    return {
      lang: "zh", //当前语言种类
      currentPage: "", //当前页数
      listIndex: 1,
      listNavleftContent:{
        title:'产品介绍',
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
        }]
      },
    listNavrightContent:{
       title:' 保护贴系列',
       right_list: [
      {
        id: '55',
        img: 'http://duoduo.expomd.com/shop/article05922454920133115.png',
        title: '1050Branded'
      },
      {
        id: '56',
        img: 'http://duoduo.expomd.com/shop/article05922454920133115.png',
        title: 'advantage'
      },{
        id: '57',
        img: 'http://duoduo.expomd.com/shop/article05922454920133115.png',
        title: '1050Branded'
      },
      {
        id: '58',
        img: 'http://duoduo.expomd.com/shop/article05922454920133115.png',
        title: 'advantage'
      },{
        id: '59',
        img: 'http://duoduo.expomd.com/shop/article05922454920133115.png',
        title: '1050Branded'
      },
      {
        id: '60',
        img: 'http://duoduo.expomd.com/shop/article05922454920133115.png',
        title: 'advantage'
      },
      {
        id: '61',
        img: 'http://duoduo.expomd.com/shop/article05922454920133115.png',
        title: 'advantage'
      },{
        id: '62',
        img: 'http://duoduo.expomd.com/shop/article05922454920133115.png',
        title: '1050Branded'
      },
      {
        id: '63',
        img: 'http://duoduo.expomd.com/shop/article05922454920133115.png',
        title: 'advantage'
      },{
        id: '64',
        img: 'http://duoduo.expomd.com/shop/article05922454920133115.png',
        title: '1050Branded'
      },
      {
        id: '65',
        img: 'http://duoduo.expomd.com/shop/article05922454920133115.png',
        title: 'advantage'
      },
      {
        id: '66',
        img: 'http://duoduo.expomd.com/shop/article05922454920133115.png',
        title: 'advantage'
      }
      ]
     },

    };
  },
  components: {
    Food,
    Head,
    Banner
  },
  methods: {
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
    handleSizeChange(size) {
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },

    handleOpen(index, keyPath) {
      this.listIndex = index;
    },
    handleClose(key, keyPath) {
    },

    //选中右菜单的时候
    selectclick(index) {
      console.log(index);
      this.listIndex = index;

    }
  },
  mounted(){
    console.log('00yyyy');
    console.log(this.id);
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less" >
@import url(../../styles/common.less);
.listPage {
  height: 100%;
  width: 100%;
  .listPageMain{
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
  .listleftImg{
    background:rgba(142,192,31,1);height:400px;
  }
  .listleft {
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
  .listRightTit {
    border-bottom: 2px solid #8EC01F;
    margin: 0 !important;
  }

  .listTit {
    width: 116px;
    height: 40px;
    font-size: 22px;
    font-weight: bold;
    color: #8EC01F;
    line-height: 40px;
  }
  .listImg{
    // height: 100%;
    // width: 100%;
    width:270px;
    height:270px;
  }
  .right_list_item{
    margin-top: 30px;
    p{
      padding: 10px 0;
    }
  }

}
</style>
