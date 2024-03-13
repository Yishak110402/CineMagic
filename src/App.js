import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Homepage/Navbar";
import Homepage from "./pages/Homepage";
import NowShowing from "./pages/NowShowing";

import "./index.css";
import MovieDetailPopup from "./components/Nowshowing/MovieDetailPopup";
import BookTickets from "./pages/BookTickets";

export default function App() {
  const nowShowing = [
    "tt1431045",
    "tt9663764",
    "tt2140479",
    "tt1853728",
    "tt1987680",
    "tt0268380",
    "tt15789038",
    "tt5433140",
    "tt5164214",
    "tt6806448",
    "tt0441773",
    "tt3832914",
  ];
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="nowshowing" element={<NowShowing nowShowing={nowShowing} />} />
          <Route path="nowshowing/:id" element={<MovieDetailPopup />} />
          <Route path="booktickets" element={<BookTickets nowShowing={nowShowing} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
