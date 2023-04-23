import { useEffect, useState } from 'react';
import { API_URL } from '@constants/api.constants';
import { MAXIMUM_FAVORITE_JOKES } from '@constants/jokes.constants';
import useJokesDataBase from '@hooks/useJokesDataBase'
import useRequest from '@hooks/useRequest';

const useFavorites = () => {
    const [loading, setLoading] = useState(false);
    const { getData } = useRequest();
    const { findFavoritesAll, updateFavoritesAll } = useJokesDataBase();
    const [favorites, setFavorites] = useState<string[]>([]);
    const [favoritesData, setFavoritesData] = useState<IJoke[]>([]);

    useEffect(() => {
        setFavorites(findFavoritesAll());
    }, []);

    const updateFavoritesJokesData = async () => {
        if (favoritesData.length < favorites.length) {
            const favoritesDataResult = await getFavoritesData();
            setFavoritesData(favoritesDataResult);
        } else {
            setFavoritesData(favoritesData.filter((joke) => favorites.includes(joke.id)));
        }
    }

    const updateFavorites = (data: string[]) => {
        setFavorites(data);
        updateFavoritesAll(data);
    }

    const handleToggleFavorite = (id: string) => {
        if (favorites.length < MAXIMUM_FAVORITE_JOKES && !favorites.includes(id)) {
            updateFavorites([...favorites, id]);
        } else if (favorites.includes(id)) {
            updateFavorites([...favorites.filter((favorite) => favorite !== id)]);
        }
    }

    const getFavoritesData = async () => {
        setLoading(true);
        const promises = favorites.map((favorite) => getData(`${API_URL}/${favorite}`));
        const results = await Promise.all(promises);
        setLoading(false);
        return results;
    }

    return {
        loading,
        favorites,
        handleToggleFavorite,
        getFavoritesData,
        favoritesData,
        updateFavoritesJokesData
    }
}

export default useFavorites;