import React, { useEffect } from 'react'
import SearchBar from './components/SearchBar'
import List from './components/List'
import Notification from './components/Notification'
import ChipsArray from './components/Pantry'
import {initializeRecipes} from './reducers/recipeReducer'
import { initializeOptions } from './reducers/optionReducer'
import { useDispatch } from 'react-redux'

//material-ui
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeRecipes())
    dispatch(initializeOptions())
  }, [dispatch])

  return (
    <Container>
      <Typography variant="h4">
        Bruk Opp!
      </Typography>
      <Notification />
      <SearchBar />
      <ChipsArray />
      <List />
    </Container>
  );
}

export default App;
