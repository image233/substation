<template>
    <div class="inst">
        <div class="title">
            学生就业服务平台
        </div>
        <div class="instrument">
            <ul>
                <li><a href=""><img src="/static/img/fz-student-icon-1.png" /><span>学生就业问答</span></a></li>
                <li><a href=""><img src="/static/img/fz-student-icon-1.png" /><span>签约信息上报</span></a></li>
                <li><a href=""><img src="/static/img/fz-student-icon-1.png" /><span>生源信息填报</span></a></li>
                <li><a href=""><img src="/static/img/fz-student-icon-1.png" /><span>报到证查询</span></a></li>
                <li><a href=""><img src="/static/img/fz-student-icon-1.png" /><span>注册推荐表</span></a></li>
                <li><a href=""><img src="/static/img/fz-student-icon-1.png" /><span>政策法规</span></a></li>
                <li><a href=""><img src="/static/img/fz-student-icon-1.png" /><span>常用下载</span></a></li>
                <li><a href=""><img src="/static/img/fz-student-icon-1.png" /><span>讲座预约</span></a></li>
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
    height:231px;
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
.instrument ul{
    padding: 0 20px;
    margin-top: 10px;
}
.instrument li{
    float: left;
    padding:8px 10px;
    width: 108px;
    
}
.instrument span{
    display: inline-block;
    padding:0px 6px 8px 6px;
    vertical-align: middle;
}

</style>
