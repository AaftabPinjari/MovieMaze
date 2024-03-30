import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Navlinks from "./components/Navlinks"
import DetailsPage from "./pages/DetailsPage"
import All from "./pages/All"
import TvShows from "./pages/TvShows"
import Watchlist from "./pages/Watchlist"

function App() {
  // const [count, setCount] = useState(0)
  //BASE_URI
  return (
    <>
      <Navbar />
      <Navlinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/:id" element={<DetailsPage />} />
      </Routes>
    </>
  )
}

export default App
