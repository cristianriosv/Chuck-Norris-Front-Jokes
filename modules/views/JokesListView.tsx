import { ChangeEvent } from 'react';
import ToggleButton from '@components/ToggleButton';
import useJokes from '@hooks/useJokes';

function JokesList() {
    const { jokes, loading, isUpdating, setIsUpdating } = useJokes();
    
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
                    <li key={joke.id}>{joke.value}</li>
                ))}
            </ul>
        </>
    )
}

export default JokesList;