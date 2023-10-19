import { Text, View, Image, FlatList,ActivityIndicator  } from 'react-native';
import { appStyles } from '../theme/appTheme';
import {useSafeAreaInsets} from  'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {
    const {top} = useSafeAreaInsets();
    const { simplePokemonList,loadPokemons,isLoading } = usePokemonPaginated();

    return (
        <>
            <Image source={require('../assets/pokebola.png')}
                style={appStyles.pokebolaBG}
            />

            <View style={{ alignItems: 'center' }}>
                <FlatList 
                    data={simplePokemonList}
                    keyExtractor={(pokemon)=> pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({item}) => (
                        <PokemonCard
                            pokemon = {item}
                        />
                    )}
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    ListHeaderComponent={
                        <Text style={{
                            ...appStyles.title,
                            ...appStyles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10,
                        }} >Pokedex</Text>
                    }
                    ListFooterComponent={
                        <ActivityIndicator style={{height:100}} size={20} color="grey" />
                    }
                />
            </View>
            
        </>
    )
}
