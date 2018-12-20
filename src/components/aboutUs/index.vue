<template>
  <div class="listPage">
      <Head></Head>
      <Banner></Banner>
  <div class="listPageMain webContain">
      <el-row :gutter="30">

          <!-- 左侧 -->
          <el-col :span="6" style="padding-right:0">
            <div class=" bg-purple">
               <el-row class="tac">
                <el-col :span="21" class="listleft">
                  <h5 class="leftTit textC">ABOUT US</h5>
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

           <el-col :span="18" class="listRight"  style="padding:0px ;">
            <div class=" bg-purple">
              <el-row :gutter="30" style="margin-top:0;" class="listRightTit">
                    <el-col :span="10" style="padding:0;">
                      <span class="listTit"> {{listNavrightContent.title}}</span>
                    </el-col>
                    <el-col :span="14" style="padding:0;">
                    <el-breadcrumb separator-class="el-icon-arrow-right">

                      <el-breadcrumb-item>     <i class="el-icon-caret-right maincolor"></i>Position：</el-breadcrumb-item>
                      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
                      <el-breadcrumb-item>About Us</el-breadcrumb-item>

                    </el-breadcrumb>
                    </el-col>
                </el-row>

                <el-row :gutter="30">


                   <el-col :span="24" class="right_list_item" v-if="indexId==1">
                     <div class="grid-content partnerItem bg-purple ">
                      <p style="line-height:25px;">POLVA INTERNATIONAL GROUP LIMITED is one of international professional LCD protector manufacturers,which is under the Polva international group in Hong Kong.We have professional R&D grop and advanced technology system imported from Japan.We all apply our energies to take study and research on the ADPO,to be the perfect protective solutions for LCD. In 2010,MirrorWard,SkinWard and PrivacyWard have been the registered trademard of the company.
The revenues of the company have climbed from $20 million to $50 million since 2003. The company bases itself on domestic market, faces international market, enhances the development, and has been exeptionally strong in recent years.The company's products even sell far to North America, South America, West Europe and middle Eastern.
In response to the new business concept,which is that the enterprise's future lies in the value of design, Polva built Polva- ADPO International Design Center,to guide a new corporate image and create a unique culture.
 。</p>
                    </div>
                 </el-col>

                   <el-col :span="24" class="right_list_item" v-if="indexId==2" >
                     <div class="grid-content partnerItem bg-purple ">
                      <p> Adipu brand has: 6 exclusive core technologies, 7 patented technologies and products, 8 processes and 9 years of operation, which allows us to lead the development of the screen protector film industry. Adipu is a symbol of high-quality screen protector film. The raw materials are made of imported PET and AR materials from Japan. The products include ScreenWard HD stickers, ScreenWard anti-fingerprint stickers, MirrorWard mirror stickers, SkinWard body stickers, PrivacyWard anti-spy stickers, CarvenWard extraordinary laser carvings. , exclusive, SkinWard tideside stickers, 7-year series, 8-year series, 9-year series and 10-year series, and other derivative products include iphone music eggs, apple storage treasures, iphone mobile phone sets and other personalized fashion products.
Adipu brand has: 6 exclusive core technologies, 7 patented technologies and products, 8 processes and 9 years of operation, which allows us to lead the development of the screen protector film industry. Adipu is a symbol of high-quality screen protector film. The raw materials are made of imported PET and AR materials from Japan. The products include ScreenWard HD stickers, ScreenWard anti-fingerprint stickers, MirrorWard mirror stickers, SkinWard body stickers, PrivacyWard anti-spy stickers, CarvenWard extraordinary laser carvings. , exclusive, SkinWard tideside stickers, 7-year series, 8-year series, 9-year series and 10-year series, and other derivative products include iphone music eggs, apple storage treasures, iphone mobile phone sets and other personalized fashion products.
</p>
                    </div>
                 </el-col>

                   <el-col :span="24" class="right_list_item" v-if="indexId==3" >
                     <div class="grid-content partnerItem bg-purple ">
                      <p> Adipu brand has: 6 exclusive core technologies, 7 patented technologies and products, 8 processes and 9 years of operation, which allows us to lead the development of the screen protector film industry. Adipu is a symbol of high-quality screen protector film. The raw materials are made of imported PET and AR materials from Japan. The products include ScreenWard HD stickers, ScreenWard anti-fingerprint stickers, MirrorWard mirror stickers, SkinWard body stickers, PrivacyWard anti-spy stickers, CarvenWard extraordinary laser carvings. , exclusive, SkinWard tideside stickers, 7-year series, 8-year series, 9-year series and 10-year series, and other derivative products include iphone music eggs, apple storage treasures, iphone mobile phone sets and other personalized fashion products.
</p>
                    </div>
                 </el-col>

                   <el-col :span="24" class="right_list_item" v-if="indexId==4" >
                     <div class="grid-content partnerItem bg-purple ">
                      <p> Adipu brand has: 6 exclusive core technologies, 7 patented technologies and products, 8 processes and 9 years of operation, which allows us to lead the development of the screen protector film industry. Adipu is a symbol of high-quality screen protector film. The raw materials are made of imported PET and AR materials from Japan. The products include ScreenWard HD stickers, ScreenWard anti-fingerprint stickers, MirrorWard mirror stickers, SkinWard body stickers, PrivacyWard anti-spy stickers, CarvenWard extraordinary laser carvings. , exclusive, SkinWard tideside stickers, 7-year series, 8-year series, 9-year series and 10-year series, and other derivative products include iphone music eggs, apple storage treasures, iphone mobile phone sets and other personalized fashion products.
。</p>
                    </div>
                 </el-col>

                   <el-col :span="24" class="right_list_item" v-if="indexId==5" >
                     <div class="grid-content partnerItem bg-purple ">
                      <p> Established in 2003, Adipu Brand (Puya Electronics) is the only company in the industry that has been insisting on screen-protecting film for only 9 years. It is the earliest well-known screen protector film integrating development, design, production and sales in China. Business. Its three subsidiaries, five brands, more than 20 provinces and cities across the country have agents, more than 2,000 channel terminal stores, and become long-term partners of HTC, Canon, Olympus, Samsung and other international companies. It has many years of cooperation with raw material manufacturers such as Japan and Taiwan, and has received strong support from suppliers and new product development and sales priorities. It has Japan's original processing and production equipment as well as complete dust-free production line and screen film 6 core exclusive technology, 7 patents, 8 processes and 9 years of operating experience. Its Adipu brand computer screen protector film, mobile phone screen protector film and other products are particularly favored by the market, the products are exported to North America, Western Europe, the Middle East and South Asia and other countries and regions; more than 20 provinces and cities and ports in the country And the majority of users in the Australian region;
Adipu brand (Puya Electronics) has always adhered to the business philosophy of "people-oriented, innovation as the source, quality first", and always regards talent, innovation and quality as the core of the business philosophy.
Talents: Adipu brand (Puya Electronics) has established a perfect employment mechanism and a highly competitive salary system, and has absorbed a group of senior management and sales talents with professional quality and professionalism, as well as production and management expertise. Talent.
Innovation: Adipu brand (Puya Electronics) has been adhering to the line of fashion, branding, functionalization, environmental protection and humanization. The quality of products is strictly controlled. In the design, the aesthetic needs of fashion and practicality are gradually formed. Exquisite and elegant, stylish and atmospheric product style, professionally create high-quality, stylish and perfect screen protector series products, which are highly popular among users.
Quality: Adipu brand (Puya Electronics) not only pays attention to the quality of the product itself, but also attaches great importance to the quality of service. Puya Electronics has established a complete set of strict and effective quality management system and passed the ISO9001 international quality management system certification. In the use of materials for work, design styles and strive to high standards, with production and production process and 8 screening process, making "adpo" become the first brand of China's screen protector film advocated by the majority of users, mobile phone film industry famous brand.

</p>
                    </div>
                 </el-col>

                </el-row>




            </div>
             <!-- 分页 -->
             <div class="Page"  style="display:none">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  background
                  layout="prev, pager, next"
                  :total="1000">
                </el-pagination>
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
import Sidebar from "@/common/SideBar/SideBar";
// import pageRight from "@/components/productList/pageRight.vue";
export default {
  name: "listPage",
  data() {
    return {
      lang: "zh", //当前语言种类
      currentPage: "", //当前页数
      listIndex: 1,
      indexId: 1,

      listNavrightContent: {
        title: " 保护贴系列",
        right_list: [
          {
            id: "55",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: "1050Branded"
          },
          {
            id: "56",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: "advantage"
          },
          {
            id: "57",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: "1050Branded"
          },
          {
            id: "58",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: "advantage"
          },
          {
            id: "59",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: "1050Branded"
          },
          {
            id: "60",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: "advantage"
          },
          {
            id: "61",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: "advantage"
          },
          {
            id: "62",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: "1050Branded"
          },
          {
            id: "63",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: "advantage"
          },
          {
            id: "64",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: "1050Branded"
          },
          {
            id: "65",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: "advantage"
          },
          {
            id: "66",
            img: "http://duoduo.expomd.com/shop/article05922454920133115.png",
            title: "advantage"
          }
        ]
      },

      menuList: [
        {
          id: "1",
          path: "/func1", //菜单项所对应的路由路径
          title: "About Us", //菜单项名称
          children: [
            // {
            //   id: "11",
            //   path: "/func311",
            //   title: "公司介绍",
            //   children: []
            // },
            // {
            //   id: "12",
            //   path: "/func312",
            //   title: "行业优势",
            //   children: []
            // },
            // {
            //   id: "11",
            //   path: "/func311",
            //   title: "公司介绍",
            //   children: []
            // },
            // {
            //   id: "12",
            //   path: "/func312",
            //   title: "行业优势",
            //   children: []
            // },
          ]
        },
        {
          id: "2",
          path: "/func3",
          title: "FAQ",
          children: []
        },
        {
          id: "3",
          path: "/func4",
          title: "OEM/ODM",
          children: []
        },
        {
          id: "4",
          path: "/fun5",
          title: "Hot Bending 3D Glass",
          children: []
        },
        {
          id: "5",
          path: "/func6",
          title: "2.5D Glass",
          children: []
        }
      ]
    };
  },
  components: {
    Food,
    Head,
    Banner,
    Sidebar
    // pageRight
  },
  created() {},
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
      this.listIndex = index;
    },
    getId(id) {
      console.log("====");
      this.indexId = id;
      console.log(this.indexId);
    }
  },
  mounted() {
    this.id = this.$route.query.id;
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
@import url(../../styles/common.less);
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
      line-height: 25px;
    }
  }
}
</style>
