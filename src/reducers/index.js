const initialState = [];

const updateTodo = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDITEM': 
    if(action.payload.length>0){
      if(action.payload1){
        state[action.payload2]=action.payload;
      }else{
        return [...state, action.payload]
      }
      
    }else{
      window.alert("Please Type Something")
    }
    // console.log(action.payload.length)
    case 'DELETEITEM':
      // console.log(action.payload)
      const filtered = state.filter((item, id) => {
        return !(action.payload === id)
      })
      return state = filtered;

    default: return state
  }
}
export default updateTodo;