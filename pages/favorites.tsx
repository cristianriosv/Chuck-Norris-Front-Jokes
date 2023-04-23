import NavBar from '@containers/NavBar';
import JokesFavoriteView from '@views/JokesFavoriteView';

export default function Favorites() {
    return (
        <>
            <NavBar />
            <main className="flex flex-col items-center justify-between p-2">
                <JokesFavoriteView/>
            </main>
        </>
    )
}
