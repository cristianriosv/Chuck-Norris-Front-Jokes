import { ChangeEvent } from 'react';
import Loading from '@components/Loading';
import ToggleButton from '@components/ToggleButton';
import ItemList from '@containers/ItemList';
import useFavorites from '@hooks/useFavorites';
import useJokes from '@hooks/useJokes';

function JokesList() {
    const { jokes, loading, isUpdating, setIsUpdating } = useJokes();
    const { favorites, handleToggleFavorite } = useFavorites();

    return (
        <>
            <div className="flex items-cetner justify-between w-full max-w-md mb-5">
                <Loading isLoading={loading || isUpdating} />
                <ToggleButton
                    label="Keep updating jokes"
                    checked={isUpdating}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setIsUpdating(event.target.checked)}
                />
            </div>
            <ul id="jokeList" className="w-full max-w-md space-y-4">
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