import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../component/PageLayout";
import MovieCard from "../component/Movie Card/MovieCard";
import MovieContext from "../context/MovieContext";
import PaginationComponent from "../component/Pagination/Pagination";
import { useEffect } from "react";
import "../index.css";

const numberOfMovies = 15;

const Movies = () => {
  const { movies, getAllMovies } = useContext(MovieContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [sliceEndValue, setSliceEndValue] = useState(
    currentPage * numberOfMovies
  );
  const [sliceStartValue, setSliceStartValue] = useState(
    sliceEndValue - numberOfMovies
  );

  useEffect(() => {
    getAllMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangePage = (number) => {
    let indexOfLastMovie = number * numberOfMovies;
    let indexOfFirstMovie = indexOfLastMovie - numberOfMovies;

    setSliceEndValue(indexOfLastMovie);
    setSliceStartValue(indexOfFirstMovie);
    setCurrentPage(number);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <AnimatePresence>
        <div className="containers pt-4 px-5">
          <div className="movieCard-container">
            {movies.slice(sliceStartValue, sliceEndValue).map((movie, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <MovieCard key={idx} movie={movie} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatePresence>
      <PaginationComponent
        total={movies.length / numberOfMovies}
        current={currentPage}
        onChangePage={handleChangePage}
      />
    </Layout>
  );
};

export default Movies;
