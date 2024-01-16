<script>
export default {
    name: 'AppCard',

    props: {
        film: Object
    },

    methods: {
        calcolaVotoMedio(voto) {
            return Math.ceil(voto / 2);
        }
    },
}
</script>
        
<template lang="">
        <div class="card">
            <img v-if="film.backdrop_path == null " class="img-null" alt="" src="https://www.matteopogliani.it/wp-content/plugins/content-cards/skins/default/content-cards-placeholder.png">
            <img  v-else :src="'https://image.tmdb.org/t/p/original' + film.backdrop_path " class="img-card" alt=""  >

             <h5>{{film.title}}</h5>
             <h5>{{film.original_title}}</h5>
             <img :src="'https://flagsapi.com/'+ film.original_language.toUpperCase() +'/shiny/64.png'" class="bandiere" />    

             <div class="contenitore-stelle">
                <span v-for="index in 5" :key="index" ><i class="fa-solid fa-star"></i></span>
            </div>
             <!-- <h5   >{{calcolaVotoMedio(film.vote_average)}}</h5> -->
        </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 4 - 10px);
    margin: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 300px;

    .fa-solid {
        color: white;
    }

    .img-card {
        width: 100%;
        margin: 0 auto
    }

    .img-null {
        width: 100%;
        height: 163.13px;
        object-fit: cover;
    }

    .bandiere {
        width: 30px;
        margin: 0 auto
    }

    h5 {
        color: white;
    }
}
</style>