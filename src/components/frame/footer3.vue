<template>
<div class="ft">
    <div class="ft_line">

    </div>
    <div class="ft_contain">
        <div class="ft_img">
            <img src="/static/img/fz3_bottom.png" />
        </div>
        <div class="ft_letter">
            <p>南京中医药大学大学生就业创业指导中心</p>
            <p>
                南京中医药大学大学生就业创业指导服务中心<br/>
                学生咨询热线:025-85811938 传真:025-85811855（自动转接）<br/>　
                企业招聘服务：025-85811938<br/>      
                Email:jy7938@163.com<br/>
                地址：南京仙林大学城仙林大道138号100号信箱 （210023）<br/>
            </p>
        </div>
        <div class="line">
        <img src="/static/img/fz_footline.jpg" />
        </div>
        <div class="ft_letter2">
            <p>Copyright @版权所有 南京中医药大学就业办</p>
        </div>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.ft{
    background-color: #ebebeb;
}
.ft_line{
    height: 4px;
    background-color: #2b618f;
}
.ft_contain{
    width: 980px;
    margin: 10px auto;
    height: 264px;
}
.ft_img{
    float: left;
    margin-top: 10px;
}
.ft_letter p:first-child{
    color: #69697d;
    font-weight: bold;
    font-size: 16px;
}
.ft_letter p,.ft_letter2 p{
    float: left;
    font-size: 14px;
    color: #666;
    width:570px;
    margin-left: 10px;
}
.line img{
    float: left;
    margin-top: -54px;
}
.ft_letter2 p{
    float: right;
    width: 240px;
}
</style>
