<template>
    <div>
        <div class="head"><!--顶部大图片 -->
            <img :src="message" />
        </div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#3574bd"
          text-color="#fff" active-text-color="#fdd76e" >
  <el-menu-item index="1"><router-link to="/">主页</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">学生</template>
    <el-menu-item index="2-1">就业信息</el-menu-item>
    <el-menu-item index="2-2">职业辅导</el-menu-item>
    <el-menu-item index="2-3">就业手续</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">就业新闻</template><!--选项4-->
      <el-menu-item index="2-4-1"><router-link to="/contains">新闻快递</router-link></el-menu-item>
      <el-menu-item index="2-4-2"><router-link to="/contains">通知公告</router-link></el-menu-item>
      <el-menu-item index="2-4-3"><router-link to="/contains">校内公示</router-link></el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-submenu index="3">
    <template slot="title">单位</template>
    <el-menu-item index="3-1">了解学校</el-menu-item>
    <el-menu-item index="3-2">发布信息</el-menu-item>
  </el-submenu>
  <el-submenu index="4">
    <template slot="title">教师</template>
    <el-menu-item index="4-1">就业内参</el-menu-item>
    <el-menu-item index="4-2">课程教学</el-menu-item>
    <el-menu-item index="4-3">常用链接</el-menu-item>
  </el-submenu>
  <el-menu-item index="5">关于我们</el-menu-item>
  <el-menu-item index="6">学工网</el-menu-item>
  <el-menu-item index="7">职业测评</el-menu-item>
</el-menu>
    </div>
</template>
<script>
export default {
    props: {
      message: String  //定义传值的类型<br>   
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style >
.head{
  width:980px;margin:6px auto;
}
</style>
