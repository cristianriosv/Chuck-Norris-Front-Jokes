import NavBar from '@containers/NavBar';
import JokesList from '@views/JokesListView';

export default function Home() {
    return (
        <>
            <NavBar />
            <main className="flex flex-col items-center justify-between p-2">
                <JokesList/>
            </main>
        </>
    )
}
