import { NavLink } from "react-router-dom"

function Navlinks() {
    return (
        <div
            className="flex items-center text-xs lg:text-sm  justify-center gap-3 
            p-4 md:px-16 lg:px-24 xl:px-48
            
            "
        >
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "" : ""} border-[1px] 
                px-4 rounded py-1 bg-zinc-700
                `}
                to='/all'>All</NavLink>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "" : ""} border-[1px] 
                px-4 rounded py-1 bg-zinc-700
                `}
                to='/movies'>Movies</NavLink>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "" : ""} border-[1px] 
                px-3 rounded py-1 bg-zinc-700
                `}
                to='/tvshows'>TV Shows</NavLink>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "" : ""} border-[1px] 
                px-4 rounded py-1 bg-zinc-700
                `}
                to='/watchlist'>WatchList</NavLink>
        </div>
    )
}

export default Navlinks