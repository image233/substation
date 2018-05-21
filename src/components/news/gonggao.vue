<template>
  <div class="some">
    <el-tabs v-model="activeName" @tab-click="handleClick2" type="border-card" :style="ggstyle"><!--height:296px;width:710px;font-size:14px;-->
    <el-tab-pane v-for="item in gonggao" :key="item.id" :label="item.label" :name="item.name" style="font-size:14px;" >
      <ul>
        <li v-if='item.children.length>0' v-for="item1 in item.children"  :key="item1.id">{{item1.text}}
          <span>{{item1.time}}</span> 
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'some',
  props: {
      ggstyle: null  //定义传值的类型<br>   
    },
 data() {
      return {
        activeName: '1',
        gonggao: []
      };
    }
    ,
    created () {
      this.getgonggao() // 本地JSON
    },
    methods: {
      handleClick2(tab, event) {
        console.log(tab, event);
      },
    getgonggao () {
        axios.get('../../static/json/gonggao.json').then((res) => {
          // alert(res.gonggao);
          this.gonggao = res.data.gonggao;
          console.log(res.data  );
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  /* margin: 0 10px; */
  text-align: left;
  margin-bottom: 5px;
}
li span{
    display: block;
    float: right;
    /* color: #42b983; */
    color: #666968;
}

a {
  color: #666968;
  text-decoration: none;
}
li a:hover{
  color: #409EFF;
 }
</style>