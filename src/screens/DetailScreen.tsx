import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, ScrollView, useWindowDimensions} from 'react-native';
import {Image, StyleSheet} from 'react-native';
import {View, Text, ActivityIndicator} from 'react-native';
import {RootStackParams} from '../routes/Navigation';
import {useMovieDetail} from '../hooks/useMovieDetail';
import MovieDetails from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'details'> {}
const sxrenHei = Dimensions.get('screen').height;

const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetail(movie.id);

  return (
    <ScrollView>
      <View style={styles.imgContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    width: '100%',
    height: sxrenHei * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {fontSize: 16, opacity: 0.8},
  title: {fontSize: 20, fontWeight: 'bold'},
});

export default DetailScreen;
