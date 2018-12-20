<template>
  <div class="headPage">
   <div class="head-logo webContain">
      <el-row type="flex" class="row-bg" justify="space-between">
      <el-col class="head headL">
        <div class="grid-content bg-purple">
          <img :src="$t('m.header.logo.logoImag')">
        </div>
      </el-col>
      <el-col  class="head headR headerTop"><div class="grid-content bg-purple"></div>
         <p class="langToggleText textC">
            <span @click="changeLanguage">中文</span>|
            <span @click="changeLanguage">英文</span>
         </p>
          <p class="headSearchWrap textC"><input type="search" class="headSearch"><i class="el-icon-search"></i></p>

      </el-col>
    </el-row>
   </div>
   <div class="nav mainBgcolor" >
      <ul class="navContainer clearfix">
          <li  class="Itme" v-for="(item,index) in  $t('m.header.nav')"  :key="item.nav_id">
              <router-link tag="a" :to="{path:routerArr[index],query:{nav_id:item.nav_id}}"   @click.native="changenav(index+1)"
              :class="{bgColor:'/'+$route.name==routerArr[index]||(index==0&&$route.name=='home')||$route.query.nav_id==item.nav_id}" >
              {{item.nav_title}}
              </router-link>
             <div class="levelItem" v-if="item.nav_level_item">
                 <router-link tag="a" class="itemA"   :to="{path:routerArr[index],query:{nav_id:i.nav_id}}"  v-for="i in item.nav_level_item" :key="i.nav_id" >{{i.nav_title}}</router-link>
             </div>
          </li>
        </ul>
   </div>
  </div>
</template>

<script>
import {getCookie, delCookie, addCookie} from '@/utils/cookie'
export default {
  name: "headPage",
  data() {
    return {
     lang: "zh",
     activeIndex: 1,
     routerArr:[
      '/',
      '/productList',
      '/news',
      // '/exhibitionStyle',
      '/videoPage',
      '/aboutUs',
      // '/authenticity',
      '/contactUs',
      ]
    };
  },
  methods: {
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    changenav(index){
      this.activeIndex = index;

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less" >
@import url(../styles/common.less);
.headPage{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  background: #fff;
  width: 100%;
  .navContainer{
    width: 910px;
    margin: 0 auto;
  }
  .bgColor{
       background: #787878 !important;
  }

  .headerTop{
    padding-top: 18px;
  }
  .langToggleText{
    span{
      // color: #979797;
      margin: 0 10px;
    }
    color:  #979797;
  }
  .headSearchWrap{
    position: relative;
    margin: 0 auto;
    width: 176px;
    margin-top: 17px;
      .headSearch{
        width:176px;
        height:30px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(200, 200, 200, 1);
        border-radius: 30px;
        border-color: #C8C8C8;
      }
      .el-icon-search{
        position: absolute;
        right: 18px;
        top:50%;
        transform: translate(0,-50%);
        color: #C8C8C8;
      }

  }

    .el-menu--horizontal {
    & > .el-menu-item {
      &.is-active {
        background: #787878 !important;
        border-bottom: none !important;
      }
    }
  }
  .homePage {
    height: 100%;
    width: 100%;
  }
  .levelItme {
    display: block;
    width: 142px;
    text-align: center;
  }
  .head-logo {
    height: 114px;
  }

  .nav {
    margin-top: 5px;
    width: 100%;
    height: 40px;
  }
  .head {

    height: 114px;
  }

  .Itme {
    height: 40px;
    line-height: 40px;
    float: left;
    display: inline-block;
    text-align: center;
    display: block;
    position: relative;
    .itemA{
      padding: 0 10px;
    }
    a{
      color: #fff;
      display: inline-block;
      padding: 0 40px;
      height: 100%;

    }
    &:hover {
      background: #787878 !important;
      .levelItem {
        display: block;
        a{
          width: 100%;
          padding: 0 10px;
        }
      }
    }
  }

  .el-menu--popup {
    width: 142px;
    display: block !important;
  }
  .levelItem {
    text-align: center;
    display: none;
    position: absolute;
    left: 0;
    width: 100%;
    background: rgba(120,120,120,1);
    z-index: 100000;
    text-align: center;

    a {
      color: #fff;
      display: block;

      &:hover{
        background: #8EC01F;
        color: #fff;
      }
    }
  }
  .el-carousel__item {
    h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }

  }
}




</style>
