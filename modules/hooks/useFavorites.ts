import { useState } from 'react';
import { MAXIMUM_FAVORITE_JOKES } from '@constants/jokes.constants';

const useFavorites = () => {
    const [favorites, setFavorites] = useState<string[]>([]);

    const handleToggleFavorite = (id: string) => {
        if (favorites.length < MAXIMUM_FAVORITE_JOKES && !favorites.includes(id)) {
            setFavorites([...favorites, id]);
        } else if (favorites.includes(id)) {
            setFavorites([...favorites.filter((favorite) => favorite !== id)]);
        }
    }

    return {
        favorites,
        handleToggleFavorite
    }
}

export default useFavorites;