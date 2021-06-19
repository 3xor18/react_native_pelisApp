import {useEffect, useState} from 'react';
import movieDb from '../apis/movieDB';
import {Movie, MovieDbNowPlaying} from '../interfaces/IMoviesPlaying';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDb.get<MovieDbNowPlaying>('now_playing');
    const peliculas = await resp.data.results;
    setPeliculasEnCine(peliculas);
  };

  useEffect(() => {
    getMovies();
    setIsLoading(false);
  }, []);

  return {peliculasEnCine, isLoading};
};
