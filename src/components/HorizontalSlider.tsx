import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Movie} from '../interfaces/IMoviesPlaying';
import MoviePosrter from './MoviePosrter';

interface Props {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: 330}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            paddingTop: 40,
            paddingBottom: 30,
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePosrter movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
