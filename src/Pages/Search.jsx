import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import Layout from "../component/PageLayout";
import { useContext, useState } from "react";
import MovieContext from "../context/MovieContext";
import MovieCard from "../component/Movie Card/MovieCard";
import Spinner from "react-bootstrap/Spinner";
import "../index.css";

const Search = () => {
  const { isLoading, getMoviesByTitle } = useContext(MovieContext);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setMovies([]);
    }
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMoviesByTitle(query.trim())
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="search px-5">
        <Form className=" d-flex w-50 gap-3 pt-3" onSubmit={handleSubmit}>
          <InputGroup className="mb-3 input ">
            <Form.Control
              className="search-box"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Search by Movies Title"
              onChange={handleChange}
              value={query}
            />
          </InputGroup>
          <Button
            variant="success"
            className="search-btn btn"
            onClick={handleSubmit}
          >
            Search
          </Button>{" "}
        </Form>
      </div>
      <div className="search-list">
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center spin">
            <Spinner animation="border" variant="success" />
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              padding: "20px 50px",
            }}
          >
            {movies.map((movie, idx) => (
              <MovieCard key={idx} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
