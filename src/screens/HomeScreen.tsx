import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, isLoading, popular, topRated, upcoming } = useMovies();

    const { top, bottom } = useSafeAreaInsets();


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator
                    color="red"
                    size={100}
                />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, marginBottom: bottom + 5 }}>

                {/* Main Carousel */}
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                {/* Populars Movies */}
                <HorizontalSlider title="Popular" movies={popular} />
                <HorizontalSlider title="Top rated" movies={topRated} />
                <HorizontalSlider title="Upcoming" movies={upcoming} />

            </View>
        </ScrollView>
    )
}