import React from "react";
let t=19875261477455666999;
let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let secs = Math.floor((t % (1000 * 60)) / 1000);

 function Time() {
  return (
    <div className="style">
        <div>
        <h1>{hours}:{mins}:{secs}</h1>
        <div>
     
          <h1>HH:MN:SC</h1>
        </div>
      </div>
    
    </div>
  )
}
export default Time;
