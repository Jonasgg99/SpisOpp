
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

export const initializeOptions = () => {
  return {
    type:'INIT_OPTIONS',
    data: ['','carrots','løk','tomat','tomatjuice']
  }
}

export const setOptions = () => {
  return {
    type:'RESET_OPTIONS'
  }
}

const optionReducer = (state = ['','tomat','løk','carrots','tomatjuice'], action) => {
  switch(action.type) {
    case 'ADD_OPTION':
      console.log('adding');
      return [...state, action.data]
    case 'REMOVE_OPTION':
      return state.filter(i => i !== action.data)
    case 'INIT_OPTIONS':
      return action.data
    case 'RESET_OPTIONS':
      return 
    default:
      return state
  }
}

export default optionReducer