import { useEffect, useState } from 'react';
import { RANDOM_JOKE_URL } from '@constants/api.constants';
import useRequest from '@hooks/useRequest';

const useJokes = () => {
    const [loading, setLoading] = useState(false);
    const [jokes, setJokes] = useState<any>([]);
    const { getData } = useRequest();
    
    const getRandomJoke = async () => {
        setLoading(true);
        const randomJoke = await getData(RANDOM_JOKE_URL);
        setJokes([...jokes, randomJoke]);
        setLoading(false);
    };

    useEffect(() => {
        getRandomJoke();
    }, []);

    return {
        jokes,
        loading
    }
}

export default useJokes;
