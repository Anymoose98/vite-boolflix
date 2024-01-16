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
        <h1 v-if="store.ricercaFatta == true">Film</h1> 
        <h1 v-else >Cerca i tuoi film e serie preferite</h1>
        <div>
            <AppCard v-for="film, index in store.film" :key="index" :film=film />
        </div>

        <h1 v-if="store.ricercaFatta == true">Serie televisive</h1> 
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