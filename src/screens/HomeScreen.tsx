import { Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {
    const { simplePokemonList, loadPokemons, isLoading } = usePokemonPaginated();

    return (
        <>
            <Image source={require('../assets/pokebola.png')} style={appStyles.pokebolaBG} />
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    // ListHeaderComponent={
                    //     <Text
                    //         style={{
                    //             ...appStyles.title,
                    //             ...appStyles.globalMargin,
                    //             paddingBottom: 10,
                    //         }}
                    //     >
                    //         Pokedex
                    //     </Text>
                    // }
                    ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={20} color="grey" />}
                />
            </View>
        </>
    );
};
