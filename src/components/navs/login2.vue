<template>
    <div class="fz-login2">
        <div class="logins">
            用户登录
        </div>
        <div class="login_c">
            <ul>
                <li><img src="/static/img/fz-login-icon-1.png"><a href=""><span>用人单位</span></a></li>
                <li><img src="/static/img/fz-login-icon-2.png"><a href=""><span>学生用户</span></a></li>
                <li><img src="/static/img/fz-login-icon-3.png"><a href=""><span>学校用户</span></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"fz-login2",
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
.fz-login2{
    height:196px;
    width: 296px;
    margin-top:10px; 
    border: #ddd 1px solid;
     background-color: #e8f3f9;
}

.logins{
    height: 40px;
    background-color: #3d71a0;
    padding:0px 20px;
    line-height:40px;
    color: #fff;
     font-size: 16px;
}
.login_c{
    background-color: #e8f3f9;
    color: #32709f;
}
.login_c a{
    color: #32709f;
}
.login_c ul{
    padding:10px 20px;
}
.login_c li{
    border-bottom: 1px solid #ddd;
    padding:2px;
    height: 40px;
    line-height:20px;
    
}
.login_c img{
    /* display: inline-block; */
    margin-top: 10px;
}
.login_c span{
    display: inline-block;
    padding:0px 6px 15px 6px;
vertical-align: middle;
}
</style>
