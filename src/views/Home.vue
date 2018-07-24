<template>
    <div class="app-container">
        <home-main></home-main>
        <home-aside></home-aside>
    </div>
</template>


<script>
import HomeAside from '@/components/HomeAside.vue'
import HomeMain from '@/components/HomeMain.vue'

export default {
    name:'Home',
    components:{
        HomeMain,
        HomeAside
    }
}
</script>


<style lang='scss'>
    .app-container{
        display: flex;
        height: 100%;
    }
</style>
