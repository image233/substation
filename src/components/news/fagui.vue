<template>
  <div class="some3">
    <el-tabs v-model="activeName" @tab-click="handleClick3" type="border-card" :style="fgstyle">
      <el-tab-pane v-for="item in fagui" :key="item.id" :label="item.label" :name="item.name"  style="font-size:14px;">
        <ul>
          <li v-if='item.children.length>0' v-for="item1 in item.children"  :key="item1.id">
            {{item1.text}}<span>{{item1.time}}</span> 
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'some3',
  props: {
      fgstyle: null  //定义传值的类型<br>   
    },
 data() {
      return {
        activeName: '1',
        fagui:[]
      };
    },
    created () {
      this.getfagui() // 本地JSON
    },
    methods: {
      handleClick3(tab, event) {
        console.log(tab, event);
      },
    getfagui () {
        axios.get('../../static/json/fagui.json').then((res) => {
          this.fagui = res.data.fagui;
          console.log(res.data  );
        })
      }
    }
}
</script>

<style scoped>
h1, h2 {font-weight: normal; }
li a:hover{ color: #409EFF; }
li span{ display: block; float: right; }
ul { list-style-type: none; padding: 0; }
a { color: #666968; text-decoration: none; }
li { /* display: inline-block; */ /* margin: 0 10px; */ text-align: left; margin-bottom: 5px; }
</style>