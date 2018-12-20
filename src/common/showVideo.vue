<template>
  <div class="videoPage" v-show="isShow">
      <div id="addVideo" style="">
        <p class="bg" id="VideoCancel" @click="closeClick"></p>
        <div class="video_cont ">
            <video width="1200px" height="657px" :src="videoUrl" controls="controls" v-if="videoUrl">   </video>
            <video v-else width="1200px" height="657px" src="http://www.outesvilla.com/upload/admin/20181023/e7f3e6663c2c8a224058e4f7373887ec.mov" controls="controls">
            </video>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoPage",
  data() {
    return {
      videoUrl:'',
      isShow:true,
    };
  },
  methods: {
    closeClick () {
      this.isShow = false;
      // this.$emit('input', this.isShow);
    },
  }
};
</script>

<style scoped  lang="less" >
.videoPage {
  margin-top: 159px;
  #addVideo{
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1000001;
    top: 0;
    .bg{
      height: 100%;
      width: 100%;
      position: absolute;
      background: #000000;
      opacity: 0.5;
    }
  }
  .video_cont {
    margin: 0 auto;
    display: inline-block;
    height: 100%;
    padding: 0;
    height: 657px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .videoImg {
    height: 556px;
    width: 100%;
  }
}
</style>
