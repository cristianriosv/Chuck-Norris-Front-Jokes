export const findOldestJoke = (jokes: IJoke[]) => {
    const sortedArray = [...jokes].sort((jokeA, jokeB) => {
        const jokeDateA = new Date(jokeA.updated_at).getTime();
        const jokeDateB = new Date(jokeB.updated_at).getTime();
        return jokeDateA - jokeDateB;
    });
    return sortedArray.length ? sortedArray[0] : null;
}
