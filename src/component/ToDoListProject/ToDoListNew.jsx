import React, { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Button from '@mui/material/Button';
import AddBtn from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const ToDoList = (props)=>{

    const [line,setLine] = useState(false);

    const cutButton = (event)=>{
        setLine(true);
    }

    return (
        <>
                    <ListItem style={{textDecoration:line?'line-through':'none'}}>
                      <ListItemText
                        primary={props.item}
                      />

                      <Button onClick={cutButton} style={{marginLeft:'20px'}}>
                        <CloseIcon key={props.index} id={props.index}/>
                      </Button>
                    </ListItem> 
        </>
    )
}

export default ToDoList;