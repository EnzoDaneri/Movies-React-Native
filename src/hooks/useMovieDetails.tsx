import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails {
    cast: Cast[];
    isLoading: boolean;
    movieFull?: MovieFull;
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {

        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailsResp, castPromiseResp] = await Promise.all([
            movieDetailsPromise,
            castPromise
        ]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast

        })
    }

    useEffect(() => {
        getMovieDetails();

    }, []);


    return {
        ...state

    }
}