import { useEffect, useState } from "react"

const useAppData = () => {
    const [App , setApp] = useState([]);

    useEffect(() => {
        fetch('/AppData.json')
        .then(res => res.json())
        .then(data => {
            setApp(data);
            
        })

    },[])
    return App;
}

export default useAppData;