import useJokes from '@hooks/useJokes';

function JokesList() {
    const { jokes, loading } = useJokes();
    
    return (
        <>
            Loading {loading.toString()}
            <ul>
                {jokes.map((joke: any) => (
                    <li key={joke.id}>{joke.value}</li>
                ))}
            </ul>
        </>
    )
}

export default JokesList;