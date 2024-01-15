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
             <h5>{{film.title}}</h5>
             <h5>{{film.original_title}}</h5>
             <img :src="'https://flagsapi.com/'+ film.original_language.toUpperCase() +'/shiny/64.png'" />    
             <h5>{{film.vote_average}}</h5>
        </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 4 - 10px);
    margin: 5px;
    text-align: center;

    h5 {
        color: white;
    }
}
</style>