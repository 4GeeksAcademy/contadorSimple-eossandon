import '../../styles/index.css'
import React from "react";


function Counter (props){
  return (
    <div className='container'>
      <div className="target ">{props.digitSix}</div>
      <div className="target ">{props.digitFive}</div>
      <div className="target ">{props.digitFour}</div>
      <div className="target ">{props.digitThree}</div>
      <div className="target ">{props.digitTwo}</div>
      <div className="target ">{props.digitOne}</div>
    </div>
  );
};
export default Counter

setInterval(function(){
    
})