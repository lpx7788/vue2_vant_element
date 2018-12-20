<template>
    <div  >
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          mode="vertical"
          background-color="#fff"
          text-color="#333"
          active-text-color="#8EC01F"
          @select="selectclick"
          :default-active="$route.query.id+''?$route.query.id+'':(menuList[0].children.length==0?menuList[0].id+'':menuList[0].children[0].id+'')"
          unique-opened:true
          :default-openeds="openeds">
      <p></p>
        <sidebar-item v-for="menu in menuList" :key="menu.path" :item="menu" :id="id" />
      </el-menu>
    </el-scrollbar>

    </div>

</template>
<script>

import SidebarItem from './SidebarItem'

export default {
  name:'Sidebar',
  components: { SidebarItem },
  props:{
    menuList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      id:1,
      openeds:['1']
    }
  },
  created(){

    //  this.$router.push({name: this.$route.router, query: {id: this.menuList[0].id}})
  },
  methods:{
    selectclick(num){
      console.log(num);
      this.id = num;
      this.$router.push({name: this.$route.router, query: {nav_id:this.$route.query.nav_id,id:num}})
      // this.$emit('getId', this.id)
    }
  }
}
</script>
<style lang="less">
.listPage {
  a{
    color: #333;
  }
  color: #333;
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
