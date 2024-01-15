<script>
import { store } from '../src/store.js';
import AppCard from './AppCard.vue';
export default {
    name: 'AppMain',

    components: {
        AppCard,
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
        <AppCard v-for="film, index in store.film" :key="index" :film=film />
    </main>
</template>

<style lang="scss" scoped>
main {
    max-width: 1200px;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
}
</style>