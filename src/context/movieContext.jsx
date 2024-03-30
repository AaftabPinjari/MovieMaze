import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MovieContext = createContext()
//url by search 


export const MovieContextProvider = ({ children }) => {

    const navigate = useNavigate()

    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [details, setDetails] = useState({})
    const [watchlist, setWatchlist] = useState([])


    const searchURL = `https://omdbapi.com/?s=${searchParam}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`

    const fetchData = async (url) => {
        setLoading(true)
        const response = await fetch(url)
        const result = await response.json()
        // console.log(result.Search)
        navigate('/all')
        setData(result.Search)
        setSearchParam('')
        setLoading(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData(searchURL);
    }

    const handleAddToWatchlist = (currItem) => {
        let copyWatchlist = [...watchlist]
        const index = copyWatchlist.findIndex(item => item.imdbID === currItem.imdbID)

        if (index === -1) {
            copyWatchlist.push(currItem)
        } else {
            copyWatchlist.splice(index, 1)
        }
        setWatchlist(copyWatchlist)
        // navigate("/watchlist")
    }

    //local storage
    useEffect(() => {
        const watchlist = JSON.parse(localStorage.getItem("watchlist"))
        if (watchlist && watchlist.length > 0) {
            setWatchlist(watchlist)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist))
    }, [watchlist])


    return <MovieContext.Provider value={{
        searchParam, setSearchParam, watchlist,
        handleSubmit, data, loading, setLoading,
        details, setDetails, handleAddToWatchlist
    }}>
        {children}
    </MovieContext.Provider>
}

export default function useMovie() {
    return useContext(MovieContext)
}