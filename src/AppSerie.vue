<script>
export default {
    name: 'AppSerie',

    props: {
        serie: Object
    }
}
</script>
        
<template lang="">
    <div class="card">
             <h5>{{serie.name}}</h5>
             <h5>{{serie.original_name}}</h5>
             <img :src="'https://flagsapi.com/'+ serie.origin_country[0] +'/shiny/64.png'" />    
             <h5>{{serie.vote_average}}</h5>
        </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 4 - 10px);
    margin: 20px 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;


    img {
        width: 30px;
        margin: 0 auto
    }

    h5 {
        color: white;
    }
}
</style>