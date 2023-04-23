import useJokesDataBase from '@hooks/useJokesDataBase';

describe('useHookDataBase', () => {
    it('should return empty favorites from localstorage', () => {
        const { findFavoritesAll } = useJokesDataBase();
        const favorites = findFavoritesAll();
        const EXPECTED_LENGTH = 0;
        expect(favorites.length).to.equal(EXPECTED_LENGTH);
    })
    it('should return saved favorites', () => {
        const { findFavoritesAll, updateFavoritesAll } = useJokesDataBase();
        const SAVED_JOKES = ['joke1', 'joke2'];
        updateFavoritesAll(SAVED_JOKES);
        const favorites = findFavoritesAll();
        expect(favorites.length).to.equal(SAVED_JOKES.length);
    })
    it('should return saved favorites without empty strings', () => {
        const { findFavoritesAll, updateFavoritesAll } = useJokesDataBase();
        const SAVED_JOKES = ['joke1', 'joke2'];
        const SAVED_JOKES_EMPTY = ['', ''];
        updateFavoritesAll(SAVED_JOKES.concat(SAVED_JOKES_EMPTY));
        const favorites = findFavoritesAll();
        expect(favorites.length).to.equal(SAVED_JOKES.length);
    })
})