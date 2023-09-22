import React from 'react';
import ComponentB from './ComponentB';

function ComponentA(){
  const dataBeingPassed = {
    myText : "This is the first Component by Abhishek",
    myName : "abhishek",
    age :20
  };
  return(
    <div>
      <p>This is Component A</p>
      <ComponentB data = {dataBeingPassed} />
    </div>
  )
}


export default ComponentA;