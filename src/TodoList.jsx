  import { useState } from "react"
  import { v4 as uuidv4 } from 'uuid';
  
  export default function TodoList(){
    let[todos,setTodo] = useState([{task:"sample Task",id: uuidv4(),isDone:false}])
    let [newTodo,setNewTodo]=useState("")

let newTask = ()=>{
    setTodo((prevTodos)=>{
   return [...prevTodos, {task: newTodo,id:uuidv4(),isDone:false}]
    })
    setNewTodo("")
}

let updateTodoValue = (event)=>{
 setNewTodo(event.target.value)
}

let deleteTodo = (id)=>{
    setTodo((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id != id))
}

let upperCaseAll=()=>{
  
    setTodo((prevTodos)=>(
        prevTodos.map((todo)=>{
    return{
        ...todo,task:todo.task.toUpperCase()
    }
  })))
}

let UpperCaseOne=(id)=>{
    setTodo((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id == id){
                return{
        ...todo,task:todo.task.toUpperCase()
        }
    }else{
        return todo;
    }
  })
)
}

let markAsDone=(id)=>{
    setTodo((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id == id){
                return{
        ...todo,
        isDone:true,

        }
    }else{
        return todo;
    }
  })
)
}

let markAllDone=()=>{
  
    setTodo((prevTodos)=>(
        prevTodos.map((todo)=>{
    return{
        ...todo,
        isDone:true,
    }
  })))
}

   return(
       <div>
        <h1>Todo App</h1>
        <input placeholder="Enter a task" value={newTodo } onChange={updateTodoValue} style={{padding:"14px",width:"17rem"}}></input>
        <br></br>
        <br></br>
        <button onClick={newTask}style={{backgroundColor:"#ADD8E6"}}>Add Task</button>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
          <h4>Tasks Todo</h4>
          <ul>
            {
                todos.map((todo)=>(
                    <li key={todo.id} style={{marginTop:"12px"}}>
                        <span style={todo.isDone ? {textDecoration:"line-through", color:"red"} : {}}>{todo.task}</span>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)} style={{backgroundColor:"#ffb3b3"}}>Delete</button>
                        &nbsp;
                        &nbsp;
                         <button onClick={()=>UpperCaseOne(todo.id)} style={{backgroundColor:"#EBB866"}}>UpperCase One</button>
                         &nbsp;
                        &nbsp;
                         <button style={{backgroundColor:"wheat"}} onClick={()=>markAsDone(todo.id)}>Done Task</button>
                   </li>
                ))
            }
          </ul>
          <br></br>
          <button onClick={upperCaseAll} style={{backgroundColor:"#EBB866"}}>UpperCase All</button>
          &nbsp;
          &nbsp;
          <button onClick={markAllDone} style={{backgroundColor:"wheat"}}>All Task Done</button>

       </div>
   )
 }