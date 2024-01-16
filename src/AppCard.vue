<script>
export default {
    name: 'AppCard',

    props: {
        film: Object
    }
}
</script>
        
<template lang="">
        <div class="card">
            <img src="https://image.tmdb.org/t/p/original//iEFuHjqrE059SmflBva1JzDJutE.jpg" class="img-card" alt="">
             <h5>{{film.title}}</h5>
             <h5>{{film.original_title}}</h5>
             <img :src="'https://flagsapi.com/'+ film.original_language.toUpperCase() +'/shiny/64.png'" class="bandiere" />    
             <h5>{{film.vote_average}}</h5>
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


    .img-card {
        width: 100%;
        margin: 0 auto
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