<template>
  <div class="listPage">
    <van-button type="default" @click="btn()">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <p class="testDiv" style="background:#c00">我是测试div</p>
   <div class="test1">
         <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
   </div>
   <div class="test2">
         <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
   </div>
  </div>
</template>

<script>

export default {
  name: "listPage",
  data() {
    return {
      activeName: 'second'
    }
    },

  components: {
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
      },
    btn(){
      console.log(666);
    }
  },
}
</script>
<style scoped  lang="less" >
@import '../styles/function.less';

  // .test1 /deep/ .el-tabs__nav-wrap::after{
  //   background-color: none !important;
  // }
.testDiv{
  width: 100px;
  height: 100px;

}

</style>
