import { useEffect, useState } from "react"

const useData = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://boiling-shelf-19002.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    })

    return [services, setServices]
}

export default useData;