import { useState } from "react";
import "./App.css";

function App() {
let [num, setNum] = useState(0);
const addnum = ()=>{
setNum(num + 1);

}

const subnum = ()=>{
if(num === 0){
console.log("No subtraction");

}else{
  setNum(num - 1);
}

}
  return (
    <>
    <div id="app-container">
      <h1 id="app-heading">Counter App</h1>

      <div id="counter-display">{num}</div>

      <div id="button-container">
        <button id="decrement-btn" onClick={subnum} >
          − Decrement
        </button>
        <button id="increment-btn"  onClick={addnum}>
          + Increment
        </button>
      </div>
    </div>
    </>
  );
}

export default App;
