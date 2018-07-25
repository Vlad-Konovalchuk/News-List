<template>
    <div class="main">
            <div class="news">
            <div class="news__item" v-for='(article,index) in articles' :key='`${index}`' v-if="article.urlToImage">
                <div class="card">
                    <div class="news__content"></div>
                    <div   class="news__title">
                        <h3 class="title__text">{{article.title}}</h3>
                    </div>
                    <p class="news__description">{{article.description}}</p>
                    <a :href="article.url" class="news__link">Read more...</a>
                </div>
                <div class="logo">
                    <img :src="article.urlToImage" alt="news photo" class="news__img">
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import api from '@/constants/apiConfig.js'

export default {
    name: 'ny',
    data(){
        return{
            articles:null
        }
    },
    methods:{
        getArticles:function(){
            axios.get(`https://newsapi.org/v2/top-headlines?${this.$route.params.sourse}&${api.KEY}`)
            .then(response => 
            this.articles=response.data.articles)
        }
    },
    mounted(){
       this.getArticles();
       console.log('created')
    },
    watch:{
    $route (to, from){
        this.getArticles()
        console.log('watch')
    }
} 
}
</script>

<style lang='scss'>
</style>
