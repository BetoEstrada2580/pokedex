import { useInsertionEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { MoveInfo } from '../interfaces/moveInterface';

export const useMove = (id: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<MoveInfo>({} as MoveInfo);

    const loadPokemon = async () => {
        setIsLoading(true);
        const resp = await pokemonApi.get<MoveInfo>(
            `https://pokeapi.co/api/v2/move/${id}`,
        );
        setPokemon(resp.data);
        setIsLoading(false);
    };

    useInsertionEffect(() => {
        loadPokemon();
    }, []);

    return {
        isLoading,
        pokemon,
    };
};
