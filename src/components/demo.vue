<template>
  <div class="listPage">
    <van-button type="default" @click="btn()">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <p class="testDiv" style="background:#c00">我是测试div</p>
  </div>
</template>

<script>

export default {
  name: "listPage",
  data() {
    return {}
    },

  components: {
  },
  methods: {
    btn(){
      console.log(666);
    }
  },
}
</script>
<style scoped  lang="less" >
@import '../styles/function.less';
.testDiv{
  width: 100px;
  height: 100px;

}
</style>
