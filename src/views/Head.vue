<template>
    <div class="header">
        <div class="header__logo">
            <img src="../assets/logos.jpg" alt="logo" class="image">
            <h1 class="header__title"> CountDown</h1>
        </div>
        <nav class="navbar">
            <ul class="navbar__list">
                <li class="navbar__item">
                    <router-link class="header__link"
                        active-class="active"
                        exact
                        :to="{ name: 'home' }">
                        Home
                    </router-link>
                </li>
                <li class="navbar__item">
                     <router-link class="header__link"
                        active-class="active"
                        exact
                        :to="{ name: 'about' }">
                        About
                    </router-link>
                </li>
                <li class="navbar__item">
                     <router-link class="header__link"
                        active-class="active"
                        exact
                        :to="{ name: 'news' }">
                        News
                    </router-link>
                </li>
                <li class="navbar__item">
                     <router-link class="header__link"
                        active-class="active"
                        exact
                        :to="{ name: 'contacts' }">
                        Contacts
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'head'
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Merienda:700');

    .header{
        background-color: #5CB85C;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        &__title{
            color: #fff;
            font-family: 'Merienda', cursive;

        }
        &__logo{
            display: flex;
            .image{
                align-self: flex-start;
            }
        }
        &__link{
            display: block;
            padding: 1rem;
            &:hover{
                 box-shadow: 0 0 8px 4px #010107b5;
            }
        }

    }
    .image{
        width: 23%;
        & img{
            max-width: 100%;
        }
    }
    .navbar{
        color: #fff;
        ul,li{
            list-style: none;
            margin: 0;
        }
        &__list{
        display: flex;
        }
        &__item{
            padding: 1.6rem;
            position: relative;
        }
    }
</style>

