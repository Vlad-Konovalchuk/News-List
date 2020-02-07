<template>
    <div class="header">
        <v-toolbar dark app>
            <v-toolbar-title class="header__title">CountDown</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon
                    @click.stop="drawer = !drawer"
                    class="hidden-md-and-up"
            ></v-app-bar-nav-icon>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                        v-for="item in menu"
                        :key="item.icon"
                        :to="item.link"
                        flat
                >{{ item.title }}
                </v-btn>
            </v-toolbar-items>
            <v-menu class="hidden-md-and-up">
                <v-list>
                    <v-list-tile v-for="item in menu" :key="item.title">
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <router-link class="header__link"
                                             active-class="active"
                                             exact
                                             :to="item.route">
                                    {{ item.title }}
                                </router-link>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>
        <!--<div class="header__logo">
            <img src="../assets/logos.jpg" alt="logo" class="image">
            <h1 class="header__title">CountDown</h1>
        </div>
        <nav class="navbar">
            <ul class="navbar__list">
                <li class="navbar__item">
                    <router-link class="header__link"
                                 active-class="active"
                                 exact
                                 to="/">
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
                                 :to="{ name: 'contacts' }">
                        Contacts
                    </router-link>
                </li>
            </ul>
        </nav>-->
    </div>
    <!--    <v-app-bar
                color="deep-purple accent-4"
                dense
                dark
        >
            <v-app-bar-nav-icon class="header__logo">
                <img src="../assets/logos.jpg" alt="logo" class="image">
            </v-app-bar-nav-icon>

            <v-toolbar-title>CountDown</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu
                    left
                    bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                            v-for="n in 5"
                            :key="n"
                            @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>-->
</template>

<script>
    export default {
        name: 'head',
        data() {
            return {
                drawer: false,
                menu: [
                    {route: 'home', title: 'Home'},
                    {route: 'about', title: 'About'},
                    {route: 'contacts', title: 'Contacts'}
                ]
            }
        },
        methods: {
            menuItems() {
                return this.menu
            }
        }
    }
</script>

<style lang='scss'>
    @import url('https://fonts.googleapis.com/css?family=Merienda:700');

    .header__logo {
        display: flex;

        .image {
            align-self: flex-start;
        }
    }

    .header {
        background-color: #5CB85C;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__title {
            color: #fff;
            font-family: 'Merienda', cursive;
        }


        &__link {
            display: block;
            padding: 1rem;

            &:hover {
                box-shadow: 0 0 8px 4px #010107b5;
            }
        }

    }

    .image {
        width: 23%;

        & img {
            max-width: 100%;
        }
    }

    .navbar {
        color: #fff;

        ul, li {
            list-style: none;
            margin: 0;
        }

        &__list {
            display: flex;
        }

        &__item {
            padding: 1.6rem;
            position: relative;
        }
    }
</style>

