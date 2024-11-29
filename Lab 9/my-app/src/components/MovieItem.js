import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

/**
 * MovieItem will display the title, year and poster of a movie
 * and it will be displayed using the Boostrap Card
 */
const MovieItem = (props) => {

    // MovieItem component and its data is returned in the form of a boostrap card
    return (
    <div>
        <Card>
        <Card.Header>{props.data.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.data.poster} alt={props.data.title} />
            <footer>{props.data.year}</footer>
            <Link to={"/edit/" + props.data._id} className="btn btn-primary">Edit</Link>
          </blockquote>
        </Card.Body>
      </Card>
    </div>);
}

export default MovieItem;