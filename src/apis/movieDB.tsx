import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: '0eba3aff14c3f8dc89213b9a30ef6294',
    language: 'es-ES',
  },
});

export default movieDb;
