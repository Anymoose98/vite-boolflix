<script>
import { store } from '../src/store.js';

export default {
    name: 'AppMain',

    data() {
        return {
            store,
        }
    },
}


</script>

<template lang="">
    <div>
        <ul>
            <li>{{store.film[0].title}}</li>
            <li>{{store.film[0].original_title}}</li>
            <li>{{store.film[0].original_language}}</li>
            <li>{{store.film[0].vote_average}}</li>

        </ul>
    </div>
</template>

<style lang="scss">
ul {
    margin: 20px;

    li {
        color: white;
        font-size: medium;

    }
}
</style>