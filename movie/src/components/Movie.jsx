const Movie = (props) => {
    return (
      <li className='p-4 w-30 m-1'>
        <h2 className="">{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
      </li>
    );
  };
  
  export default Movie;