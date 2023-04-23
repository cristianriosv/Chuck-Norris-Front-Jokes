const LOCAL_STORAGE_FAVORITE_KEY = 'favoritesJokes';

const useJokesDataBase = () => {
    const findFavoritesAll = (): string[] => {
        const localStorageData = localStorage.getItem(LOCAL_STORAGE_FAVORITE_KEY)?.split(',') || [];
        return localStorageData.filter((favorite: string) => !!favorite);
    }
    const updateFavoritesAll = (jokes: string[]) => localStorage.setItem(LOCAL_STORAGE_FAVORITE_KEY, jokes.toString());

    return {
        findFavoritesAll,
        updateFavoritesAll
    }
}

export default useJokesDataBase;
