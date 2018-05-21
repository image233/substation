<template>
  <div class="hello">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card"  :style="tzstyle">
      <el-tab-pane v-for="item in items" :key="item.id" :label="item.label" :name="item.name" style="font-size:14px;">
        <ul>
          <li v-if='item.children.length>0' v-for="item1 in item.children"  :key="item1.id"> {{item1.text}}</li>
        </ul>
      </el-tab-pane>
    </el-tabs>  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // name: 'hello',
  
  props: {
      tzstyle: null  //定义传值的类型<br>   
    },
 data() {
    return {
      activeName: '1',
      items: []
    };
  }
  ,
    created () {
      this.getitems() // 本地JSON
    },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getitems () {
        axios.get('../../static/json/fagui_t1.json').then((res) => {
          // alert(res.items);
          this.items = res.data.items;
          console.log(res.data  );
        })
      }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 { font-weight: normal; }
li a:hover{ color: #409EFF; }
ul { list-style-type: none; padding: 0; }
a { color: #666968; text-decoration: none; }
li { /* display: inline-block; margin: 0 10px; */ text-align: left; margin-bottom: 5px; }
</style>
