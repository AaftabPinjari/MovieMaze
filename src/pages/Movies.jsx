import Loader from "../components/Loader"
import MovieCard from "../components/MovieCard"
import useMovie from "../context/movieContext"


function Movies() {
    const { movies, loading } = useMovie()

    // console.log(movies)
    if (loading) return <Loader />

    return (
        <>


            {movies && movies.length > 0 ?
                <div className="p-4 md:px-24 lg:px-48
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-2
        ">{movies.map((movie) => (
                    <div key={movie.imdbID}>
                        <MovieCard movie={movie} />
                    </div>
                ))}</div> : <h1 className="flex items-center justify-center h-[80vh] text-2xl">Search For Your Favorite Movies!</h1>
            }

        </>
    )
}

export default Movies