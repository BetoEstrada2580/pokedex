import { useInsertionEffect, useState } from 'react';
import { PokemonInfo } from '../interfaces/pokemonInterface';
import { pokemonApi } from '../api/pokemonApi';


export const usePokemon = (id: string) => {
    const [isLoading, setIsLoading] = useState(true)
    const [pokemon, setPokemon] = useState<PokemonInfo>({} as PokemonInfo)

    const loadPokemon = async() => {
        setIsLoading(true);
        const resp = await pokemonApi.get<PokemonInfo>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(resp.data);
        setIsLoading(false);
    }

    useInsertionEffect(() => {
        loadPokemon();
    }, [])

    return {
        isLoading,
        pokemon,
    }
}
