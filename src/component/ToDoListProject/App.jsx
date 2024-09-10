import React,{useState} from 'react';
import './index.css';
const App = ()=>{
      
  const [inputItem,setInputItem] = useState();
  const [arrToDoList,setArrToDoList] = useState([]);

  const InputEvent = (event)=>{
    setInputItem(event.target.value);
  }

  const btnAddItem = ()=>{
    setArrToDoList((oldValues)=>{
      return [...oldValues,inputItem];
    });

    setInputItem("");

  }


  const deleteItem = (event)=>{
      let id = event.target.id;
      id = parseInt(id);
      setArrToDoList((oldValues)=>{
          return oldValues.filter((arrElem,index)=>{
              return index!==id;
          })
      });
  }
console.log(arrToDoList);
  

      return(
        <>

<div className="main_div">
                <div className="center_div">
                <br/>
                <h1>ToDo List</h1>

                <input placeholder="Add a Items" type="text" value={inputItem} onChange={InputEvent}/>
                <button onClick={btnAddItem}>+</button>

                <ol>

                {arrToDoList.map((item,index)=>
                  <li  className='todo_style' onClick={deleteItem}><i key={index} id={index} className='fa fa-times'/>{item}</li>
                )}
                    
                    
                </ol>

                </div>
            </div>
            
        </>
      )  
}

export default App;