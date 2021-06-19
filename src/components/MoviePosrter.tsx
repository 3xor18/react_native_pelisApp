import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/IMoviesPlaying';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePosrter = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{width, height, marginHorizontal: 8}}>
      <View style={styles.imgContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imgContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 10,
  },
});

export default MoviePosrter;
