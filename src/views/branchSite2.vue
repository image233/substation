<template>
    <div id="newPage" class="nydx">
        <div class="fz-contain"><!--主体-->
            <div class="fz-containleft"><!--左-->
                <!--轮播-->
                <carousel :lunbo="lunbo" :elheight="elheight" :imgsize="imgsize"></carousel>
                <magnet></magnet>
            </div>
            <div class="fz-right"><!--右-->
                <div class="right-top"> <!--右上通知公告-->
                    <div class="fz-notice test_box">
                        <tongzhi :tzstyle="tzstyle"></tongzhi>
                    </div>
                    <div class="calc">
                        <calendar></calendar>
                    </div>
                </div>
                <div class="fz-zhaopin"><!-- 聘-->
                    <gonggao :ggstyle="ggstyle"></gonggao>
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
import magnet from '@/components/navs/magnet.vue'
import gonggao from '@/components/news/gonggao.vue'
import fagui from '@/components/news/fagui.vue'
import btmnav from '@/components/navs/btmnav.vue'
export default {
    data () {
      return { 
        tzstyle:{
            height:250+'px',
            width:290+'px'
        },
        ggstyle:{
            height:260+'px',
            width:568+'px'
        },
        fgstyle:{
            height:260+'px',
            width:568+'px'
        },
        lunbo:{
            height: 250+'px',
            width: 396+'px'
        },
        imgsize:{
             height: 250+'px',
             width: 396+'px'
        }   ,
        elheight:{
            height: 250+'px'
        }
      }
    },
    components:{
        stulogin,   //登录
        calendar,   //日历
        carousel,
        magnet,
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
/* 整体 */
.nydx{ width:980px; margin:6px auto; }
.fz-contain{ height:850px; }
.fz-containleft{ float: left; width: 396px; height:850px; margin-top: 10px; /* border: #094a93 1px solid; */ }
/* 右 */
.fz-right{ float: left; width:573px; height:804px; position: relative;}
.right-top{
    height: 270px;
}
/* 通知公告 */
.fz-notice{ width: 290px; margin:10px 6px; height: 250px;}
/* .test_box { position: relative; width: 310px; margin:10px 8px;  } */
.calc{
    width: 250px;
    position: absolute;
    right: 0;
    top:10px;
}
/* 招聘公告 */
.fz-zhaopin{ float:right; height: 260px; width: 568px; margin-bottom: 10px; border:#ddd 1px solid; }
/* 政策法规 */
.fz-zhengce{ float:right; height: 260px; width: 568px;margin-top: 8px;}
</style>




