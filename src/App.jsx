import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Navlinks from "./components/Navlinks"
import Details from "./pages/Details"

function App() {
  // const [count, setCount] = useState(0)
  //BASE_URI
  return (
    <>
      <Navbar />
      <Navlinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
