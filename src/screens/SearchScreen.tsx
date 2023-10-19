import React, {useState} from 'react'
import { View, StyleSheet, ActivityIndicator, Text, FlatList, Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import { appStyles } from '../theme/appTheme';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterface';
import { useEffect } from 'react';

const width = Dimensions.get('window').width;

export const SearchScreen = () => {
    const {top} = useSafeAreaInsets();
    const {isFetching,simplePokemonList} = usePokemonSearch();
    const [pokemonFiltered, setpokemonFiltered] = useState<SimplePokemon[]>([])
    const [term, setTerm] = useState('');

    useEffect(() => {
        if (term.length === 0)
            return setpokemonFiltered([]);

        if (isNaN(Number(term))) {
            setpokemonFiltered(
                simplePokemonList.filter(
                    (pokemon)=> 
                        pokemon.name.toLocaleLowerCase().includes(term.toLowerCase())
                )
            );   
        }
        else{
            setpokemonFiltered(
                [simplePokemonList.find( (pokemon)=> pokemon.id === term )!]
            );
        }
    }, [term])
    
    if(isFetching){
        return( <Loading /> )
    }

    return (
        <View 
            style={{
                flex: 1,
                marginHorizontal: 20
            }}
        >
            
            <SearchInput
                style={{
                    ...styles.searchInput,
                    top: (Platform.OS === 'ios')? top : top + 10 
                    }}
                onDebounce={setTerm}
            />
            <FlatList 
                    data={pokemonFiltered}
                    keyExtractor={(pokemon)=> pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({item}) => (
                        <PokemonCard
                            pokemon = {item}
                        />
                    )}
                    onEndReachedThreshold={0.4}
                    ListHeaderComponent={
                        <Text style={{
                            ...appStyles.title,
                            ...appStyles.globalMargin,
                            paddingBottom: 10,
                            marginTop: (Platform.OS === 'ios')? top + 50 : top + 60 
                        }} >{term}</Text>
                    }
                />
        </View>
    )
}

const styles = StyleSheet.create({
    searchInput:{
        position: 'absolute',
        zIndex: 999,
        width: width - 40,
    }
});