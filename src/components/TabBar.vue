<template>
    <div class="tool-bar">
        <div class="tool-bar-item" v-for="(item,index) in toolBarData" :key="index" @click="changeMenu(item,index)">
            <img :src="[item.componentName == selectedMenu ? item.iconActived :item.icon]" alt="">
            <span :class="{'activedMenu':item.componentName == selectedMenu ? true :false}">{{item.name}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            //tab 菜单数据
            toolBarData:[
                {
                    name:'首页',
                    //  icon:require('../assets/img/toolBar/home-n.svg'),
                    icon:require('@img/toolBar/home-n.svg'),
                    iconActived:require('@img/toolBar/home-h.svg'),
                    componentName:'home'
                },
                {
                    name:'我的',
                    icon:require('@img/toolBar/my-n.svg'),
                    iconActived:require('@img/toolBar/my-h.svg'),
                    componentName:'my'
                },
                {
                    name:'购物车',
                    icon:require('@img/toolBar/shopping-n.svg'),
                    iconActived:require('@img/toolBar/shopping-h.svg'),
                    componentName:'shopping'
                },
            ],
            selectedMenu:'home'
        }
    },
    methods:{
      changeMenu(item,index){
        this.selectedMenu = item.componentName;
        this.$emit('changeMenu',item.componentName)
      }
    }
}
</script>
<style lang='scss' scoped>
@import '../assets/css/common';
.activedMenu{
    color:red
}
.tool-bar{
  position:fixed;
  bottom:0;
  width: 100%;
  height:56px;
  display:flex;
  background: #fff;
  box-shadow: 0 0 12px #ececec;
  padding:8px;
  border-top:1px solid #ececec;

  &-item{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width:20px;
      height:20px;
    }
    span{
      font-size:12px;
      margin-top:2px;
    }
  }
}
</style>