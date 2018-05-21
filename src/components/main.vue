<template>
    <div id="index">
      <my-header :message="picsrc"></my-header>
      <!-- <my-aside></my-aside> -->
      <router-view class="view"> </router-view>
      <my-footer></my-footer>
    </div>
</template>

<script>
import MyHeader from '@/components/frame/header'
import MyFooter from '@/components/frame/footer'
import MyAside from '@/components/frame/aside'
export default {
  name: 'index',
  
  data () {
    return { 
      picsrc: '/static/img/zizhan_logo.png',
    }
  },
  components:{MyHeader,MyFooter,MyAside}
}
</script>

<style scoped>
  #index{ width:980px; margin:6px auto; }

</style>
