<template>
    <div class="inst">
        <div class="title">
            欢迎用人单位选聘我校在校生
        </div>
        <div class="instrument">
            <ul>
                <li><a href=""><img src="/static/img/fz3_lianjie1.png" /><span>学院介绍</span></a></li>
                <li><a href=""><img src="/static/img/fz3_lianjie2.png" /><span>招聘指南</span></a></li>
                <li><a href=""><img src="/static/img/fz3_lianjie3.png" /><span>院系介绍</span></a></li>
                <li><a href=""><img src="/static/img/fz3_lianjie4.png" /><span>生源信息</span></a></li>
            </ul>          
        </div>
    </div>
</template>
<script>
export default {
    name:"inst",
    data() {
      return {
        
      };
    },
    methods: {
      
    }
}
</script>
<style scoped>
a{ text-decoration: none; }
ul{ list-style-type:none;margin:0;}
.inst{
    height:160px;
    width: 298px;
    margin-top:10px; 
    border: #ddd 1px solid;
    background-color: #e8f3f9;
    font-size: 14px;
}
.title{
    height: 40px;
    background-color: #3d71a0;
    padding:0px 20px;
    line-height:40px;
    color: #fff;
}
.instrument{
    background-color: #e8f3f9;
    color: #32709f;
}
.instrument a{
    color: #32709f;
}
.instrument img{
    margin-top: 10px;
}
.instrument ul{
    padding: 0 20px;
    margin-top: 10px;
}
.instrument li{
    float: left;
    padding:0px 10px;
    
}
.instrument span{
    display: inline-block;
    padding:0px 6px 20px 6px;
vertical-align: middle;
}

</style>
