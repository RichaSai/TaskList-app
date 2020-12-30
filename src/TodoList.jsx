import React , {useState} from 'react';
import './TodoList.css';


function TodoList() {
     const [todo,setTodo] = useState();
     const [myArray,setArray] = useState([]);



     const addTodo = () =>{
        console.log("todo",todo);
        setArray(myArray=>[...myArray,todo]);
        setTodo("");
      

     }
     
     const removeTodo = (id) =>{
        console.log("Id",id);
        const removeArray =  myArray.filter(item => item !== id);
        setArray([...removeArray]);
     }

    return (
        <div className="main" >
            <div className="heading">
            <h1>Task List!</h1>
            </div>
            <input className="input" placeholder="Enter Task" type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}}></input>
            <button className="btn" onClick={todo && addTodo}>+</button>
            <div>
    
    {myArray.map((item=><ul><li>{item}<button className="btn" onClick={()=>removeTodo(item)}>-</button></li></ul>))}
            </div>
            
        </div>
        
    )
}

export default TodoList
