import { useEffect, useState } from "react";

export default function useMovieDB(endpoint,options){
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        setLoading(true)
        fetch(
            `https://api.themoviedb.org/3/${endpoint}?api_key=92a1e8a051823dd85b7b52ae5c88070d&${new URLSearchParams(
            options?.query)
            .toString()}`
            )
            .then(r=>r.json())
            .then(setData)
            .finally(()=>{
            setLoading(false )
        })
    },[endpoint,options])
return {data,loading}
}