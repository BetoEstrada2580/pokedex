import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { useMovePaginated } from '../hooks/useMovePaginated';
import { MoveCard } from '../components/Moves/MoveCard';

export const MovementScreen = ({ navigation }: any) => {
    const { simpleMoveList, loadMoves, isLoading } = useMovePaginated();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Image source={require('../assets/pokebola.png')} style={appStyles.pokebolaBG} />
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={simpleMoveList}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => <MoveCard move={item} />}
                    onEndReached={loadMoves}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={20} color="grey" />}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});
