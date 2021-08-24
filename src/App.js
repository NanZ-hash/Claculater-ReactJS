import React, { useState } from "react";
import './App.css';

const App = () => {

  // setting up the values for the calculator
  const [result, setReslut]= useState(""); 
  return (
    <>
    {/* cla body  */}
  <div className="container"> 
  {/* to display the result  */}
    <form > 
    <input type="text" value={result} /> 
  </form>
    <div className="keyboard" >
    <button>Clear </button>
    <button>&divide;</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>&times;</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>&ndash;</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>+</button>
    <button>0</button>
    </div>
  </div>
    </>
  );
}
export default App;
