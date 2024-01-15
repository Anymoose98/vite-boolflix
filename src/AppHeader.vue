<script>
import { store } from '../src/store.js';
import AppCerca from './AppCerca.vue';

export default {
    name: 'AppHeader',

    components: {
        AppCerca,

    },

    data() {
        return {
            store,
        }
    },

    created() {

    },

    methods: {

    }
}

</script>

<template lang="">
    <header>
        <h1 class="titolo">
            BoolFlix
        </h1>
        
        <AppCerca />

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



}
</style>