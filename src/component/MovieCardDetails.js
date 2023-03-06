import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../api';
import { getImageUrl } from '../helpers';
import { useParams } from 'react-router-dom';

export default function MovieCardDetails(props) {
  const [movieDetails, setMovieDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchMovieDetails(params.id).then((data) => {
      //console.log(data);
      setMovieDetails(data);
    });
  }, []);

  // useEffect(() => {
  //   fetchMovieDetails(props.moiveId).then((data) => {
  //     console.log(data);
  //     setMovieDetails(data);
  //   });
  // }, []);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailPage-container">
      <img
        className="movieCardDetailsImg"
        src={getImageUrl(movieDetails.poster_path)}
      />
      <div className="right-container">
        <h1>{movieDetails.original_title}</h1>
        <div className="section-title">Release Date:</div>
        <div>{movieDetails.release_date}</div>
        <div className="section-title">Overview: </div>
        <p className="overview">{movieDetails.overview}</p>
        <div className="section-title">Genres: </div>
        <div className="genres">
          {movieDetails.genres.map((genre) => {
            return (
              <label key={genre.id} className="genre">
                {genre.name}
              </label>
            );
          })}
        </div>
        <div className="section-title">Average Rating: </div>
        <div>
          <i className="ion-android-star icon-star"></i>
          <span className="averageRating"> {movieDetails.vote_average}</span>
        </div>
        <div className="section-title">Your Rating:</div>
        <div>Not yet</div>
        <div className="section-title">
          <select className="rateOption">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <button className="rateIt">RATE IT!</button>
        </div>
        <div className="section-title">Production Companies:</div>
        <div className="companyList">
          {movieDetails.production_companies.map((company) => {
            return (
              <div className="company" key={company.id}>
                <img
                  className="companyImg"
                  src={getImageUrl(company.logo_path)}
                />
                <div>{company.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
/*
          <label className="genre">Action</label>
          <label className="genre">Adventure</label>
          <label className="genre">Science Fiction</label>
*/
