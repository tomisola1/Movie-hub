import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../component/PageLayout";
import MovieCard from "../component/Movie Card/MovieCard";
import MovieContext from "../context/MovieContext";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import PaginationComponent from "../component/Pagination/Pagination";
import { useEffect } from "react";

const Movies = () => {
  const { isLoading, movies } = useContext(MovieContext);
  const [movie, setMovie] = useState(movies.slice(1, 10));
  const [active, setActive] = useState(1);
  const numberOfMovies = 15;

  let indexOfLastMovie = active * numberOfMovies;
  let indexOfFirstMovie = indexOfLastMovie - numberOfMovies;
  console.log("movie", movie);
  //   useEffect(() => {
  //     if (active === 1) {
  //       const data = movie.slice(indexOfFirstMovie, indexOfLastMovie);
  //       console.log(data);
  //       setMovie(data);
  //     }
  //   }, []);

  const handleChangePage = (number) => {
    indexOfLastMovie = number * numberOfMovies;
    indexOfFirstMovie = indexOfLastMovie - numberOfMovies;
    setActive(number);
    let tenMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
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
        total={movies.length / numberOfMovies}
        current={active}
        onChangePage={handleChangePage}
      />
    </Layout>
  );
};

export default Movies;
