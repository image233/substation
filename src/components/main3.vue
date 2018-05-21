<template>
    <div id="sub3">
      <my-header :message="picsrc3"></my-header>
      <router-view class="view"></router-view>
      <my-footer></my-footer>
    </div>
</template>

<script>
import MyHeader from '@/components/frame/header3'
import MyFooter from '@/components/frame/footer3'
import MyAside from '@/components/frame/aside'
export default {
  name: 'sub3',
  data () {
    return { 
        picsrc3: '/static/img/zizhan_logo3.png',
    }
  },
  components:{
    MyHeader,
    MyFooter,
    MyAside
  }
}
</script>

<style scoped>
  /* .head{ width:980px; margin:6px auto; } */

</style>
