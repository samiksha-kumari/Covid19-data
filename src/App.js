import React from "react";
import {StateData, Cards, StateGraph} from "./components"
import "./App.css"

function App() {
  return (
      <div className="container">  
       <Cards/>
       <StateData/>
       {/* <StateGraph/> */}
      </div>
  );
}

export default App;
