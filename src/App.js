import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StateData from "./components/StatewiseData/StateData";
import StateGraph from "./components/StatewiseData/StateGraph";

function App() {
  return (
    <BrowserRouter>
      <div>  
       <StateData/>
      </div>
    </BrowserRouter>
  );
}

export default App;
