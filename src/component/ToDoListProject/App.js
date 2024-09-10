import * as React from 'react';
import './index.css';
import Button from '@mui/material/Button';
import AddBtn from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ToDoList from './ToDoListNew';


const App = ()=> {

  const [arrayToDoList,setArrayToDoList] = React.useState([]);

  const submitBtn = (event)=>{
    
    setArrayToDoList((preVal)=>{
      return [...preVal,inputValue];
    });
    setInputValue("");
  }

  const [inputValue, setInputValue] = React.useState("");
  const inputEvent = (event)=>{
    setInputValue(event.target.value);
  }

  const deleteFunc = (event)=>{
        let str_id = event.target.id;
        let id = parseInt(str_id);

        setArrayToDoList((preValues)=>{
          return preValues.filter((item,index)=>{
              return index !==id;
          });
        });
  }



  return (
    <>

      <div className='main_div'>
        <div className='center_div'>
          <br/>
            <h1>ToDo List</h1>
          <br/>

          <input 
            type='text'
            placeholder='Enter List Item'
            onChange={inputEvent}
            value={inputValue}
          />
            <Button onClick={submitBtn}>
              <AddBtn/>
            </Button>

            <br/>
            <br/>

            <List>

            {arrayToDoList.map((item,index)=>{
                  return <ToDoList  item={item} index={index}/>;
                  
                    {/* <ListItem>
                      <ListItemText
                        primary={item}
                        
                      />
                      <Button style={{marginLeft:'20px'}}>
                        <CloseIcon onClick={deleteFunc} key={index} id={index}/>
                      </Button>
                    </ListItem> */}
                  
                  
              })}
              
            </List>


            
            {/* <ol>
              {arrayToDoList.map((item,index)=>{
                  return (

                    <li>{item}
                      <Button style={{marginLeft:'20px'}}>
                        <CloseIcon onClick={deleteFunc} key={index} id={index}/>
                      </Button>
                    </li>

                    );
              })}
              

            </ol> */}


        </div>
      </div>

    </>
  );
}

export default  App;