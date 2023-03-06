import React from 'react';
import { CATEGORIES } from '../constants';

export default function CategorySelector(props) {
  const options = Object.values(CATEGORIES);
  return (
    <select
      className="categorySelect"
      value={props.category}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    >
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        );
      })}
    </select>
  );
}

/*
    <select className="categorySelect">
      <option>Popular</option>
      <option>Now Playing</option>
      <option>Top Rated</option>
      <option>Upcoming</option>
    </select>
*/
