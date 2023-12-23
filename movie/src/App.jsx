import { useState,useEffect } from 'react';
import MovieList from './components/MovieList';
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryInterval, setRetryInterval] = useState(null);

  useEffect(() => {
    if (error) {
      setRetryInterval(
        setInterval(() => {
          fetchMoviesHandler();
        }, 5000)
      );
    } else {
      clearInterval(retryInterval);
    }

    return () => clearInterval(retryInterval);
  }, [error]);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/fil/');
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (error) {
      setError('Something went wrong... Retrying');
    }
  }

  function cancelRetryHandler() {
    clearInterval(retryInterval);
    setError("");
  }

  return (
    <>
      <section>
        <button className='p-3 bg-blue-950 text-white rounded-2xl' onClick={fetchMoviesHandler}>
          Fetch Movies
        </button>
      </section>
      <section>
        {!isLoading && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No Movies</p>}
        {isLoading && <p>Loading....</p>}
        {error && (
          <div>
            <p>{error}</p>
            <button className='text-3xl bg-slate-500 p-2 rounded-sm' onClick={cancelRetryHandler}>Cancel </button>
          </div>
        )}
      </section>
    </>
  );
}

export default App;