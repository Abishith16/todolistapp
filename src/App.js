import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')

  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's  newday</h2>
    </div>
    <div className="input">
      <input 
        value={toDo} 
        onChange={(e)=>setToDo(e.target.value)} 
        type="text" 
        placeholder="🖊️ Add item..." 
      />
      <i 
        onClick={()=>{
          if(toDo.trim()){ // Only add if toDo is not empty
            setToDos([...toDos,{id:Date.now() ,text:toDo,status:false}])
            setToDo(''); // Clear the input field after adding
          }
        }} 
        className="fas fa-plus">
      </i>
    </div>
    <div className="todos">
      {toDos.map((obj)=>{
        return(
        <div className="todo" key={obj.id}>
        <div className="left">
          <input  
            onChange={(e)=>{
              setToDos(toDos.map(obj2=>{
                if(obj2.id === obj.id){
                  obj2.status = e.target.checked;
                }
                return obj2;
              }))
            }} 
            checked={obj.status} 
            type="checkbox" 
          />
          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i 
            onClick={()=>{
              setToDos(toDos.filter(obj2 => obj2.id !== obj.id))
            }} 
            className="fas fa-times">
          </i>
        </div>
      </div>)
      })}

      {toDos.map((obj)=>{
        if(obj.status){
          return(<h1 key={obj.id}>{obj.text}</h1>)
        }
        return null
      })}
    </div>
  </div>
  );
}

export default App;
