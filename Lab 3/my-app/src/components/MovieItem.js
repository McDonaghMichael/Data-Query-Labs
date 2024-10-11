const MovieItem = (props) => {
    return (
    <div>
        <h4>
            {props.data.Title}
        </h4>
        <p>Year: {props.data.Year}</p>
    </div>);
}

export default MovieItem;