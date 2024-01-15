<script>
import { store } from '../src/store.js';

export default {
    name: 'AppCerca',

    data() {
        return {
            store,
        }
    },


    methods: {
        prova() {
            console.log(store.ricerca)
        }
    }
}

</script>

<template lang="">
        <div class="margine-contenitore">
            <input v-model="store.ricerca" type="text" placeholder="Cerca">
            <button  @click='prova'>Cerca</button>
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