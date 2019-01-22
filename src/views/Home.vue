<template>
    <div class="app-container">
        <section class="main"> 
            <router-view></router-view>
        </section>
        <home-aside ></home-aside>
    </div>
</template>


<script>
import HomeAside from '@/components/HomeAside.vue'
import HomeMain from '@/components/HomeMain.vue'
import Article from '@/views/Article.vue'

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
        min-height: 100%;
        .main{
            flex:3;
            margin: 0.3rem;
            min-height: 100%;
        }
    }
</style>
