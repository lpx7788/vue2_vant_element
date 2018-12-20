<template>
  <div class="footer mainBgcolor colorW">
     <div class="webContain food_content textC">
       <p class="food_con_top">
          <span>{{$t("m.footer.food_con_top.friendLink")}}&nbsp;</span>:
          <a href="#">{{$t("m.footer.food_con_top.overseas")}}</a>
          <a href="#">{{$t("m.footer.food_con_top.shop")}}</a>
       </p>
       <p class="food_con_mid">
          <a href="#">{{$t("m.footer.food_con_mid.phoneStickers")}}<i>|</i></a>
          <a href="#">{{$t("m.footer.food_con_mid.phoneExternal")}}<i>|</i></a>
          <a href="#">{{$t("m.footer.food_con_mid.phonentroduced")}}<i>|</i></a>
          <a href="#">{{$t("m.footer.food_con_mid.leave")}}<i>|</i></a>
          <a href="#">{{$t("m.footer.food_con_mid.news")}}<i>|</i></a>
          <a href="#">{{$t("m.footer.food_con_mid.contact")}}</a>
          <a href="#"><img src="@/assets/chzz.png"></a>
          <a href="#"> Overseas business department</a>
       </p>
       <p class="food_con_bt">
          <span>{{$t("m.footer.food_con_bt.number")}}</span>,
          <a href="#">{{$t("m.footer.food_con_bt.company")}}</a>
          <a href="#"> Electronic Technology Inc. All Rights Reserved</a>
       </p>
     </div>
     <!-- <i @click="changeLanguage">changeLanguage</i> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      lang: "zh"
    };
  },
  methods: {
    changeLanguage() {
      if (this.lang === "zh") {
        this.lang = "en";
        this.$i18n.locale = this.lang;
      } else {
        this.lang = "zh";
        this.$i18n.locale = this.lang;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less" >
@import url(../styles/common.less);
.footer {
  width: 100%;
  // height: 140px;
  padding: 30px;
  font-size: 14px;
  // position: fixed;
  // bottom: 0;
  color: #fff !important;
  .food_content {
    p {
      line-height: 26px;
    }
    a {
      position: relative;
      color: #fff;
      margin: 0 8px 0 10px;

      i {
        .mix-y-center();
        top: 44%;
        right: -12px;
      }
    }
    .food_con_top {
      height: 30px;
      line-height: 30px;
      font-size: 15px;
    }
  }
}
</style>
