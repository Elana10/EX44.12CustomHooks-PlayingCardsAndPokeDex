import {useState, useEffect} from "react";

const useFlip = () => {
    const [flip, setFlip] = useState(true);
    const flipCard = () => {
        setFlip(state => !state)
    }
    return [flip, flipCard]
}

export default useFlip;