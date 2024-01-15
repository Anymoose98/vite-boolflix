import { reactive } from 'vue';

export const store = reactive({
    ricerca: '',
    film: [],
    api: 'https://api.themoviedb.org/3/search/movie?api_key=6996756f1e8e198b835218f8c90bbabe&query='

})