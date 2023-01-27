import axios from "axios";
import { createContext, useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getAllMovies();
    getAllSeries();
  }, []);

  const getAllMovies = async () => {
    try {
      const response = await axios.get(
        `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`
      );
      const data = await response.data.items;
      setMovies(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllSeries = async () => {
    try {
      const response = await axios.get(
        `https://imdb-api.com/en/API/MostPopularTVs/${API_KEY}`
      );
      const data = await response.data.items;
      setSeries(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getMoviesByTitle = async () => {
    try {
      const response = await axios.get(
        `https://imdb-api.com/API/SearchTitle/${API_KEY}/{expression}`
      );
      const data = await response.data.results;
      console.log("data", data);
      setMovies(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        isLoading,
        movies,
        series,
        getAllMovies,
        getMoviesByTitle,
        getAllSeries,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
