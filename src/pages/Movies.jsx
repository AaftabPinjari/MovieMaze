import Loader from "../components/Loader"
import MovieCard from "../components/MovieCard"
import useMovie from "../context/movieContext"


function Movies() {
    const { data, loading } = useMovie()

    const movies = data.filter(item => item.Type === "movie")


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
                ))}</div> : <h1 className="flex items-center justify-center h-[80vh] 
                font-bold sm:text-xl md:text-2xl">Search For Your Favorite Movies!</h1>
            }

        </>
    )
}

export default Movies