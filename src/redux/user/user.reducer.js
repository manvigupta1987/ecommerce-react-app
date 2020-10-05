
// action is an object that contains two properties such as type and payload. Every reducer gets all the action fired by the view even if that 
// action is not related to that reducer. 
const INTIAL_STATE = {
  currentUser: null
}
const userReducer = (state=INTIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER' :
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;