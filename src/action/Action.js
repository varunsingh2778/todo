export const addItem = (todo,index,indexNum)=>{
  return{
    type:'ADDITEM',
    payload:todo,
    payload1:index,
    payload2:indexNum
  }
}
export const delItem = (id)=>{
  return{
    type : 'DELETEITEM',
    payload:id
  }
}

