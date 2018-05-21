<template>
    <div>
        <div class="head"><!--顶部大图片 -->
            <img :src="message" />
        </div>
        <div class="navs">
            <ul>
                <li>首页</li>
                <li>我是学生</li>
                <li>我是单位</li>
                <li>我是教师</li>
                <li>了解学校</li>
                <li>关于我们</li>
                <li>学校主页</li>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    props: {
      message: String  //定义传值的类型<br>   
    },
    data() {
      return {
       
       
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
a{ text-decoration: none; }
ul { list-style-type: none;padding: 0; }
.head{
  width:980px;margin:6px auto;
}
.navs{
    height: 40px;
    background-color:#29628f;
    color: #fff;
}
.navs ul{
    width:980px;
    margin:0 auto;
}
.navs li{
    float: left;
    padding: 10px 25px;
    border-right: solid 1px #a6a7fc;
}
.navs li:last-child{
    border-right:none;
}
</style>
