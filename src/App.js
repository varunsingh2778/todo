import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useSelector,useDispatch} from 'react-redux';
import {addItem,delItem} from './action/Action';

function App() {
  const[todo,setTodo] = useState("");
  const [index,setIndex] = useState(false);
  const[indexNum,setIndexNum] = useState(0);
  const myState = useSelector((state)=>state.updateTodo);
  const dispatch = useDispatch();

  const handleOnchange = (e)=>{
    // console.log(e.target.value)
    if(e.target.value.length>0){
      setTodo(e.target.value)
    }
  }
  const handleAddItem= ()=>{
    dispatch(addItem(todo,index,indexNum))
    setTodo("")
    setIndex(false)
  }
  const handleEdit = (a,item)=>{
    // console.log(todo)
    setTodo(item);
    setIndexNum(a);
    setIndex(true);  
  } 

  return (
    <>
      <div className='container'>
        <h1 className='text'>Todo List using Redux</h1>
        <div className="mb-3">
          <input type="email" className="form-control text" id="exampleFormControlInput1" onChange={handleOnchange} placeholder="Enter Your To do"  value={todo}/>
        </div>
        <div>
          <button type="button" className="btn btn-success btn" onClick={()=>handleAddItem()}>Add</button>
        </div>
        <div className='litems'>
        {myState.map((item,index)=>{
          return <li className="list-group-item lists">{item}
          <button type="button" className="btn btn-danger btn2" onClick={()=>dispatch(delItem(index))}>Delete</button>
          <button type="button" className="btn btn-warning btn3" onClick={()=>handleEdit(index,item)}>Edit</button>
        </li>
        })}
        
      </div>
      </div>
      
    </>
  )
}

export default App