import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Movies from "./components/Movies"
import TvShows from "./components/TvShows"
import Footer from "./components/Footer"


const App = () => {

  return (
    <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TV Shows" element={<TvShows />} />
        </Routes>
        <Footer />
    </BrowserRouter>

  )
}

export default App
