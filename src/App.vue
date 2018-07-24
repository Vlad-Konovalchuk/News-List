<template>
  <div id="app">
    <Head></Head>
        <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from '@/views/Head.vue';
import Foot from '@/views/Foot.vue';

export default {
    name:'App',
    components:{
        Head,
        Foot
    }
}
</script>

