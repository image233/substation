<template>
    <div class="fz-lunbo":style="lunbo"> 
        <!-- Hover触发-->
        <div class="fz-lbbutton" ><!--float: right; height: 200px; width: 330px;-->
            <div >
                <el-carousel height="200px">
                    <el-carousel-item  v-for="data in list " :key="data.src">
                        <img v-bind:src="data.src":style="imgsize">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>
<script>
export default { 
  props: {
      lunbo: null,  //定义传值的类型<br>
      imgsize:null   
    },
    data(){
        return{
            list:[
                { src:'/static/img/fz_carousel1.jpg' },
                { src:'/static/img/fz_carousel2.jpg' },
                { src:'/static/img/fz_carousel3.jpg' },
                { src:'/static/img/fz_carousel4.jpg' },
                { src:'/static/img/fz_carousel5.jpg' }
            ]
        }
    }  
}
</script>
<style >
.fz-lunbo { border: #ddd 1px solid; }
.el-carousel__indicators{
    left: 42%;
}
.el-carousel__button{
    height: 4px;
    border-radius: 3px;
}
.fz-lunbo img{
     /* height: 200px; width: 330px; */
}
</style>
