import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, ActivityIndicator, FlatList, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoviePosrter from '../components/MoviePosrter';
import {useMovies} from '../hooks/useMovies';
import {useWindowDimensions} from 'react-native';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackgroud from '../components/GradientBackgroud';

const HomeScreen = () => {
  const {width, height} = useWindowDimensions();
  const {nowPlaying, isLoading, popular, topRated, upComing} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackgroud>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Carousel Principal */}
          <View style={{height: height - height / 0.9}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePosrter movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
            />
            {/* Populares */}
            <HorizontalSlider title="Popular" movies={popular} />
            <HorizontalSlider title="Top Rated" movies={topRated} />
            <HorizontalSlider title="Up Coming" movies={upComing} />
          </View>
        </View>
      </ScrollView>
    </GradientBackgroud>
  );
};

export default HomeScreen;
