import Movie from "./Movie";

const MovieList = (props) => {
    return (
        <ul className='p-3 bg-slate-500 m-1'>
          {props.movies.map((movie) => (
            <Movie
              title={movie.title}
              releaseDate={movie.releaseDate}
              openingText={movie.openingText}
            />
          ))}
        </ul>
      );
    };
  
  export default MovieList;