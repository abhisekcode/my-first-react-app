import React, {useState, useEffect} from "react";

function InputField(){
const [input, setInput] = useState('');
const [isRendered, setIsrendered] = useState(false);

function handleInputEvent(event){
  const newValue = event.target.value;
  setInput(newValue);
}
useEffect(function(){
  setIsrendered(true);
  return function(){
    setIsrendered(false);
  };
}, []);
return(
  <div>
    <input type="text" placeholder="type..." value={input} onChange={handleInputEvent} />
  </div>
)
}
 export default InputField;