import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, ActivityIndicator, FlatList, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoviePosrter from '../components/MoviePosrter';
import {useMovies} from '../hooks/useMovies';
import {useWindowDimensions} from 'react-native';
import {Text} from 'react-native';

const HomeScreen = () => {
  const {width, height} = useWindowDimensions();
  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Carousel Principal */}
        <View style={{height: height - height / 0.9}}>
          <Carousel
            data={peliculasEnCine}
            renderItem={({item}: any) => <MoviePosrter movie={item} />}
            sliderWidth={width}
            itemWidth={300}
          />
          {/* Peliculas Populares */}
          <View style={{height: 330}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                paddingTop: 40,
                paddingBottom: 30,
              }}>
              Peliculas Polulares
            </Text>
            <FlatList
              data={peliculasEnCine}
              renderItem={({item}: any) => (
                <MoviePosrter movie={item} width={140} height={200} />
              )}
              keyExtractor={item => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          {/* Peliculas Populares */}
          <View style={{height: 330}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                paddingTop: 40,
                paddingBottom: 30,
              }}>
              Peliculas Polulares
            </Text>
            <FlatList
              data={peliculasEnCine}
              renderItem={({item}: any) => (
                <MoviePosrter movie={item} width={140} height={200} />
              )}
              keyExtractor={item => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
