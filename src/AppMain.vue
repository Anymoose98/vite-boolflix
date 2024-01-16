<script>
import { store } from '../src/store.js';
import AppCard from './AppCard.vue';
import AppSerie from './AppSerie.vue';
export default {
    name: 'AppMain',

    components: {
        AppCard,
        AppSerie,
    },

    data() {
        return {
            store,
        }
    },
}


</script>

<template lang="">
    <main>
        <h1>Film</h1> 
        <div>
            <AppCard v-for="film, index in store.film" :key="index" :film=film />
        </div>

        <h1>Serie televisive</h1> 
        <div>
            <AppSerie v-for="serie, index in store.serie" :key="index" :serie=serie />
        </div>
    

    </main>
</template>

<style lang="scss" scoped>
main {
    max-width: 1200px;
    margin: 30px auto;

    h1 {
        color: red;
        display: block;
        margin: 30px;
    }

    div {
        display: flex;
        flex-wrap: wrap;

    }
}
</style>