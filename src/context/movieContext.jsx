import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MovieContext = createContext()
//url by search 


export const MovieContextProvider = ({ children }) => {

    const navigate = useNavigate()

    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [defaultMovie, setDefaultMovie] = useState('avengers')
    const [movieDetails, setMovieDetails] = useState({})
    const [watchlist, setWatchlist] = useState([])


    const titleURL = `https://omdbapi.com/?t=${defaultMovie}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
    const searchURL = `https://omdbapi.com/?s=${searchParam}&type=movie&apikey=${import.meta.env.VITE_OMDB_API_KEY}`

    const fetchMovies = async (url) => {
        setLoading(true)
        const response = await fetch(url)
        const result = await response.json()
        if (url === titleURL) {
            // console.log(result)
            setDefaultMovie(result)
            // setSearchParam('')
            setLoading(false)
        } else {
            console.log(result.Search)
            setMovies(result.Search)
            setSearchParam('')
            setLoading(false)
            navigate("/movies")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMovies(searchURL);
    }

    // console.log(movies)

    // useEffect(() => {
    //     fetchMovies(searchURL)
    // }, [])

    useEffect(() => {
        fetchMovies(titleURL)
    }, [])




    return <MovieContext.Provider value={{
        searchParam, setSearchParam,
        handleSubmit, movies, loading, setLoading, defaultMovie,
        movieDetails, setMovieDetails
    }}>
        {children}
    </MovieContext.Provider>
}

export default function useMovie() {
    return useContext(MovieContext)
}