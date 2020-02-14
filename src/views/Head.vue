<template>
    <header class="header">
        <app-navigation></app-navigation>        <!--        <v-toolbar dark app>
                    <v-toolbar-title class="header__title">CountDown</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-app-bar-nav-icon
                            @click.stop="drawer = !drawer"
                            class="hidden-md-and-up"
                    ></v-app-bar-nav-icon>
                    <v-toolbar-items class="hidden-sm-and-down">
                        <v-btn
                                v-for="item in menu"
                                :key="item.title"
                                :to="item.link"
                        >

                                {{ item.title }}
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
                </v-toolbar>-->
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
    </header>
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
    import AppNavigation from '@/components/AppNavigation'

    export default {
        name: 'head',
        components: {
            AppNavigation,
        },
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

</style>

