import { useState,useEffect } from "react";

export function useFetchData(url){
    const [data,setData] =  useState([]);

    useEffect( ()=>{
        fetch(url)
        .then(response  => response.json())
        .then( apiData =>{
            setData(apiData);
        } )
    },[url] )
    return data;
}
