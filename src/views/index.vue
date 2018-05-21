<template>
    <div id="newPage" class="nydx">
        <div class="fz-contain"><!--主体-->
            <div class="fz-containleft"><!--左侧-->
                <stulogin></stulogin>
                <div class="fz-rl">
                    就业日历
                </div> 
                <calendar></calendar>
                <btmnav></btmnav>
            </div>
            <div class="fz-right"><!--右侧-->
                <div class="right-top"> <!--右上通知公告+轮播-->
                <!--轮播-->
                    <carousel :lunbo="lunbo" ></carousel>
                    <div class="fz-notice test_box">
                        <tongzhi :tzstyle="tzstyle"></tongzhi>
                    </div>
                </div>
                <div class="fz-zhaopin"><!-- 招聘-->
                    <gonggao :ggstyle="ggStyle"></gonggao>
                </div>
                <div class="fz-zhengce"><!-- 政策法规 其他-->
                    <fagui :fgstyle="fgstyle"></fagui>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import tongzhi from '@/components/news/tongzhi.vue'
import stulogin from '@/components/navs/stulogin.vue'
import calendar from '@/components/calendar/calendar.vue'
import carousel from '@/components/carousel/carousel.vue'//轮播
import gonggao from '@/components/news/gonggao.vue'
import fagui from '@/components/news/fagui.vue'
import btmnav from '@/components/navs/btmnav.vue'
export default {
    data () {
      return {    
        ggStyle: {
            height:296+'px',
            width:710+'px'
        },
        fgstyle:{
            height:296+'px',
            width:710+'px'
        },
        tzstyle:{
            height:197+'px',
            width:364+'px'
        },
        lunbo:{
            float: 'right',
            height: 200+'px',
             width: 330+'px'
        },
        imgsize:{
             height: 200+'px',
             width: 330+'px'
        } 
      }
    },
    components:{
        stulogin,   //登录
        calendar,   //日历
        carousel,
        tongzhi,
        gonggao,
        fagui,
        btmnav
    },
    mounted () {
    }
}
</script>

<style scoped>
a{ text-decoration: none; }
ul { list-style-type: none; }
.fz-rl{
    padding:20px 15px 10px 15px;
    font-weight:bold;
}
/* 整体 */
.nydx{ width:980px; margin:6px auto; }
.fz-contain{ height:900px; }
.fz-containleft{ float: left; width: 260px; height:700px; /* border: #094a93 1px solid; */ }
/* 右 */
.fz-right{ float: left; width: 720px; height:200px; }
/* 通知公告 */
.fz-notice{ width: 364px; margin:10px 8px; border: #ddd 1px solid; }
.test_box { position: relative; width: 364px; margin:10px 8px; border: #ddd 1px solid; }
/* 招聘公告 */
.fz-zhaopin{ float:right; height: 296px; width: 710px; margin-bottom: 10px; border:#ddd 1px solid; }
/* 政策法规 */
.fz-zhengce{ float:right; height: 296px; width: 710px; border: #ddd 1px solid; }

</style>




