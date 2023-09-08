import { useReducer, useState } from "react";

function AngryButton(){
  
  const [anger, dispatch] = useReducer((anger, action) =>
    anger < 1 ? anger + action : 0, 0
  );

  return (
    <button 
      style={{ backgroundColor:`rgba(255,0,0,${anger})` }} 
      onClick={()=>dispatch(0.1)}
      className="AngryButton"
    >
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;