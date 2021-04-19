import React from 'react';
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeInScreen = () => {

    const { fadeIn, fadeOut, opacity } = useFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
        }}>


            <Animated.View style={{
                backgroundColor: '#0B4F6A',
                width: 150, height: 150,
                borderColor: 'white',
                borderWidth: 5,
                marginBottom: 10,
                opacity: opacity
            }}

            />
            <Button
                title="FadeIn"
                onPress={fadeIn}
            />
            <Button
                title="FadeOut"
                onPress={fadeOut}
            />

        </View>


    )
}