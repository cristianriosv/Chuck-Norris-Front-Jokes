const LOCAL_STORAGE_FAVORITE_KEY = 'favoritesJokes';

const useJokesDataBase = () => {
    const findFavoritesAll = (): string[] => localStorage.getItem(LOCAL_STORAGE_FAVORITE_KEY)?.split(',') || [];
    const updateFavoritesAll = (jokes: string[]) => localStorage.setItem(LOCAL_STORAGE_FAVORITE_KEY, jokes.toString());

    return {
        findFavoritesAll,
        updateFavoritesAll
    }
}

export default useJokesDataBase;
