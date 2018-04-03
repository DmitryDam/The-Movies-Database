import React from 'react';
import './SearchCategories.css';


const SearchCategories = ({onSetSearchValues})=>(
      <div className="SearchCategories">
          <button className="SearchCategories__btn" onClick={() => onSetSearchValues('popular')}>Popular</button>
          <button className="SearchCategories__btn" onClick={() => onSetSearchValues('top_rated')}>Top rated</button>
          <button className="SearchCategories__btn" onClick={() => onSetSearchValues('upcoming')}>Upcoming</button>
      </div>
)

export default SearchCategories;