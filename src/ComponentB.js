import React from "react";

function ComponentB(props){
  const {myName,myText, age} = props.data;

  return(
    <div>
      <p>This is Component B</p>
      <p>My Name is :{myName}</p>
      <p>My age is :{age}</p>
      <p>Text : {myText}</p>
    </div>
  )
}


export default ComponentB;