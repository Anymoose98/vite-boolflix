<script>
import axios from 'axios';
import { store } from '../src/store.js';


export default {
    name: 'AppHeader',

    components: {

    },

    data() {
        return {
            store,
        }
    },

    created() {

    },

    methods: {
        chiamata() {
            let apiModificata = store.apiFilm + store.ricerca;

            axios.get(apiModificata).then((response) => {
                store.film = response.data.results
                console.log(apiModificata)
            });

            let apiModificataSerie = store.apiSerie + store.ricerca;
            axios.get(apiModificataSerie).then((response) => {
                store.serie = response.data.results
                console.log(store.serie)
            })
        }

    }
}


</script>

<template lang="">
    <header>
        <h1 class="titolo">
            BoolFlix
        </h1>
        
        <div class="margine-contenitore">
            <input v-model="store.ricerca" type="text" placeholder="Cerca" @keyup.enter='chiamata'>
            <button  @click='chiamata'>Cerca</button>
        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    height: 100px;
    align-items: center;
    display: flex;
    justify-content: space-between;

    h1 {
        color: red;
        font-size: xx-large;
        margin-left: 50px;
        width: 50%;
    }

    .margine-contenitore {
        margin-right: 50px;

        input {
            border-radius: 10px;
            padding: 6px 20px;
            margin-right: 10px;
        }

        button {
            border-radius: 10px;
            padding: 10px 15px;
            background-color: red;
            color: white;
            cursor: pointer;
        }
    }


}
</style>