import { useEffect, useState } from "react";

export function useTitleCase(text) {

    const[converted,setConverted] = useState([]);

    useEffect(()=>{
        if(!text) return;

        const words = text.split(' ');

        const result = words
        .map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

        setConverted(result);

    },[text])

  return converted;
}
