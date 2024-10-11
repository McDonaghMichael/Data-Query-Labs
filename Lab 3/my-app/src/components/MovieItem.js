const MovieItem = (props) => {
    return (
    <div>
        <h4>
            {props.data.Title}
        </h4>
        <p>Year: {props.data.Year}</p>
        <img src={props.data.Poster}></img>
    </div>);
}

export default MovieItem;