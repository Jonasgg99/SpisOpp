
export const filterChange = (data) => {
  return {
    type: 'SET_FILTER',
    data
  }
}

export const addIngredient = (data) => {
    return {
      type: 'ADD_INGREDIENT',
      data
    }
}

export const removeIngredient = (data) => {
  return {
    type: 'REMOVE_INGREDIENT',
    data
  }
}

const filterReducer = (state = { text: '', ingredients: [] }, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      const newFilter = {...state, text:action.data}
      return newFilter
    case 'ADD_INGREDIENT':
      return {...state, ingredients:[...state.ingredients, action.data]}
    case 'REMOVE_INGREDIENT':
      return {...state, ingredients: state.ingredients.filter(item => item !== action.data)}
    case 'CLEAR_TEXT':
      return {...state, text:''}
    default:
      return state
  }
}

export default filterReducer