import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterChange, addIngredient } from '../reducers/filterReducer'
import { notificationChange } from '../reducers/notificationReducer'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button'
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

const SearchBar = () => {
  const filterText = useSelector(state => state.filter.text)
  const ingredients = useSelector(state => state.filter.ingredients)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    dispatch(filterChange(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!ingredients.includes(filterText)) {
      dispatch(addIngredient(filterText))
      dispatch(notificationChange(`${filterText} added`, 5))
      dispatch({type:'CLEAR_TEXT'})
    } else {
      dispatch({type:'CLEAR_TEXT'})
    }
  }

  return (
      <form onSubmit={handleSubmit}>
      <Autocomplete
        id="searchbar"
        autoComplete
        options={['tomat','løk','carrots']}
        style={{ width: 200 }}
        handleHomeEndKeys
        inputValue={filterText}
        onInputChange={(event, newInputValue) => {
          dispatch(filterChange(newInputValue))
        }}
        renderInput={(params) => (
          <TextField {...params} label="Ingrediens" variant="outlined" />
          )}
          renderOption={(option, { inputValue }) => {
            const matches = match(option, inputValue);
            const parts = parse(option, matches);
    
            return (
              <div>
                {parts.map((part, index) => (
                  <span key={index} onClick={() =>{console.log('click')}} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                    {part.text}
                  </span>
                ))}
              </div>
            );
          }}
        />
        </form>
  )
}

export default SearchBar;

/*<form onSubmit={handleSubmit}>
      <TextField placeholder='Ingrediens' value={filterText} onChange={handleChange} />
      </form>*/