import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Card, Col, Row } from "react-bootstrap";
import Layout from "../component/PageLayout";
import { useContext, useState } from "react";
import "./search.css";
import MovieContext from "../context/MovieContext";

const Search = () => {
  const { isLoading, movies } = useContext(MovieContext);
  const [query, setQuery] = useState("");
  const [state, setState] = useState({
    query: "",
    list: [],
  });

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
              placeholder="search movies"
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
        {state.query === ""
          ? ""
          : state.list.map((movie) => {
              return (
                // <li key={movie?.title} className="search-item">
                //   <img
                //     src={`${IMAGE_BASE_URL}/${movie?.poster_path}`}
                //     alt=""
                //     width="50px"
                //   />
                //   {movie?.title}
                // </li>
                <div className="containers pt-4 px-5">
                  <Row xs={1} sm={3} md={4} lg={4} className="g-4 gap-3">
                    <Col>
                      <div className="card-wrapper">
                        <Card className="h-100">
                          <Card.Img src={movie?.image} />
                          <Card.Title className="my-3">
                            {movie?.title}
                          </Card.Title>
                        </Card>
                      </div>
                    </Col>
                    );
                  </Row>
                </div>
              );
            })}
      </div>
    </Layout>
  );
};

export default Search;
