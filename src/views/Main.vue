<template>
  <div class="main">
    <!-- 通过tabBar 来切换显示不同的组件 -->
    <component :is="currentComp"></component>  
    <!--动态组件，is 指令指向需要展示的组件  -->
    <toolBar @changeMenu ='changeMenu'></toolBar>
  </div>
</template>

<script>
// @ is an alias to /src
import toolBar from '@comp/TabBar.vue'
export default {
  name: 'Main',
  components: {
    toolBar,
    // 异步组件的引入方式，异步组件：只有在需要展示组件的时候，引入渲染组件
    'home':()=>import('@comp/Home'),
    'my':()=>import('@comp/My.vue'),
    'shopping':()=>import('@comp/Shopping.vue'),
  },
  data(){
    return {
    currentComp:'home'

    }
  },
  methods:{
    changeMenu(val){
      console.log(val)
      this.currentComp = val;
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  width:100%;
  height:100%;
  font-size:20px;
}
</style>
