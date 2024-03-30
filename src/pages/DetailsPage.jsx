/* eslint-disable no-useless-catch */
import { useParams } from 'react-router-dom'
// import MovieDetails from '../components/MovieDetails';
import { useEffect } from 'react';
import useMovie from '../context/movieContext';
import Loader from '../components/Loader';
import MovieDetails from '../components/Details';




function Details() {
    const params = useParams();
    console.log(params)

    const { loading, setLoading, details, setDetails } = useMovie();

    const idUrl = `https://omdbapi.com/?i=${params.id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`

    const fetchDetails = async (url) => {
        try {
            setLoading(true)
            const res = await fetch(url)
            const result = await res.json()
            // console.log(result)
            if (result) {
                setDetails(result)
                setLoading(false)

            }
            // console.log(movieDetails)
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        fetchDetails(idUrl)
    }, [idUrl])

    if (loading) return <Loader />

    return (
        <div>
            <MovieDetails movie={details} />
        </div>
    )
}

export default Details