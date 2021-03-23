
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
    data: {all:['','carrots','løk','tomat','tomatjuice'],
            current:['','carrots','løk','tomat','tomatjuice']}
  }
}

export const resetOptions = () => {
  return {
    type:'RESET_OPTIONS'
  }
}

const optionReducer = (state = {current:[],all:[]}, action) => {
  switch(action.type) {
    case 'ADD_OPTION':
      console.log('adding');
      return {...state, current:[...state.current, action.data]}
    case 'REMOVE_OPTION':
      return {...state, current:state.current.filter(i => i !== action.data)}
    case 'INIT_OPTIONS':
      return action.data
    case 'RESET_OPTIONS':
      return {...state, current:[...state.all]}
    default:
      return state
  }
}

export default optionReducer