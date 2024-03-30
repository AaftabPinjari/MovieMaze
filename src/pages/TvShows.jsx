import Loader from "../components/Loader"
import MovieCard from "../components/MovieCard"
import useMovie from "../context/movieContext"


function TvShows() {
    const { data, loading } = useMovie()

    const series = data.filter(item => item.Type === "series")

    // console.log(data)
    if (loading) return <Loader />

    return (
        <>


            {series && series.length > 0 ?
                <div className="p-4 md:px-24 lg:px-48
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-2
        ">{series.map((show) => (
                    <div key={show.imdbID}>
                        <MovieCard movie={show} />
                    </div>
                ))}</div> : <h1 className="flex items-center justify-center h-[80vh] 
                font-bold sm:text-xl md:text-2xl">Search For Your Favorite Tv Shows!</h1>
            }

        </>
    )
}

export default TvShows