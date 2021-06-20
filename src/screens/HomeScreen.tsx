import React, {useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoviePosrter from '../components/MoviePosrter';
import {useMovies} from '../hooks/useMovies';
import {useWindowDimensions} from 'react-native';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackgroud from '../components/GradientBackgroud';
import {getImageColor} from '../helpers/getColores';
import {useContext} from 'react';
import {gradientContext} from '../context/gradienteContext';

const HomeScreen = () => {
  const {width, height} = useWindowDimensions();
  const {nowPlaying, isLoading, popular, topRated, upComing} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors, setPrevMainColors} = useContext(gradientContext);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColor(0);
    }
  }, [nowPlaying]);

  const getPosterColor = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'blue'] = await getImageColor(uri);
    setMainColors({primary, secondary});
  };

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
              onSnapToItem={index => getPosterColor(index)}
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
