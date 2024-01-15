<script>
import axios from 'axios';
import { store } from '../src/store.js';

export default {
    name: 'AppCerca',

    data() {
        return {
            store,
        }
    },


    methods: {
        chiamata() {
            let apiModificata = store.api + store.ricerca

            axios.get(apiModificata).then((response) => {
                store.film = response.data.results
            });
            console.log(store.film)

        }
    }
}

</script>

<template lang="">
        <div class="margine-contenitore">
            <input v-model="store.ricerca" type="text" placeholder="Cerca">
            <button  @click='chiamata'>Cerca</button>
        </div>
</template>

<style lang="scss">
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
</style>