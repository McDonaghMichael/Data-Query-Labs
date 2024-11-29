import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
/**
 * MovieItem will display the title, year and poster of a movie
 * and it will be displayed using the Boostrap Card
 */
const MovieItem = (props) => {

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(props);
      axios.delete('http://localhost:4000/api/movie/' + props.data._id)
          .then(() => {
              props.Reload(); // Refresh the movie list after deletion
          })
          .catch((error) => {
              console.error("Error deleting movie:", error);
          });
      };

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
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
          </blockquote>
        </Card.Body>
      </Card>
    </div>);
}

export default MovieItem;