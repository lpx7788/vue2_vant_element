<template>
  <div class="bannerPage">
   <div class="banner">
       <el-carousel :interval="5000" arrow="always" height="556px">
        <el-carousel-item v-for="item in $t('m.banner.banner_list')" :key="item.id">
           <img class="bannerImg" :src="item.banner_img">
          <h3> {{item.banner_title}}</h3>
        </el-carousel-item>
      </el-carousel>
   </div>
  </div>
</template>

<script>
export default {
  name: "bannerPage",
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped  lang="less" >
.bannerPage{
  margin-top:159px;
  .bannerImg{
    height: 556px;
    width: 100%;
  }
}
</style>
