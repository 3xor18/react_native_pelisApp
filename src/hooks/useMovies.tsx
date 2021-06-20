import {useEffect, useState} from 'react';
import movieDb from '../apis/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/IMoviesPlaying';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });

  const getMovies = async () => {
    const nowPlatingPromise = movieDb.get<MovieDBResponse>('now_playing');
    const popularPromise = movieDb.get<MovieDBResponse>('popular');
    const topRatedPromise = movieDb.get<MovieDBResponse>('top_rated');
    const upComingPromise = movieDb.get<MovieDBResponse>('upcoming');

    const response = await Promise.all([
      nowPlatingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ]);
    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upComing: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {isLoading, ...moviesState};
};
