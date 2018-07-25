npm run serve <template>
    <div class="main">
        <div class="news">
            <div class="news__item" v-for='(article,index) in TopNews' :key='`${index}`' v-if="article.urlToImage">
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
    name: 'homemain',
    data(){
        return{
            TopNews:null,
        }
    },
    methods:{
        etTopNews:function(){
            axios.get(`${api.TOP_URL}${api.KEY}`)
                .then(response=>{
                    this.TopNews = response.data.articles;
                })
                .catch(error=>console.log(error))
        },
        getTopNews:async function(){
            try{
                const response = await axios.get(`${api.TOP_URL}${api.KEY}`);
                this.TopNews = response.data.articles;
            }
            catch{
                console.log(error)
            }

        },
    },
    created(){
        this.getTopNews();
    }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Archivo+Narrow:400,700');
    .main{
        background-color: rgba(255, 255, 255, 0.796);
        height: 100%;
        flex: 2;
        flex-basis: 60%;
        overflow: auto;
    }
    .news{
        display: flex;
        flex-basis: 47.9999%;
        flex-wrap: wrap;
        flex: 1;
        font-family: 'Archivo Narrow', sans-serif;
        // margin-top: 1rem;
        &__item{
            max-width: 47.99999%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1rem 0.4rem;
            min-width: 500px;
            flex: 1;
            &__link:hover.news__item{
                                box-shadow: 0 0 3px 2px #000;

            }

        }
        &__link{
            display: block;
            text-align: center;
            align-self: flex-end;
            &::before {
                content: '';
                display: block;
                height: 2px;
                width: 0;
                background-color: #000;
                transition: width 0.5s;
            }
            &:hover::before {
                width: 100%;
            }
        }
        .card{
            order: 2;
            padding: 0 0.6rem;
            height: 100%;
            align-self: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &__content{
                min-height: 100%;
            }
        }
        &__img{
            width:283px;
            height: 185px;
            object-fit: cover;
            order: 1;
            border-radius: 8px;
            
        }
    }
</style>
