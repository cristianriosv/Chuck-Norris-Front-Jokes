import { useEffect, useState } from 'react';
import ItemList from '@containers/ItemList';
import useFavorites from '@hooks/useFavorites';

const JokesFavoriteView = () => {
    const [favoritesData, setFavoritesData] = useState<IJoke[]>([]);
    const { favorites, handleToggleFavorite, getFavoritesData } = useFavorites();

    const updateFavoritesJokes = async () => {
        if (favoritesData.length < favorites.length) {
            const favoritesDataResult = await getFavoritesData();
            setFavoritesData(favoritesDataResult);
        } else {
            setFavoritesData(favoritesData.filter((joke) => favorites.includes(joke.id)));
        }
    }

    useEffect(() => {
        updateFavoritesJokes();
    }, [favorites]);

    return (
        <>
            {/* Loading {loading.toString()} */}
            <ul>
                {favoritesData.map((joke) => (
                    <li key={joke.id}>
                        <ItemList
                            id={joke.id}
                            onFavClick={handleToggleFavorite}
                            isFavorite={favorites.includes(joke.id)}
                            text={joke.value}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default JokesFavoriteView;