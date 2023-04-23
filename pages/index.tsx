import NavBar from '@containers/NavBar';
import JokesList from '@views/JokesListView';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <NavBar />
            <JokesList/>
        </main>
    )
}
