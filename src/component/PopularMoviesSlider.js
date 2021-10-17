import React from 'react'
import { useState,useEffect } from 'react'

export default function PopularMoviesSlider() {
    const[data,setData]= useState(null)
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=92a1e8a051823dd85b7b52ae5c88070d")
        .then((s)=>s.json()).then
        (setData)
      },[])
    return (
        <div>
            
        </div>
    )
}
