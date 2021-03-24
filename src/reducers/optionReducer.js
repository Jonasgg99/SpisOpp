import optionsService from '../services/options'

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
  return async dispatch => {
    const options = await optionsService.get()
    dispatch({
      type: 'INIT_OPTIONS',
      data: options
    })
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
      return {current:action.data, all:action.data}
    case 'RESET_OPTIONS':
      return {...state, current:[...state.all]}
    default:
      return state
  }
}

export default optionReducer