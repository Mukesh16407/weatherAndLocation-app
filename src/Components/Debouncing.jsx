import React, { useEffect, useState } from 'react'


export const useDebouncing = (inputValue, delay) => {

    const [debounceValue, setDebounceValue] = useState(inputValue);


    useEffect(()=>{

        const timer = setTimeout(() => {
            setDebounceValue(inputValue)
        }, delay);

        return()=>{
            clearInterval(timer)
        }
    },[inputValue,delay])
  return debounceValue

}
