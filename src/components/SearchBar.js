import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterChange, addIngredient } from '../reducers/filterReducer'
import { notificationChange } from '../reducers/notificationReducer'
import { removeOption } from '../reducers/optionReducer'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

const SearchBar = () => {
  const filterText = useSelector(state => state.filter.text)
  const dispatch = useDispatch()

  const [value, setValue] = useState(null);

  const options = useSelector(state => state.options)
  return (
      <form>
      <Autocomplete
        id="searchbar"
        autoComplete
        options={options}
        style={{ width: 200 }}
        handleHomeEndKeys
        clearOnBlur
        autoHighlight
        value={value}
        onChange={(event, newValue) => {
          console.log('value is ', newValue);
          dispatch(addIngredient(newValue))
          dispatch(notificationChange(`${newValue} added`,5))
          dispatch(removeOption(newValue))
          setValue(null);
          dispatch({type:'CLEAR_TEXT'})
        }}
        inputValue={filterText}
        onInputChange={(event, newInputValue) => {
          console.log('input value is ', newInputValue);
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
                  <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
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

      /*
      renderOption={(option, { inputValue }) => {
            const matches = match(option, inputValue);
            const parts = parse(option, matches);
    
            return (
              <div>
                {parts.map((part, index) => (
                  <span key={index} onClick={handleClick} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                    {part.text}
                  </span>
                ))}
              </div>
            );
          }}
          */