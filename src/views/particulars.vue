<template>
    <div id="" class="nydx">
        <div class="fz-contain"><!--主体-->
            <div class="navbar">
                <ul>
                    <li><a href="#">新闻快递</a></li>
                    <li><a href="#">通知公告</a></li>
                    <li><a href="#">校内公示</a></li>
                </ul>
            </div>
            <div class="caption">
                <div >
                    <ul class="caption_title"><li>文章</li></ul>
                </div>
                <div class="details" v-for="item in details" :key="item.id">
                    <p>{{item.title}}</p>
                    <p class="times">{{item.time}}</p>
                    <p>{{item.dt}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"nydx",
    data () {
      return {
          details:[]
      }
    },
    mounted () {
        this.getdetails() // 本地JSON
    },
    methods: {
    getdetails () {
        axios.get('static/json/details.json').then((res) => {
          this.details = res.data.details;
          console.log(res.data);
        })
      }
    }
}
</script>

<style scoped>
a{ text-decoration: none; }
ul { list-style-type: none; }
/* 整体 */
.nydx{ width:980px; margin:6px auto; }
.fz-contain{ height:900px; }
.fz-containleft{ float: left; width: 260px; height:700px; /* border: #094a93 1px solid; */ }
.navbar ul{
    height: 36px; border: #ddd 1px solid; padding: 0; font-size: 12px; font-weight: bold;
}
.navbar li{
     float: left; height:26px; width:100px; padding-top:10px; border-right: #ddd 1px solid; text-align:center;
}
.navbar a{
    color:#333;
}
.caption{
    margin-top: 20px;
    height: 640px;
    width: 980px;
     border: #ddd 1px solid; padding: 0;
}
.caption ul{
    padding: 0;margin: 0;
    font-size: 14px;
}
.caption_title{
    padding-left: 20px;
    height: 32px;
    background-color: #e6e6e6;
    font-weight: bold;
}
.caption_title li{
    padding:6px 20px
}
.caption a{
    color: #494747;
    float: left;
    display: block;
    padding:10px 20px;
}
.caption a:hover{
   color:  #2c96ea;
}
.caption li{
    float: left;
    width: 980px;
    border-bottom: #e6e6e6 dotted 1px;
}
.details{
    width:900px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 40px;
}
.details p:first-child{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
}
.times{
    font-size: 16px;
    color: #494747;
}
</style>
