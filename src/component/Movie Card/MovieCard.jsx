import Card from "react-bootstrap/Card";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="card-wrapper">
      <Card>
        <Card.Img src={movie?.image} />
        <Card.Title className="my-3">{movie?.title}</Card.Title>
      </Card>
    </div>
  );
};

export default MovieCard;
