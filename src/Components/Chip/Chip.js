import React from 'react';
import { x } from "react-feather";
import "./Chip.css";
function Chip(props) {
  return (
    <div className='chip' style={{ backgroundColor: props.color}}>
        {props.text}
        { props.close && <x onClick={props.onClose ? props.close
        () : ""} /> }
    </div>
  );
}

export default Chip