import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

const screenHeight = Dimensions.get('screen').height;


export const DetailScreen = ({ route, navigation }: Props) => {


    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer} >
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>


            {
                isLoading ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }

            {/* Button */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.pop()}
            >
                <Icon
                    color='white'
                    name="arrow-back-outline"
                    size={60}

                />
            </TouchableOpacity>


        </ScrollView>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
            borderRadius: 18,

        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 10,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25


    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 15,
        top: 30,
        left: 5,
        opacity: 0.8

    }

})