import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'f4d8d9ebbcdcfacf9caba1696225d15a',
        language: 'es-ES'
    }
})

export default movieDB;