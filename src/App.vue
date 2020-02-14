<template>
    <div id="app">
        <v-app id="inspire">
            <Head></Head>
            <router-view></router-view>
            <home-aside></home-aside>
            <Foot></Foot>
        </v-app>
    </div>
</template>

<script>
    import Head from '@/views/Head.vue';
    import Foot from '@/views/Foot.vue';
    import HomeAside from '@/components/HomeAside.vue'

    export default {
        name: 'App',
        components: {
            Head,
            Foot,
            HomeAside
        },
        data: () => ({
            drawer: null
        })
    }
</script>

