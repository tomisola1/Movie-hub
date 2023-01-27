import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import movie from "../../assets/puss-in-boots.jpeg";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    // <Col>
    <div className="card-wrapper">
      <Card className="h-100">
        <Card.Img src={movie?.image} />
        <Card.Title className="my-3">{movie?.title}</Card.Title>
      </Card>
    </div>
    // </Col>
  );
};

export default MovieCard;
