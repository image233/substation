<template>
    <div id="sub2">
      <my-header :message="picsrc2"></my-header>
      <!-- <my-aside></my-aside> -->
      <router-view class="view"> </router-view>
      <my-footer></my-footer>
    </div>
</template>

<script>
import MyHeader from '@/components/frame/header'
import MyFooter from '@/components/frame/footer2'
import MyAside from '@/components/frame/aside'
export default {
  name: 'sub2',
  data () {
    return { 
        picsrc2: '/static/img/zizhan_logo2.jpg',
    }
  },
  components:{MyHeader,MyFooter,MyAside}
}
</script>

<style scoped>
  #sub2{ width:980px; margin:6px auto; }

</style>
