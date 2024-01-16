<!-- App che gestisce i film -->
<script>
export default {
    name: 'AppCard',

    props: {
        film: Object
    },

    methods: {
        // Funzione per dividire in due e arrottondare per eccesso 
        calcolaVotoMedio(voto) {
            return Math.ceil(voto / 2);
        }
    },
}
</script>
        
<template lang="">
        <div class="card">

            <!-- In caso non esistesse film.backdrop_path prende una foto sennò carica img -->
            <img v-if="film.backdrop_path == null " class="img-null" alt="" src="https://www.matteopogliani.it/wp-content/plugins/content-cards/skins/default/content-cards-placeholder.png">
            <img  v-else :src="'https://image.tmdb.org/t/p/original' + film.backdrop_path " class="img-card" alt=""  >

            <h5>{{film.title}}</h5>
            <h5>{{film.original_title}}</h5>

            <!-- Ricerca bandiera usando trasformandolo in maiuscolo sennò non funziona -->
            <img :src="'https://flagsapi.com/'+ film.original_language.toUpperCase() +'/shiny/64.png'" class="bandiere" />    

            <!-- Creazione 5 stelle -->
            <div class="contenitore-stelle">
                <span v-for="index in calcolaVotoMedio(film.vote_average)" :key="index" ><i class="fa-solid fa-star"></i></span>
                <span v-for="index in 5 - calcolaVotoMedio(film.vote_average)"  :key="index"><i class="fa-regular fa-star"></i></span>
            </div>

        </div>
</template>

<style lang="scss" scoped></style>