<template>
    <div class="aside">
        <div class="aside__nav">
            <div class="nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <router-link class="aside__link"
                        active-class=""
                        exact
                        :to="{ name: 'homemain' }">
                        All News
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="aside__link"
                        active-class=""
                        exact
                        to="/sources=bbc-news">
                        BBC
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="aside__link"
                        active-class=""
                        exact
                        to="/sources=the-new-york-times">
                        The New York Times
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="aside__link"
                        active-class=""
                        exact
                        to="/sources=the-washington-post">
                        The Washington Post
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="aside__link"
                        active-class=""
                        exact
                        to="/sources=cnn">
                        CNN
                        </router-link>
                    </li>           
                </ul>
            </div>
        </div>
        <div class="aside_tags">
            <div class="tags__bycategory">
                <h3 class="tags__title">Choose by category</h3>
                <div class="tags__links">
                     <router-link class="aside__link"
                            active-class=""
                            exact
                            to="category=business">
                            Business
                    </router-link>
                    <router-link class="aside__link"
                            active-class=""
                            exact
                            to="category=entertainment">
                            Entertainment
                    </router-link>
                    <router-link class="aside__link"
                            active-class=""
                            exact
                            to="category=general">
                            General
                    </router-link>
                    <router-link class="aside__link"
                            active-class=""
                            exact
                        to="category=health">
                            Health
                    </router-link>
                    <router-link class="aside__link"
                            active-class=""
                            exact
                            to="category=science">
                            Science
                    </router-link>
                    <router-link class="aside__link"
                            active-class=""
                            exact
                            to="category=sports">
                            Sports
                    </router-link>
                    <router-link class="aside__link"
                            active-class=""
                            exact
                            to="category=technology">
                            Technology
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'homeaside',
}
</script>

<style lang='scss'>
    .aside{
        background-color:#c8e1c3a8;
        min-height: 100%;
        flex: 1;
        margin-right: auto;
    }
    .nav{
        &__list{
            text-align: center;
            font-size: 1.1rem;
            font-weight: bold;
        }
        &__item{
            padding: 1.2rem;
            font-weight: bold;
            font-size: 1.4rem;
        }
    }
    .tags__title{
        text-align: center;
        font-weight: bold;
        color: #000;
        font-size: 1.5rem
    }
    .tags__links{
        display: flex;
        flex-wrap: wrap;
        .aside__link{
            display: block;
            margin: .4rem;
            padding: .4rem;
            background-color: #ff8c00;
            border-radius: 14px;
            box-shadow: 1px 1px 8px 0px rgba(0,0,0,.48);
            color: #1a1a1a;
            transition: all .3s ease;
            &:hover{
                background-color: #bb6c0b;
                box-shadow: 1px 1px 11px 3px rgba(0,0,0,.48);
                color: #fff;
            }
        }
    }
</style>
