import MovieCard from "../components/MovieCard"
import useMovie from "../context/movieContext"


function WatchList() {
    const { watchlist } = useMovie()
    console.log(watchlist)

    // console.log(data)

    return (
        <>


            {watchlist && watchlist.length > 0 ?
                <div className="p-4 md:px-24 lg:px-48
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-2
        ">{watchlist.map((movie) => (
                    <div key={movie.imdbID}>
                        <MovieCard movie={movie} />
                    </div>
                ))}</div> : <h1 className="flex items-center justify-center h-[80vh]
                font-bold sm:text-xl md:text-2xl">Add Something to WatchList!</h1>
            }

        </>
    )
}

export default WatchList