import { ChangeEvent } from 'react';
import ToggleButton from '@components/ToggleButton';
import ItemList from '@containers/ItemList';
import useFavorites from '@hooks/useFavorites';
import useJokes from '@hooks/useJokes';

function JokesList() {
    const { jokes, loading, isUpdating, setIsUpdating } = useJokes();
    const { favorites, handleToggleFavorite } = useFavorites();

    return (
        <>
            Loading {loading.toString()}
            <ToggleButton
                label="Update jokes"
                checked={isUpdating}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setIsUpdating(event.target.checked)}
            />
            <ul>
                {jokes.map((joke) => (
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

export default JokesList;