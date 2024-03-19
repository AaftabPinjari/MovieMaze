import Loader from "../components/Loader"
import useMovie from "../context/movieContext"
import MovieDetails from "../components/MovieDetails";

function Home() {

    const { loading, defaultMovie } = useMovie()

    console.log(defaultMovie)
    if (loading) return <Loader />

    return (
        <>
            <h1 className='text-center text-3xl mt-2 font-serif font-bold'>Movie of the Day</h1>
            <MovieDetails movie={defaultMovie} />
        </>
    )
}

export default Home