<template>
    <div class="app-container">
        <section class="main">
            <categories-filter></categories-filter>
            <router-view></router-view>
        </section>
    </div>
</template>


<script>
    import HomeAside from '@/components/HomeAside.vue'
    import HomeMain from '@/components/HomeMain.vue'
    import CategoriesFilter from '@/components/CategoriesFilter.vue'
    import Article from '@/views/Article.vue'

    export default {
        name: 'Home',
        components: {
            HomeMain,
            HomeAside,
            CategoriesFilter
        }
    }
</script>


<style lang='scss'>
    .app-container {
        display: flex;
        min-height: 100%;

        .main {
            flex: 3;
            margin: 0.3rem;
            min-height: 100%;
        }
    }
</style>
