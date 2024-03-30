import { CiSearch } from "react-icons/ci";
import useMovie from "../context/movieContext";
import { Link,useLocation } from "react-router-dom";





function Navbar() {

const location  = useLocation()
    console.log(location.pathname)

    const { handleSubmit, searchParam, setSearchParam } = useMovie()

    return (
        <div className="h-[10vh] p-4 md:px-16 lg:px-24 xl:px-48 flex items-center justify-between">
            <h1 className="font-serif w-1/3 text-red-500 font-semibold text-2xl md:text-3xl lg:text-4xl
            
            "><Link to="/">FILMIE</Link></h1>
            <form
                className="flex w-2/3 items-center "
                onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)}
                    className="w-4/5 p-1 text-black text-lg font-semibold rounded-full"
                    placeholder="Search your favorites..."

                />
                <CiSearch
                    onClick={handleSubmit}
                    className="w-1/5  cursor-pointer"
                    size={30}
                    type="submit"
                    fill="white" />
            </form>
        </div>
    )
}

export default Navbar
