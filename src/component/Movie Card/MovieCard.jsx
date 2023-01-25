import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import movie from "../../assets/puss-in-boots.jpeg";
import "./MovieCard.css";

const MovieCard = () => {
  return (
    <div className="containers pt-4 px-5">
      <Row xs={1} md={2} className="g-4 gap-5">
        <div className="card-wrapper">
          <Card>
            <Card.Img src={movie} />
            <Card.Title className="my-3">Puss In Boot</Card.Title>
          </Card>
        </div>
        <div className="card-wrapper">
          <Card>
            <Card.Img src={movie} />
            <Card.Title className="my-3">Puss In Boot</Card.Title>
          </Card>
        </div>
      </Row>
    </div>
  );
};

export default MovieCard;
