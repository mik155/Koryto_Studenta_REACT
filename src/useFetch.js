import { useState, useEffect } from "react";

const useFetch = (url) => 
{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true);

    useEffect(() =>{
        fetch(url)
        .then((response) => {
            if(!response.ok)
                throw Error('Cannot fetch data !');
            return response.json()
        })
        .then((data) => {
            setIsPending(false);
            setError(null);
            setData(data); 
        })
        .catch((e) => {
            setIsPending(false);
            setError(e.message);
        })    
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;