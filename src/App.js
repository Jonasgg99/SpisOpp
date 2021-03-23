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


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeRecipes())
    dispatch(initializeOptions())
  }, [dispatch])

  return (
    <Container>
      <h1>Restemat</h1>
      <Notification />
      <SearchBar />
      <ChipsArray />
      <List />
    </Container>
  );
}

export default App;
