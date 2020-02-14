<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="sideNav">
            <v-list>
                <v-list-item
                        v-for="item in menuItems"
                        :key="item.title"
                        :to="item.link">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>{{ item.title }}</v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar  >
            <v-app-bar-nav-icon
                    @click.stop="sideNav = !sideNav"
                    class="hidden-sm-and-up "></v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn
                        text small
                        v-for="item in menuItems"
                        :key="item.title"
                        :to="item.link">
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>
<script>
    export default {
        name: 'AppNavigation',
        data() {
            return {
                sideNav: false,
                menuItems: [
                    {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
                    {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
                    {icon: 'person', title: 'Profile', link: '/profile'},
                    {icon: 'face', title: 'Sign up', link: '/signup'},
                    {icon: 'lock_open', title: 'Sign in', link: '/signin'}
                ]
            };
        }
    };
</script>

<style scoped>
    .navigation {
        width: 100%;
    }

    a {
        color: white;
        text-decoration: none;
    }
</style>
