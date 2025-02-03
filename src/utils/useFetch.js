import { useState } from "react";
import { useEffect } from "react";


//Custom Hook: useFetch
//Fetches data from the provided URL and manages loading and error states.

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch(url);
                const data = await response.json();
                setData(data)
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);
    return {data, error, loading}
}

export default useFetch;