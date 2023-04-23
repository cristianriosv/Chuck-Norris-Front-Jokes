import NavBar from '@containers/NavBar';
import JokesFavoriteView from '@views/JokesFavoriteView';

export default function Favorites() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <NavBar />
            <JokesFavoriteView/>
        </main>
    )
}
