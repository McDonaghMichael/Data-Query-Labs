import Card from 'react-bootstrap/Card';

/**
 * MovieItem will display the title, year and poster of a movie
 * and it will be displayed using the Boostrap Card
 */
const MovieItem = (props) => {

    // MovieItem component and its data is returned in the form of a boostrap card
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