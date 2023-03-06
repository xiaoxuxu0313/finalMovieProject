import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  const movieList = props.movieList;
  return (
    <div className="grid-container">
      {movieList.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} onTitleClick={props.onTitleClick}/>;
      })}
    </div>
  );
}

/*
      <MovieCard movieList={props.movieList} />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
*/
