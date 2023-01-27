import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MovieCard from "../component/Movie Card/MovieCard";
import Layout from "../component/PageLayout";
import MovieContext from "../context/MovieContext";
import Row from "react-bootstrap/Row";
import PaginationComponent from "../component/Pagination/Pagination";

const Series = () => {
  const { isLoading, series } = useContext(MovieContext);
  const [movie, setMovie] = useState([]);
  const [active, setActive] = useState(1);
  const numberOfMovies = 15;

  let indexOfLastMovie = active * numberOfMovies;
  let indexOfFirstMovie = indexOfLastMovie - numberOfMovies;

  useEffect(() => {
    if (active === 1) {
      const data = series.slice(indexOfFirstMovie, indexOfLastMovie);
      console.log(data);
      setMovie(data);
    }
  }, []);

  const handleChangePage = (number) => {
    indexOfLastMovie = number * numberOfMovies;
    indexOfFirstMovie = indexOfLastMovie - numberOfMovies;
    setActive(number);
    let tenMovies = series.slice(indexOfFirstMovie, indexOfLastMovie);
    setMovie(tenMovies);
  };

  return (
    <Layout>
      <AnimatePresence>
        <div className="containers pt-4 px-5">
          <Row xs={1} md={3} className="g-4 gap-3">
            {movie.map((movie, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ width: "260px" }}
              >
                <MovieCard key={idx} movie={movie} />
              </motion.div>
            ))}
          </Row>
        </div>
      </AnimatePresence>
      <PaginationComponent
        total={series.length / numberOfMovies}
        current={active}
        onChangePage={handleChangePage}
      />
    </Layout>
  );
};

export default Series;
