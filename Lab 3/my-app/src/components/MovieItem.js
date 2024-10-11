import Card from 'react-bootstrap/Card';
import { useEffect } from "react";


const MovieItem = (props) => {
    return (
    <div>
        <Card>
        <Card.Header>{props.data.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.data.Poster} alt={props.data.Title} />
            <footer>{props.data.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>);
}

export default MovieItem;