<template>
    <div class="inst">
        <div class="title">
            学生就业服务平台
        </div>
        <div class="instrument">
            <ul>
                <li><a href=""><img src="/static/img/fz3_lianjie5.png" /><span>创业实战模拟</span></a></li>
                <li><a href=""><img src="/static/img/fz3_lianjie5.png" /><span>生涯规划</span></a></li>
                <li><a href=""><img src="/static/img/fz3_lianjie5.png" /><span>职业指导</span></a></li>
                <li><a href=""><img src="/static/img/fz3_lianjie5.png" /><span>创业天地</span></a></li>
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
    height:166px;
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
    
}
.instrument li{
    float: left;
    padding:10px 2px;
    width: 125px;
    height: 30px;
    
}
.instrument span{
    display: inline-block;
    padding:0px 2px 30px 2px;
    vertical-align: middle;
}

</style>
