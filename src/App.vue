<template>
  <div id="app">
    <Head></Head>
        <router-view></router-view>
        <!-- <home-aside></home-aside> -->
    <Foot></Foot>
  </div>
</template>

<script>
import Head from '@/views/Head.vue';
import Foot from '@/views/Foot.vue';
import HomeAside from '@/components/HomeAside.vue'

export default {
    name:'App',
    components:{
        Head,
        Foot,
        HomeAside
    }
}
</script>

