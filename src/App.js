import "./App.css";
import "./normalize.css";

import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";

import { useState } from "react";

import { SingleGame } from "./pages/SingleGame/singleGame";
import { Gallery } from "./pages/Gallery/gallery";
import { Hero } from "./pages/Hero/hero";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState();

  if (search === "") setSearch();

  return (
    <Router>
      <Header searching={setSearch} />

      <Routes>
        <Route
          path="/gallery/detroit-become-human"
          element={<SingleGame renderGame="detroit become human" />}
        />

        <Route
          path="/gallery/days-gone"
          element={<SingleGame renderGame="days gone" />}
        />

        <Route
          path="/gallery/rise-of-tomb-raider"
          element={<SingleGame renderGame="rise of tomb raider" />}
        />

        <Route
          path="/gallery/devil-may-cry-dmc"
          element={<SingleGame renderGame="dmc" />}
        />

        <Route
          path="/gallery/assassins-creed-odyssey"
          element={<SingleGame renderGame="odyssey" />}
        />

        <Route path="/gallery" element={<Gallery searchGame={search} />} />
        <Route path="/" element={<Hero />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
