<template>
    <div class="aside">
        <div class="aside__nav">
            <div class="nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <router-link class="aside__link"
                        active-class=""
                        exact
                        :to="{ name: 'about' }">
                        BBC
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="aside__link"
                        active-class=""
                        exact
                        :to="{ name: 'about' }">
                        The New York Times
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="aside__link"
                        active-class=""
                        exact
                        :to="{ name: '' }">
                        USA Today
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="aside__link"
                        active-class=""
                        exact
                        :to="{ name: '' }">
                        CNN
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="aside__link"
                        active-class=""
                        exact
                        :to="{ name: '' }"
                        >
                        The Washington Post
                        </router-link>
                    </li>                
                </ul>
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
        background-color: rgb(115, 202, 176);
        height: 100%;
        flex-basis: 40%;
        flex: 1;
    }
    .nav{
        &__list{
            text-align: center;
            font-size: 1.1rem;
            font-weight: bold;
        }
        &__item{
            padding: 1.2rem;
        }
    }
</style>
