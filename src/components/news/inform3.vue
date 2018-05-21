<template>
<div id="inform3">
    <div class="test_tab" v-for="(item,index) in tab1">
        <input type="radio" :id="item.id" class="test_radio1" name="tab3"  checked/><!-- checked="checked"-->
        <label class="test_label" :for="item.id">{{item.tabs}}</label>
        <div class="test_tab_content3">
            <ul>
                <li  v-for="item1 in item.children" :key="item1.id"><span>[03-07]</span>
                    <a href="">{{item1.text}} </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="more">
        <img src="/static/img/more.png" />
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    
 data() {
    return {
      tab1: []
    };
  }
  ,
    created () {
      this.gettab1() 
    },
    methods: {
        gettab1 () {
        axios.get('../../static/json/inform3.json').then((res) => {
          this.tab1 = res.data.inform;
          console.log(res.data  );
        })
      }
    }
}
</script>
<style scoped>
ul{
    list-style-type: none;padding: 0;
}
a{
    text-decoration: none;
}
#inform3{
    height: 300px;
    width: 668px;
    position: relative;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    margin-bottom: 20px;
}
.test_tab {
    width: 25%;
    margin-right: -1px;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 0;
    float: left;
}
.test_label {
    display: block;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #eee;
    text-align: center;
    color: #3e210f;
    font-weight: bold;
}
.test_radio1,
.test_tab_content3 {
    
    position: absolute;
    left: -999em;
    height:155px;
    font-size: 0.7em;
}
.test_radio1:checked ~ .test_tab_content3 {
    height: 260px;
    margin-top: -1px;
    padding:8px 2px 2px 10px;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    left:  0;
    right: 0;
}
.test_radio1:checked ~ .test_label {
    background-color: #fff;
    border-bottom: 1px solid #fff;
    position: relative;
    z-index: 1;
    color: #e68208;
} 
.test_tab_content3{
    font-size: 12px;
}  
.test_tab_content3 li{
    float: left;
    margin: 0 4px;
    padding: 10px 4px;
    border-bottom:1px  dotted   #ccc;
    width: 300px;
    white-space:nowrap;
overflow: hidden;
text-overflow:ellipsis;
}
.test_tab_content3 span{
    color: #e68208;
    font-weight: bold;
}
.test_tab_content3 a{
    color:#7a7979;
} 
.more{
    padding:0 50px;
    float:right;
    width: 47px;
    height: 10px;
}  
</style>
