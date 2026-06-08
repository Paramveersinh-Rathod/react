import React from 'react'
import SearchSvg from '../assets/SearchImg.svg'
const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <img src={SearchSvg} alt="searchSvg" />
      <input type="text" />
      <button>Search</button>
    </div>
  )
}

export default SearchBar
