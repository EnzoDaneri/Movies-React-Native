import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './Castitem';


interface Props {
    movieFull: MovieFull;
    cast: Cast[];

}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Details */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        size={16}
                    />
                    <Text style={{ marginLeft: 5, marginRight: 5 }}>{movieFull.vote_average}</Text>
                    <Text>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>

                </View>
                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

                {/* Presupuesto */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>

            </View>

            {/* Casting */}

            <View style={{ marginTop: 10, marginBottom: 70 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Actores
                </Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
                >

                </FlatList>

            </View>
        </>
    )
}