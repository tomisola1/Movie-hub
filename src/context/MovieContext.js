import axios from "axios";
import {createContext, useState} from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieContext = createContext();

export const MovieProvider = ({children}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [movies, setMovies] = useState([]);
	const [series, setSeries] = useState([]);

	const getAllMovies = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(`https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`);
			const data = await response.data.items;
			setMovies(data);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	const getAllSeries = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(`https://imdb-api.com/en/API/MostPopularTVs/${API_KEY}`);
			const data = await response.data.items;
			setSeries(data);
		} catch (error) {
			console.log(error);
		}

		setIsLoading(false);
	};

	const getMoviesByTitle = async (value) => {
		setIsLoading(true);
		try {
			const response = await axios.get(`https://imdb-api.com/API/SearchTitle/${API_KEY}/${value}`);
			const data = await response.data.results;
			setIsLoading(false);
			return data;
		} catch (error) {
			setIsLoading(false);
			throw new Error(error);
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
