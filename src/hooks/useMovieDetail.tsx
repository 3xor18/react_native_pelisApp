import {useEffect} from 'react';
import {useState} from 'react';
import movieDb from '../apis/movieDB';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/IMoviesPlaying';

interface MovideDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetail = (movideId: number) => {
  const [state, setState] = useState<MovideDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovideDetails = async () => {
    const movieDetailPromise = movieDb.get<MovieFull>(`${movideId}`);
    const castPromise = movieDb.get<CreditsResponse>(`${movideId}/credits`);

    const [movieDetailResponse, castResponse] = await Promise.all([
      movieDetailPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailResponse.data,
      cast: castResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovideDetails();
  }, []);

  return {...state};
};
