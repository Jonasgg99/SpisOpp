import React, { useEffect } from 'react'
import SearchBar from './components/SearchBar'
import List from './components/List'
import Notification from './components/Notification'
import {initializeRecipes} from './reducers/recipeReducer'
import { useDispatch } from 'react-redux'

//material-ui
import Container from '@material-ui/core/Container'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeRecipes())
  }, [dispatch])


  return (
    <Container>
      <h1>Restemat</h1>
      <Notification />
      <SearchBar />
      <List />
    </Container>
  );
}

export default App;
