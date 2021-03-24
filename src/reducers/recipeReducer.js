import recipeService from '../services/recipes'

export const initializeRecipes = () => {
  return async dispatch => {
    const recipes = await recipeService.getAll()
    dispatch({
      type: 'INIT_RECIPES',
      data: recipes
    })
  }
}

const recipeReducer = (state= [], action) => {
  switch(action.type) {
    case 'INIT_RECIPES':
      return action.data
    default:
      return state
  }
}

export default recipeReducer