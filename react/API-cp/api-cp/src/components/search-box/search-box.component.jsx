import React from 'react';
import'./search-box.styles.css';


function SearchBox (props) {
    return (
        <input 
            className={`search-box ${props.className}`} 
            type='search' 
            placeholder={props.placeholder} 
            onChange={props.onChangeHandler} 
      />
    );
};
export default SearchBox;


