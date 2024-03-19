/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6"
import { Link } from "react-router-dom"

function MovieCard({ movie }) {
    return (
        <div className=" h-[500px] flex flex-col items-center justify-between my-2">
            <img
                className="h-[350px] w-[250px] rounded-lg"
                src={movie.Poster} />
            <h1 className="text-xl font-serif">{movie.Title} : {movie.Year}</h1>
            <div className="flex justify-between gap-4 font-semibold mt-3">
                <Link
                    className=" border-[1px] px-6 py-1 rounded bg-white text-black  "
                    to={`/movie/${movie.imdbID}`}>Details</Link>
                <Link
                    className="flex items-center gap-1 border-[1px] px-6 py-1 rounded bg-zinc-700 "
                    to="/"><FaPlus />My List</Link>
            </div>
        </div>
    )
}

export default MovieCard