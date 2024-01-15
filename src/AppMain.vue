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
    <main>
        <div class="card">
             <h5>{{store.film[0].title}}</h5>
             <h5>{{store.film[0].original_title}}</h5>
             <h5>{{store.film[0].original_language}}</h5>
             <h5>{{store.film[0].vote_average}}</h5>
        </div>
    </main>
</template>

<style lang="scss">
main {
    max-width: 1200px;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;

    .card {
        width: calc(100% / 4 - 10px);
        margin: 5px;
        text-align: center;

        h5 {
            color: white;
        }

    }

}
</style>