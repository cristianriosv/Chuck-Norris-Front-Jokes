import { useEffect, useState } from 'react';
import { RANDOM_JOKE_URL } from '@constants/api.constants';
import { MAXIMUM_RANDOM_JOKES } from '@constants/jokes.constants';
import useRequest from '@hooks/useRequest';

const useJokes = () => {
    const [loading, setLoading] = useState(false);
    const [jokes, setJokes] = useState<any>([]);
    const { getData } = useRequest();
    
    const getOneRandomJoke = () => getData(RANDOM_JOKE_URL);

    const getRandomJokes = async () => {
        if (!loading) {
            setLoading(true);
        }
        const randomJoke = await getOneRandomJoke();
        setJokes([...jokes, randomJoke]);
    }

    useEffect(() => {
        if (jokes.length < MAXIMUM_RANDOM_JOKES) {
            getRandomJokes();
        } else {
            setLoading(false);
        }
    }, [jokes]);

    return {
        jokes,
        loading
    }
}

export default useJokes;
