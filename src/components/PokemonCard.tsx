import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image,  } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterface';
import { FadeInImage } from './FadeInImage';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}:Props) => {
    const [bgColor, setBgColor] = useState('#acf025');
    const isMounted = useRef(true);
    const navigation = useNavigation<any>();

    useEffect(() => {
        if (!isMounted.current) return;
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        setBgColor('#'+randomColor || 'grey');
        return () => {
            isMounted.current = false;
        }
    }, [])
    

return (
    <TouchableOpacity
        activeOpacity={0.9}
        onPress={
            ()=> navigation.navigate('PokemonScreen',{ 
                simplePokemon: pokemon, 
                color: bgColor 
        })
    }
    >
        <View style={{
            ...styles.cardContainer,
            width: windowWidth * 0.4,
            backgroundColor: bgColor
        }}>
            <View>
                <Text style={styles.name} >
                    {pokemon.name}
                    {'\n#' + pokemon.id}
                </Text>
            </View>
            <View style={styles.pokeballContainer}>
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />
            </View>
            <FadeInImage 
                uri={pokemon.picture}
                style={styles.pokemonImage}
            />
        </View>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // overflow: 'hidden'
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokeball: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        opacity: 0.5
    },
    pokemonImage:{
        width: 100,
        height: 100,
        position: 'absolute',
        right: -8,
        bottom: -5,
    },
    pokeballContainer:{
        width: 100,
        height: 100,
        position: 'absolute',
        right: 0,
        bottom: 0,
        overflow: 'hidden'
    }
});