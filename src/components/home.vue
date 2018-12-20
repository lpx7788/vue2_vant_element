<template>
  <div class="homePage">
     <!-- {{$t("m.footer.food_con_bt.number")}} -->
      <Head></Head>
      <Banner></Banner>
      <div class="homeMain webContain">

        <div class="mt40">
          <el-row :gutter="20">
            <el-col :span="6" v-for="item in homePageContent.goodList" :key="item.id" >
              <div class="bg-purple">
                <h3>
                  {{item.tit}}
                  <!-- <span class="fr"><a>{{$t('m.More')}}>></a></span> -->
                  <router-link class="fr" tag="a" :to="{path:'productList',query:{id:item.id,nav_id:''}}"> <span >{{$t('m.More')}}>> </span></router-link>

                </h3>
                <div class="goodListContent ">
                  <img class="goodListImg" :src="item.img" alt="">
                  <div class="goodCon">
                    <p v-for="(i,idx) in item.textList" :key="idx"><i class="el-icon-arrow-right maincolor"></i><span  @click="toDetailPage(i.id)">{{i.tit}}</span></p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="mt40">
          <el-row :gutter="20">
            <el-col :span="14"><div class=" bg-purple">
              <img src="../assets/banner_m1.png" alt="">
              </div></el-col>
            <el-col :span="10"><div class=" bg-purple">
              <img src="../assets/banner_m2.png" alt="">
              </div></el-col>
          </el-row>
        </div>

         <!-- 小轮播图 -->
       <div class="mt40">
        <h3>
          {{homePageContent.smallBanner.title}}
        </h3>
        <el-row>
          <el-col :span="24">
            <template>
            <el-carousel :interval="5000" height="200px" arrow="always" >
              <el-carousel-item v-for="item in homePageContent.smallBanner.list" :key="item.id">
                <img class="smallBannerImg" :src="item.img" alt="">
              </el-carousel-item>
            </el-carousel>
          </template>
          </el-col>
        </el-row>
      </div>


      <!-- 关于我们 -->
       <div class="aboutUs mt40" >
        <el-row :gutter="20">
          <el-col :span="17">
            <div class="newsLift bg-purple">
               <h3>
                 {{homePageContent.aboutUs.title}}
                 <!-- <span class="fr"><a>{{$t('m.More')}}>></a></span> -->
                  <router-link class="fr" tag="a" :to="{path:'aboutUs',query:{nav_id:''}}"> <span >{{$t('m.More')}}>> </span></router-link>
               </h3>

              <!-- 关于我们左侧 -->
               <div class="aboutUsLeftCon">
                 <el-row :gutter="20">
                  <el-col :span="24" >
                    <div class="aboutUsLeftitem bg-purple">
                      <el-row :gutter="20">
                        <el-col :span="10">
                          <div class="bg-purple">
                            <img class="aboutUsLiftImg" :src="homePageContent.aboutUs.aboutUsLift.img" alt="">
                          </div>
                        </el-col>
                        <el-col :span="14" style="padding-left:0;">
                          <div class="bg-purple">
                            <div class="con">{{homePageContent.aboutUs.aboutUsLift.content}}</div>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
               </div>
            </div>
          </el-col>

           <!-- 关于我们右侧 -->
          <el-col :span="7"  >
            <div class="newsRight bg-purple " >
              <a href="#" class="aboutUsRightImg"  ><img :src="homePageContent.aboutUs.aboutUsLift.imgRight" alt=""></a>
            </div>
          </el-col>

        </el-row>
       </div>


       <!-- 新闻 -->
       <div class="news mt40">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="newsLift bg-purple">
               <h3>
                 {{homePageContent.news.title}}

                   <!-- <router-link  tag="a" :to{path:'news'}>{{$t('m.More')}}>></router-link> -->
                     <router-link class="fr" tag="a" :to="{path:'news',query:{nav_id:''}}"> <span >{{$t('m.More')}}>> </span></router-link>


               </h3>

              <!-- 新闻左侧 -->
               <div class="newsLeftCon">
                 <el-row :gutter="20">
                  <el-col :span="8" v-for="item in homePageContent.news.newsLift" :key="item.id">
                    <div class="newsLeftitem bg-purple">
                      <el-row :gutter="20">
                        <el-col :span="10">
                          <div class="bg-purple">
                            <img class="newsLiftImg" :src="item.img" alt="">
                          </div>
                        </el-col>
                        <el-col :span="14">
                          <div class="bg-purple">
                            <p class="tit">{{item.title}}</p>
                            <div class="con">{{item.content}}</div>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
               </div>
            </div>
          </el-col>

           <!-- 新闻右侧 -->
          <!-- <el-col :span="7" >
            <div class="newsRight bg-purple " >
              <a href="#" class="newsRightImg" v-for="item in homePageContent.news.newsRight" :key="item.id" ><img :src="item.img" alt=""></a>
            </div>
          </el-col> -->

        </el-row>
       </div>

        <!-- 合作伙伴 -->
       <div class="parter mt40">
         <h3>{{homePageContent.partner.title}}</h3>
          <el-row :gutter="14">
            <el-col :span="4" v-for="item in homePageContent.partner.partnerList" :key="item.id">
              <div class="partnerItem bg-purple" >
                <img class="partnerImg" :src="item.img" alt="">
              </div>
            </el-col>
          </el-row>
       </div>


      </div>
      <Food></Food>
  </div>
</template>

<script>
import {getCookie, delCookie, addCookie} from '@/utils/cookie'
import Food  from '@/common/footer';
import Head from '@/common/header';
import Banner  from '@/common/banner';

export default {
  name: 'homePage',
  data () {
    return {
     lang:'zh',
    homePageContent:{
        goodList: [
          {
            tit:'Protective film',
            id: '7',
            img: 'http://adop.lcjzm.com/assets/home_01.png',
            textList:[
              {
                id:131,
                tit:'WE brand HD anti-fingerprint film'
              },
              {
                 id:132,
                tit:'World Cup Metal Frame + Flag ...'
              },
              {
                 id:133,
                tit:'TEMPERED GLASS 0.15mm glass ...'
              },
              {
                id:134,
                tit:'THIN GLASS 0.3mm ultra-thin ...'
              },
              {
                id:135,
                tit:'PRIVACY SERIES bulletproof series'
              },

            ]
          },{
            tit:'Mobile phone shell',
            id: '71',
            img: 'http://adop.lcjzm.com/assets/home_02.png',
            textList:[
              {
                id:101,
                tit:'IPHONE5 free heart series...'
              },
              {
                id:102,
                tit:'LUXURY SERITS rear luxury ...'
              },
              {
                id:103,
                tit:'OAK SERIES Oak System'
              },
              {
                id:104,
                tit:'IPHONE FRAME Invisible Gold ...'
              },
              {
                id:105,
                tit:'Colorful sports series'
              },


            ]



          },{
            tit:'Audiovisual',
            id: '72',
            img: 'http://adop.lcjzm.com/assets/home_03.png',

            textList:[
              {
                id:61,
                tit:'EARPHONE black and white ...'
              },
              {
                id:62,
                tit:'EARPHONE GALA top fever ...'
              },
              {
                id:63,
                tit:'SPEAKER speaker'
              },
              {
                id:64,
                tit:'EARPHONE pink yellow headphones'
              },
              {
                id:65,
                tit:'EARPHONE headset'
              },

            ]
          },{
            tit:'Mobile power',
            id: '73',
            img: 'http://adop.lcjzm.com/assets/home_04.png',

             textList:[
              {
                id:51,
                tit:'WE brand HD anti-fingerprint film'
              },
              {
                id:52,
                tit:'World Cup Metal Frame + Flag ...'
              },
              {
                id:53,
                tit:'TEMPERED GLASS 0.15mm glass ...'
              },
              {
                id:54,
                tit:'THIN GLASS 0.2mm ultra-thin ...'
              },
              {
                id:55,
                tit:'PRIVACY SERIES bulletproof series'
              },

            ]
          }
        ],
        smallBanner: {
          title:'Technical advantages',

          list:[
          {
            id: '90',
            img: 'http://adop.lcjzm.com/assets/cnindex2011_12.png',
          },{
              id: '91',
            img: 'http://adop.lcjzm.com/assets/cnindex2011_12.png',
          },{
            id: '92',
            img: 'http://adop.lcjzm.com/assets/cnindex2011_12.png',
          },{
            id: '93',
            img: 'http://adop.lcjzm.com/assets/cnindex2011_12.png',
          }
        ]
        },
      aboutUs:{
        title:' About us',

        aboutUsLift:{
              id: '55',
              img: 'http://adop.lcjzm.com/assets/about01_03.png',
              imgRight: 'http://adop.lcjzm.com/assets/weChat_h.png',
              content:"Puya International Group is mainly engaged in operating brands. Its main brand [adpo Adipu] has been rated as one of the top 100 brands in Asia. It is one of the domestic professional sales, R&D and production of mobile phone accessories service providers. Since its establishment in 2003, it has been firmly rooted in the industry for 12 years, based on domestic and global markets, and its markets are spread across Europe, America and Southeast Asia. In 2011, the company expanded its..franchise business, and more than 100 stores across the country, and jointly established the industry O2O model with the 1050vip.com digital mall, and obtained the first round of financing of 20 million by Fule Capital. It was listed on the ......"
            },
        // aboutUsRightImg:'http://adop.lcjzm.com/assets/home_03.png'
      },

      news:{
          title:' Industry news',

          newsLift: [
            {
              id: '55',
              img: 'http://adop.lcjzm.com/assets/goods1.png',
              title:'Headlines Headlines...',
              content:'Article details is Article details is Article details is Article details is Article  Article details is Article details is Articles Article details is Article details is Article details is Article  Article details is Article details is Article'
            },
            {
              id: '56',
              img: 'http://adop.lcjzm.com/assets/goods1.png',
              title:'Headlines Headlines...',
              content:'Article details is Article details is Article details is Article details is Article  Article details is Article details is Articles Article details is Article details is Article details is Article  Article details is Article details is Article.'
            },{
              id: '57',
              img: 'http://adop.lcjzm.com/assets/goods1.png',
              title:'Headlines Headlines...',
              content:'Article details is Article details is Article details is Article details is Article  Article details is Article details is Articles Article details is Article details is Article details is Article  Article details is Article details is Article.'
            },{
              id: '58',
              img: 'http://adop.lcjzm.com/assets/goods1.png',
              title:'Headlines Headlines...',
              content:'Article details is Article details is Article details is Article details is Article  Article details is Article details is Articles Article details is Article details is Article details is Article  Article details is Article details is Article.'
            },{
              id: '59',
              img: 'http://adop.lcjzm.com/assets/goods1.png',
              title:'Headlines Headlines...',
              content:'Article details is Article details is Article details is Article details is Article  Article details is Article details is Articles Article details is Article details is Article details is Article  Article details is Article details is Article.'
            },{
              id: '60',
              img: 'http://adop.lcjzm.com/assets/goods1.png',
              title:'Headlines Headlines...',
              content:'Article details is Article details is Article details is Article details is Article  Article details is Article details is Articles Article details is Article details is Article details is Article  Article details is Article details is Article.'
            }
          ],
          newsRight: [
            {
              id: '106',
              img: 'http://adop.lcjzm.com/assets/home_03.png',
            },{
              id: '107',
              img: 'http://adop.lcjzm.com/assets/home_03.png',
            },{
              id: '1108',
              img: 'http://adop.lcjzm.com/assets/home_03.png',
            }
          ]
        },
      partner:{
        title:' Partner',
        partnerList: [
        {
          id: '55',
          img: 'http://adop.lcjzm.com/assets/home_03.png',

        },
        {
          id: '56',
          img: 'http://adop.lcjzm.com/assets/home_03.png',

        },{
          id: '57',
          img: 'http://adop.lcjzm.com/assets/home_03.png',

        },
        {
          id: '58',
          img: 'http://adop.lcjzm.com/assets/home_03.png',
          title: 'advantage'
        },{
          id: '59',
          img: 'http://adop.lcjzm.com/assets/home_03.png',

        },
        {
          id: '60',
          img: 'http://adop.lcjzm.com/assets/home_03.png',

        },
        {
          id: '61',
          img: 'http://adop.lcjzm.com/assets/home_03.png',

        },{
          id: '62',
          img: 'http://adop.lcjzm.com/assets/home_03.png',

        },
        {
          id: '63',
          img: 'http://adop.lcjzm.com/assets/home_03.png',
          title: 'advantage'
        },{
          id: '64',
          img: 'http://adop.lcjzm.com/assets/home_03.png',

        },
        {
          id: '65',
          img: 'http://adop.lcjzm.com/assets/home_03.png',

        },
        {
          id: '66',
          img: 'http://adop.lcjzm.com/assets/home_03.png',

        }

        ]
      }
     },
    }
  },
  components: {
    Food,
  Head,
  Banner
  },
   methods: {
    toDetailPage(id){
      console.log(id);
      this.$router.push({name: 'detailPage', query: {nav_id:this.$route.query.nav_id,id:id}})
    },
    changeLanguage() {
      if ( this.lang === 'zh' ) {
          this.lang = 'en';
          addCookie('lang', this.lang);
          this.$i18n.locale = this.lang;
       }else {
          this.lang = 'zh';
          addCookie('lang', this.lang);
          this.$i18n.locale = this.lang;
       }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less" >
@import url(../styles/common.less);
.homePage{
  height: 100%;
  width: 100%;
  .homeMain{
    margin-bottom: 70px;
  }
  .goodListContent{

    margin-top: 6px;
    overflow: hidden;
    .goodCon{
        border: 1px solid rgba(143, 195, 32, 1);
        border-top: 1px solid #eeee;
        margin-top: -5px;
        padding: 12px 10px;
        p{
          height:25;
          line-height:25px;
          .mix-text-overflow();
          a{
            color: #333;
            font-size: 14px;
            &:hover{
              color: rgba(143, 195, 32, 1);
            }
          }

        }
    }

    .goodListImg{

      width:270px;
      height:172px;
    }
  }
  .aboutUs{
    .con{
      padding: 10px 0;
      color: #5e5d5d;
      line-height: 23px;
      font-size: 15px;
    }
    .aboutUsLiftImg{
      width: 320px;
      height: 250px;
      margin-top: 10px;
    }
    .aboutUsRightImg{
      img{
        width: 320px;
        height: 297px;
      }
    }

  }
  .smallBannerImg{
    height: 100%;
    width: 100%;
  }
  .news{
    .newsRight{
      padding:1px 20px 30px 20px;
      background: rgba(240,240,240,1);
    }
    .newsLeftitem{
      margin-top: 20px;
    }
    .newsLeftCon{
      .tit{
        .mix-text-overflow();
        font-size: 16px;
        color: #333;
      }
      .con{
        .ellipsis-line(@line: 4);
        font-size: 14px;
        color: #5e5d5d;
        margin-top: 10px;
      }
    }
    .newsLiftImg{
      width: 145px;
      height: 120px;
    }
    .newsRightImg{
      height: 67px;
      width: 285px;
      margin-top: 30px;
      display: block;
      img{
        height: 67px;
        width: 285px;
      }
    }
  }
  .smallBanner{
    height: 100px;
    background: #c00;
    width:100%;
  }
  .grid-content{
    background: #c00;
  }

  .el-row {
    margin-top: 1px;
  }
  h3{
    background: linear-gradient(#f6f6f6, #e2e2e2);
    line-height: 40px;
    height: 40px;
    color: #5A5A5A;
    padding: 0 10px;
    font-size: 18px;
    span{
      font-size: 14px;
      color: #5A5A5A;
    }
  }
  .partnerImg{
    width:100%;
    height:80px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(230, 230, 230, 1);
     margin-top: 28px;
  }
}

</style>
