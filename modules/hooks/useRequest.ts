const useRequest = () => {
    const getData = async (url: string) => {
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData;
    }

    return {
        getData
    }
}

export default useRequest;