import "./assets/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navigation from "./components/Navigation";
import Trending from "./components/pages/Trending";
import Movies from "./components/pages/Movies";
import Series from "./components/pages/Series";
import Search from "./components/pages/Search";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app">
        <div className="row nav-fixed-top">
          <Navigation />
        </div>
          <Container className="">
            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
      
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
