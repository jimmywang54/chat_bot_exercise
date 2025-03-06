import React from 'react';

const SearchBar = ({keyword, onKeywordChange}) => {
    return <input value={keyword} onChange={onKeywordChange} />
}

export default SearchBar;