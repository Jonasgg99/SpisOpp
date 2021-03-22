import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import filterReducer from './reducers/filterReducer'
import recipeReducer from './reducers/recipeReducer'
import notificationReducer from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import optionReducer from './reducers/optionReducer'

const reducer = combineReducers({
  filter: filterReducer,
  recipes: recipeReducer,
  notification: notificationReducer,
  options: optionReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store