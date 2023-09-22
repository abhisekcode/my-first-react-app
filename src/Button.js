import React, {useState} from "react";

function Button(){
  const [isCliked, setisClicked] = useState(false);

  function handleClick(){
    setisClicked(true);
    console.log('The Button is clicked');
  }
  return(
    <div>
      <button onClick={handleClick}>MyButton</button>
    </div>
  );
}

export default Button;