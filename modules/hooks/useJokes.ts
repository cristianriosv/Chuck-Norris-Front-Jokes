import { useEffect, useRef, useState } from 'react';
import { RANDOM_JOKE_URL } from '@constants/api.constants';
import { MAXIMUM_RANDOM_JOKES, UPDATE_JOKES_SECONDS } from '@constants/jokes.constants';
import useRequest from '@hooks/useRequest';
import { findOldestJoke } from '@utils/jokes.utils';

const useJokes = () => {
    const [loading, setLoading] = useState(false);
    const [jokes, setJokes] = useState<IJoke[]>([]);
    const [isUpdating, setIsUpdating] = useState(false);
    const timeoutRef = useRef<number | null>(null);
    const { getData } = useRequest();

    const getOneRandomJoke = () => getData(RANDOM_JOKE_URL);

    const getRandomJokes = async () => {
        setLoading(true);
        const promises = Array.from(Array(MAXIMUM_RANDOM_JOKES).keys()).map(() => getData(RANDOM_JOKE_URL));
        const results = await Promise.all(promises);
        setLoading(false);
        setJokes(results);
    }

    const replaceOldestJoke = (newJoke: IJoke) => {
        const oldestJoke = findOldestJoke(jokes);
        if (oldestJoke) {
            setJokes([...jokes.filter((joke) => joke.id !== oldestJoke.id), newJoke]);
        }
    }

    const updateOldestJoke = async () => {
        setLoading(true);
        const randomJoke = await getOneRandomJoke();
        replaceOldestJoke(randomJoke);
        setLoading(false);
    }

    const initializeJokes = () => {
        if (jokes.length < MAXIMUM_RANDOM_JOKES) {
            getRandomJokes();
        }
    }

    const setUpdaterJokes = () => {
        if (isUpdating) {
            timeoutRef.current = window.setTimeout(() => {
                if (jokes.length >= MAXIMUM_RANDOM_JOKES) {
                    updateOldestJoke();
                }
            }, UPDATE_JOKES_SECONDS);
        } else if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }

    useEffect(() => {
        initializeJokes();
        setUpdaterJokes();
        return () => {
            timeoutRef.current && window.clearTimeout(timeoutRef.current)
            timeoutRef.current = null;
        }
    }, [jokes, isUpdating]);

    return {
        jokes,
        loading,
        setIsUpdating,
        isUpdating
    }
}

export default useJokes;
