import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { Result, SimpleMove, useMovesPaginatedResponse } from '../interfaces/moveInterface';

export const useMovePaginated = () => {
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/move?limit=40');
    const [simpleMoveList, setSimpleMoveList] = useState<SimpleMove[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadMoves = async () => {
        setIsLoading(true);
        const resp = await pokemonApi.get<useMovesPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        mapMoveList(resp.data.results);
    };

    const mapMoveList = (moveList: Result[]) => {
        const newMoveList: SimpleMove[] = moveList.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            return {
                id,
                name,
            };
        });
        setSimpleMoveList([...simpleMoveList, ...newMoveList]);
        setIsLoading(false);
    };

    useEffect(() => {
        loadMoves();
    }, []);

    return {
        simpleMoveList,
        loadMoves,
        isLoading,
    };
};
