<template>
    <div class="fz-lunbo2":style="lunbo"> 
                        <img src="/static/img/fz3_carousel1.jpg" :style="imgsize">
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
                { src:'/static/img/fz3_carousel1.jpg' }
            ]
        }
    }  
}
</script>
<style >
.fz-lunbo2 { 
    border: #ddd 1px solid; 
    margin:0px auto;
}

</style>
