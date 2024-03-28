import { useEffect, useState } from "react";

const useLocalStorage = (key, options = []) => {
    if(localStorage.getItem(key)){
        options = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(options)

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key])

    return [value, setValue];
}

export default useLocalStorage;