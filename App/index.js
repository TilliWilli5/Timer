import React from "react";
import ReactDOM from "react-dom";
//
//Start of your code
//
import Timer from "./Component/component_logic.js";
import AvComponent from "./Component/component_avatar.js";
let timer = new Timer();
console.log(timer);
//
//End of your code
//
ReactDOM.render(<AvComponent timer={timer} />, document.getElementById("container"));