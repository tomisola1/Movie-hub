import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Layout from "../component/PageLayout";
import "./search.css";

const Search = () => {
  return (
    <Layout>
      <div className="search px-5">
        <Form className=" d-flex w-50 gap-3 pt-3">
          <InputGroup className="mb-3 input ">
            <Form.Control
              className="search-box"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="search movies"
            />
          </InputGroup>
          <Button variant="success" className="search-btn btn">
            Search
          </Button>{" "}
        </Form>
      </div>
    </Layout>
  );
};

export default Search;
