import { useState } from "react";

function AngryButton(){
  
  const [anger, setAnger] = useState(0);

  return (
    <button style={{ backgoundColor:`rgba(255,0,0,${anger})` }} className="AngryButton">
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;