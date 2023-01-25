import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Layout from "../component/PageLayout";
import "./search.css";

const Search = () => {
  return (
    <Layout>
      <div className="search">
        <InputGroup className="mt-3 input ">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Button variant="success" className="btn mt-3">
          Search
        </Button>{" "}
      </div>
    </Layout>
  );
};

export default Search;
