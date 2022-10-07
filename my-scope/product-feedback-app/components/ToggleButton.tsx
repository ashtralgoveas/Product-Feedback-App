import React, { useState } from "react";
import { Button } from "react-bootstrap";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props{
  num:number;
  
}

const ToggleButton: React.FC<Props>=({num}:Props) => {

    const [state, setState] = useState(true);
    const [counter, setCounter] = useState(num);
    
    function toggle() {
    
    setState(!state);
    if (state === true) {
      setCounter(num+1);
    
    } else {
      setCounter(num);
    
    }
    }

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      // 👇️ toggle
      setIsActive(current => !current);
  
      // 👇️ or set to true
      // setIsActive(true);
    };
    return (
        
        
    <Button style={{ backgroundColor: isActive ? 'hsl(230,76%,59%)' : '',
    color: isActive ? 'white' : 'hsl(231,33%,34%)',
    height: '2.5rem',
    borderRadius: '10px',
    width: '5rem',
    fontWeight:'bold',
    fontFamily: 'Jost',
    border:'none'}}
    onClick={()=>{toggle();handleClick()}} id="clicks">

         
      <KeyboardArrowUpIcon sx={{padding:0,margin:'-6px',position:'relative',right:'8px',top:'1px'}}/>
      {counter}
      
     </Button>
    
     
    );
    }


export default ToggleButton