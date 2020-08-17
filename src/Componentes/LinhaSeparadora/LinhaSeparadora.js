import React, {Component} from "react";
import "./style.css";

class LinhaSeparadora extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <hr className="linhaSeparadora"/>
      </div>
    );
  }
}

export default LinhaSeparadora;
