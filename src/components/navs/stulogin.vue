<template>
    <div class="fz-login">
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:196px;width:250px;font-size:14px;">
            <el-tab-pane label="学生登录" name="first">
                <div class="fz-login-input">
                    <form action="" method="">
                        <input  type="text" placeholder="用户名"/>
                        <input type="password" placeholder="密码"/>
                    </form>
                </div>
                <div class="fz-login-denglu">
                    <div class="fz-login-denglu1">
                        <a href="">登录</a>
                    </div>
                    <div class="fz-login-denglu2">
                        <input type="checkbox"/><span>自动登录</span><a href=""><span>忘记密码？</span></a>
                </div></div>
            </el-tab-pane>
            <el-tab-pane label="单位登录" name="second">
                <div class="fz-login-input">
                    <form action="" method="">
                        <input  type="text" placeholder="单位名称"/>
                        <input type="password" placeholder="密码"/>
                    </form>
                </div>
                <div class="fz-login-denglu">
                    <div class="fz-login-denglu1">
                        <a href="">登录</a>
                    </div>
                    <div class="fz-login-denglu2">
                        <input type="checkbox"/><span>自动登录</span><a href=""><span>忘记密码？</span></a>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name:"fz-login",
    data() {
      return {
        activeName: 'first',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  
}
</script>
<style scoped>
a{
    text-decoration: none;
}
.fz-login{
    height:196px;
    width: 250px;
    margin-top:10px; 
    border: #ddd 1px solid;
}
.fz-login-input form{
    width: 220px;
}
.fz-login-input input{
    height: 18px;
    width: 180px;
    padding: 5px;
    border: 1px solid #afaeb3;
    margin-bottom: 8px;
}
.fz-login-denglu{
    height:40px;
    width: 225px;
    margin:10px 15px;
}
.fz-login-denglu a{
    color: #fff;
}
.fz-login-denglu1,.fz-login-denglu2{
    float: left;
}
.fz-login-denglu1{
    height: 20px;
    width: 30px;
    background-color: #3b87dd;
    border-radius: 3px;
    color: #ffffff;
    padding:4px 10px;
    margin-right: 10px;
}
.fz-login-denglu2{
    font-size: 0.9em;
    color: #afa8a8;
    padding: 4px 2px;
}
.fz-login-denglu2 a{
    color: #5c5b5b;
}
.fz-login-denglu2 input{
    height:14px; 
    vertical-align:middle;
    margin-right:2px;
}
.fz-login-denglu2 span{
    display: inline-block;
    padding-right:10px;
}
</style>
