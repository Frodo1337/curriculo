import React, {Component} from "react";
import "./style.css";

import bandeiraBrasil from "./img/bandeira-brasil.svg";
import bandeiraEua from "./img/bandeira-estados-unidos.png";

class Bandeira extends Component{
  constructor(props){
    super(props);

  }

  tipoBandeira(){
    if(this.props.tipo === "brasil"){
      return bandeiraBrasil;
    }
    else if(this.props.tipo === "eua"){
      return bandeiraEua;
    }
  }
  //  <Image src={this.tipoBandeira()} fluid/>
  render(){
    return(
      <div>
        <div className="bandeira" style={{backgroundImage: "url(" + this.tipoBandeira() + ")"}}>
        </div>
      </div>
    );
  }
}

export default Bandeira;
