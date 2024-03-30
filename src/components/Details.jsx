/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6"
import { AiOutlineDelete } from "react-icons/ai";
import useMovie from "../context/movieContext"

function Details({ movie }) {
    const { handleAddToWatchlist, watchlist } = useMovie()
    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center p-4 md:px-24 lg:px-48">
                <div>
                    <img
                        className="border-[1px] h-[80vh] rounded-lg  opacity-80"
                        src={movie.Poster} />
                </div>

                <div className="md:h-[80vh] md:w-2/3  flex flex-col gap-3 items-center">
                    {/*  this div only visible on large screen */}
                    <div className="
        text-center
        ">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-2xl font-semibold font-serif">{movie.Title}</h1>
                            <h3 className="">Year : {movie.Year}</h3>
                            <h3 className="">Languages : {movie.Language}</h3>
                            <h3 className="">Director : {movie.Director}</h3>
                            <h3 className="">Genre : {movie.Genre}</h3>
                            <h3 className=""> Country : {movie.Country}</h3>
                            <p className="">{movie.Plot}</p>
                            <h3 className="">Awards : {movie.Awards}</h3>
                            <h3 className=""><span
                                className="bg-yellow-400 px-1 text-black font-semibold rounded"
                            >IMDB</span> : {movie.imdbRating}</h3>
                            <h3 className="">Release Date : {movie.Released}</h3>
                            <h3 className="">Box Office : {movie.BoxOffice}</h3>

                        </div>

                    </div>
                    <button
                        onClick={() => handleAddToWatchlist(movie)}
                        className="flex items-center ml-4  gap-1   border-[1px] px-8 py-1
        rounded bg-zinc-700 font-semibold "
                    >
                        {watchlist.findIndex(item => item.imdbID === movie.imdbID) === -1 ?
                            (<><FaPlus />MyList</>)
                            : (<><AiOutlineDelete />Remove</>)

                        }
                    </button>

                </div>
            </div>
        </>
    )
}

export default Details