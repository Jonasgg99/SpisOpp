
export const removeOption = (data) => {
  return {
    type:'REMOVE_OPTION',
    data
  }
}

export const addOption = (data) => {
  return {
    type:'ADD_OPTION',
    data
  }
}

const optionReducer = (state = ['','tomat','løk','carrots','tomatjuice'], action) => {
  switch(action.type) {
    case 'ADD_OPTION':
      console.log('adding');
      return [...state, action.data]
    case 'REMOVE_OPTION':
      return state.filter(i => i !== action.data)
    default:
      return state
  }
}

export default optionReducer