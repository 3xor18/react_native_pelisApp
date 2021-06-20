import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/IMoviesPlaying';
import currencyFormatter from 'currency-formatter';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            {' '}
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* Historia */}
        <Text style={{fontSize: 23, marginTop: 20, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        {/* Presupuesto */}
        <Text style={{fontSize: 23, marginTop: 20, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
    </>
  );
};

export default MovieDetails;
