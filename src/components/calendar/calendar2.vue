<template>
    <div class="rili">
        <div class="title">
            就业日历
        </div>
        <div class="dates">
            
            
        </div>
    </div>
</template>
<script>
export default {
    name:"rili",
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
.rili{
    height:296px;
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
.dates{
    background-color: #e8f3f9;
    color: #32709f;
}

</style>
