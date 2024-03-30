/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6"
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom"
import useMovie from "../context/movieContext"


function MovieCard({ movie }) {
    const { handleAddToWatchlist, watchlist } = useMovie()
    return (
        <div className=" h-[400px] flex flex-col items-center justify-between my-2">
            <img
                className="h-[300px] w-[200px] rounded-lg"
                src={movie.Poster} />
            <h1 className="text-xl font-serif truncate w-full text-center">{movie.Title}</h1>
            <h3 className="text-xl font-serif  w-full text-center">{movie.Year}</h3>
            <div className="flex justify-between gap-4 font-semibold mt-3">
                <Link
                    className=" border-[1px] px-6 py-1 rounded bg-white text-black  "
                    to={`/${movie.imdbID}`}>Details</Link>
                <button
                    onClick={() => handleAddToWatchlist(movie)}
                    className="flex items-center gap-2 border-[1px] px-6 py-1 rounded bg-zinc-700 "
                >
                    {watchlist.findIndex(item => item.imdbID === movie.imdbID) === -1 ?
                        (<><FaPlus />MyList</>)
                        : (<><AiOutlineDelete />Remove</>)

                    }
                </button>
            </div>
        </div>
    )
}

export default MovieCard