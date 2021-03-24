import React from 'react'
import { useSelector } from 'react-redux'
import RecipeCard from './RecipeCard'
import Grid from '@material-ui/core/Grid'


const List = () => {
  const list = useSelector(state => state.recipes)
  const filter = useSelector(state => state.filter)

  const filterList = (list) => {
    const filteredList = list.filter(recipe => 
      recipe.ingredients.some(ingredient => ingredient.includes(filter.text))
      && filter.ingredients.every(item => recipe.ingredients.includes(item))
    )
    return filteredList
  }

  return (
      <Grid container spacing={3}>
        {filterList(list).map(recipe => 
          <Grid item xs={12} sm={3}>
            <RecipeCard title={recipe.name} time={recipe.time} desc={recipe.desc} />
          </Grid>
        )}
      </Grid>
  )
}

export default List

/*<Grid container spacing={3}>
          <Grid item xs={6}>
        <RecipeCard title="Rett" time="30" />
        </Grid>
        </Grid>

/*const test = ['carrot','onion']
const test2 = ['carrot',]
console.log(test2.every(elem => test.includes(elem)));
*/