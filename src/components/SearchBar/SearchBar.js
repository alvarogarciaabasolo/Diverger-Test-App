import React, { useState } from 'react'
import {useFetchCharacters} from '../../services/useFetchCharacters'
export const SearchBar = () => {
  const [query, setQuery] = useState()
  const { characters, isLoading, error } = useFetchCharacters(query, 1);
console.log(characters)

  const handleInputChange = (evt) =>{
    setQuery(evt.target.value)
  }
  return (
    <div>
      <input 
      type='text'
      placeholder='Search for a character...'
      value={query}
      onChange={handleInputChange}
      />
      <button>Search</button>
    </div>
  )
}
