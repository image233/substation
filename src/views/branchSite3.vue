<template>
<div>
    <carousel2  :lunbo="lunbo" :imgsize="imgsize"></carousel2>
    <div class="contains">
    <inform></inform>
    <inform2></inform2>
    <inform3></inform3>
    <div class="logins">
    <login2></login2>
    <calendar2></calendar2>
    <instr1></instr1>
    <instr2></instr2>
    <instr3></instr3>
    </div></div>
    
</div>
</template>
<script>
import carousel2 from '@/components/carousel/carousel2.vue'//轮播
import inform from '@/components/news/inform.vue'
import inform2 from '@/components/news/inform2.vue'
import inform3 from '@/components/news/inform3.vue'
import login2 from '@/components/navs/login2.vue'
import calendar2 from '@/components/calendar/calendar2.vue'
import instr1 from '@/components/navs/instr1.vue'
import instr2 from '@/components/navs/instr2.vue'
import instr3 from '@/components/navs/instr3.vue'
export default {
     data () {
      return { 
        lunbo:{
            height:336+'px',
            width: 978+'px'
        },
        imgsize:{
            height:336+'px',
            width: 978+'px'
        }
      }
    },
    components:{
        carousel2,   //日历
        inform,//
        inform2,
        inform3,
        login2,//登录
        calendar2,
        instr1,
        instr2,
        instr3
    },
    mounted () {
    }  
}
</script>
<style scoped>
a{
    text-decoration: none;
}
ul{
    list-style-type: none;padding: 0;
}
.contains{
    width:980px;
    height: 1100px;
    margin:0 auto;
    position: relative;
    padding: 10px 0;
}
.logins{
    position: absolute;
    top:0;
    right:0px;
}
</style>
