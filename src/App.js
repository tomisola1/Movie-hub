import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Search from "./Pages/Search";
// import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact="/" path="/" element={<Movies />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
