import { useEffect } from 'react';
import ItemList from '@containers/ItemList';
import useFavorites from '@hooks/useFavorites';

const JokesFavoriteView = () => {
    const { favorites, handleToggleFavorite, updateFavoritesJokesData, favoritesData } = useFavorites();

    useEffect(() => {
        updateFavoritesJokesData();
    }, [favorites]);

    return (
        <>
            {/* Loading {loading.toString()} */}
            <ul id="jokeList">
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