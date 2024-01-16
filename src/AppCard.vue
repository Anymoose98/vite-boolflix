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
        },

        errore(event) {
            // Modifica l'URL dell'immagine in caso di errore
            event.target.src = 'https://flagsapi.com/IT/shiny/64.png';
        }

    },
}
</script>
        
<template lang="">
    <div class="card-container">
        <div class="card">

            <!-- Parte avanti -->
            <div class="card-front">
                <div class="titolo-card">
                    <h2>{{film.title}}</h2>
                </div>

                <!-- In caso non esistesse film.backdrop_path prende una foto sennò carica img -->
                <img v-if="film.backdrop_path == null " class="img-null" alt="" src="https://www.matteopogliani.it/wp-content/plugins/content-cards/skins/default/content-cards-placeholder.png">
                <img  v-else :src="'https://image.tmdb.org/t/p/original' + film.backdrop_path " class="img-card" alt=""  >
                
                <!-- Creazione 5 stelle -->
                <div class="contenitore-stelle">
                    <span v-for="index in calcolaVotoMedio(film.vote_average)" :key="index" ><i class="fa-solid fa-star"></i></span>
                    <span v-for="index in 5 - calcolaVotoMedio(film.vote_average)"  :key="index"><i class="fa-regular fa-star"></i></span>
                </div>
            </div>

            <!-- Parte retro -->
            <div class="card-retro">
                <!-- Ricerca bandiera usando trasformandolo in maiuscolo sennò non funziona -->
                <img :src="'https://flagsapi.com/'+ film.original_language.toUpperCase() +'/shiny/64.png'" class="bandiere" @error="errore"/>

                <h5><span>Titolo:</span> <br>{{film.title}}</h5>
                <h5><span>Titolo originale:</span> <br>{{film.original_title}}</h5>
                <span>Trama</span><br>
                <p>{{film.overview}}</p>

            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>