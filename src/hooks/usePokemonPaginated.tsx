import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { Result, SimplePokemon, usePokemonPaginatedResponse } from '../interfaces/pokemonInterface';

export const usePokemonPaginated = () => {
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadPokemons = async () => {
        setIsLoading(true);
        const resp = await pokemonApi.get<usePokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        mapPokemonList(resp.data.results);
    };

    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return {
                id,
                name,
                picture,
            };
        });
        setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
        setIsLoading(false);
    };

    useEffect(() => {
        loadPokemons();
    }, []);

    return {
        simplePokemonList,
        loadPokemons,
        isLoading,
    };
};
