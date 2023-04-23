import { useEffect, useState } from 'react';
import useRequest from '@hooks/useRequest';

const useJokes = () => {
    const [loading, setLoading] = useState(false);
    const [jokes, setJokes] = useState<any>([]);
    const { getData } = useRequest();
    
    const getRandomJoke = async () => {
        setLoading(true);
        const randomJoke = await getData('https://api.chucknorris.io/jokes/random');
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
