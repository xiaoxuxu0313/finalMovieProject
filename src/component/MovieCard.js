import React from 'react';
import { getImageUrl } from '../helpers';
import { Link } from 'react-router-dom';

export default function MovieCard(props) {
  const movie = props.movie;
  //console.log(movie);
  return (
    <div className="movieCard">
      <img className="movieCardImg" src={getImageUrl(movie.poster_path)} />
      <Link to={`/movies/${movie.id}`}>
        <h4
          className="movieTitle"
          // style={{textDecoration:'none'}}
          onClick={() => {
            props.onTitleClick(movie.id);
          }}
        >
          {movie.title}
        </h4>
      </Link>
      <div className="ratingBar">
        <div className="ratingBar-left">
          <i className="ion-android-star icon-star"></i>
          <span className="averageRating"> {movie.vote_average}</span>
        </div>
        <div className="ratingBar-right">
          <i className="ion-ios-heart-outline icon-heart"></i>
        </div>
      </div>
    </div>
  );
}
