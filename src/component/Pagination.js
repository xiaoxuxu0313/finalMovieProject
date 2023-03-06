import React from 'react';
import CategorySelector from './CategorySelector';

export default function Pagination(props) {
  return (
    <div className="pagination">
      <div className="pageBar-container">
        <div className="pageBar">
          <button className="prevAndNext-button" onClick={props.onPrevClick} >PREV</button>
          <label className="showPage">
            {props.currentPage} / {props.totalPage}
          </label>
          <button className="prevAndNext-button" onClick={props.onNextClick} >NEXT</button>
        </div>
      </div>
      <div className="category-container">
        <div className="categoryText">Catogory</div>
        <CategorySelector category={props.category} onChange={props.onChange} />
      </div>
    </div>
  );
}
