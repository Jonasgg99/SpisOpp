import React from 'react'
import { useSelector } from 'react-redux'


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
    <div>
      {filterList(list).map(recipe => 
        <div key={recipe.name}>
          <div>
            <h2>{recipe.name}</h2>
          </div>
          <div>Image here</div>
        </div>
        )}
    </div>
  )
}

export default List

/*const test = ['carrot','onion']
const test2 = ['carrot',]
console.log(test2.every(elem => test.includes(elem)));
*/