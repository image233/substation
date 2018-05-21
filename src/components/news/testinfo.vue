<template>
<div id="informs">
    <div class="test_tab" v-for="item in tab1">
        <input type="radio" :id="item.id" class="test_radio" name="tab" checked="checked" />
        <label class="test_label" :for="item.id">{{item.tabs}}</label>
        <div class="test_tab_content">
            <ul>
                <li  v-for="item1 in item.children" :key="item1.id">
                    <a href="">{{item1.text}} </a>
                </li>
            </ul>
        </div>
    </div>
    <div v-for="i in "></div>
    <!-- <label v-for="(item,index) in tab1" >
    <ul>
        <li :class="{active:index == num}" @click="tab(index)">
            {{item.tabs}}
        </li>
    </ul>
   
        <div v-if='tab1.children.length>0' v-for='itemCon in tab1.children' >
            {{itemCon.tabContents}}
         </div>
    
    </label> -->

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
        axios.get('../../static/json/inform.json').then((res) => {
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
#informs{
    height: 377px;
    width: 668px;
}
.test_tab {
    width: 25%;
    margin-right: -1px;
    border: 1px solid #ccc;
    border-bottom: 0;
    float: left;
}
.test_label {
    display: block;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #eee;
    text-align: center;
}
.test_radio,
.test_tab_content {
    width: 668px;
    position: absolute;
    left: -999em;
    height:155px;
    font-size: 0.7em;
}
.test_radio:checked ~ .test_tab_content {
    
    margin-top: -1px;
   padding:8px 2px 2px 10px;
    border: 1px solid #ccc;
    left:  0;
    right: 0;
}
.test_radio:checked ~ .test_label {
    background-color: #fff;
    border-bottom: 1px solid #fff;
    position: relative;
    z-index: 1;
}    
  
</style>
