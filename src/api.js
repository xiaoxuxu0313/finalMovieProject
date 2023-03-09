export const API_KEY = '9054d13f576df3907d3d097e7f8076cf';

export const fetchMoviesByCategory = (category, page) => {
  const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;

  return fetch(url).then((resp) => {
    return resp.json();
  });
};

export const fetchMovieDetails = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  return fetch(url).then((resp) => {
    //console.log(resp.json());
    return resp.json();
  });
};
