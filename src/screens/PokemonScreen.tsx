import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';
import { SimplePokemon } from '../interfaces/pokemonInterface';

export type RootStackParams = {
    HomeScreen: undefined;
    PokemonScreen: { simplePokemon: SimplePokemon; color: string };
};

interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ navigation, route }: any) => {
    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();
    const { isLoading, pokemon } = usePokemon(id);

    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={{ ...styles.headerContainer, backgroundColor: color }}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 5,
                    }}
                >
                    <Ionicons name="arrow-back-outline" size={32} color="white" />
                </TouchableOpacity>
                <Text
                    style={{
                        ...styles.pokemonName,
                        top: top + 40,
                    }}
                >
                    {name + '\n'}#{id}
                </Text>
                <Image source={require('../assets/pokebola-blanca.png')} style={styles.pokeball} />
                <FadeInImage uri={picture} style={styles.pokemonImage} />
            </View>
            {/* Información y Loading */}
            {isLoading ? (
                <View style={styles.loadingIndicator}>
                    <ActivityIndicator color={color} size="large" />
                </View>
            ) : (
                <PokemonDetails pokemon={pokemon} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball: {
        height: 250,
        width: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        height: 250,
        width: 250,
        position: 'absolute',
        bottom: -15,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
