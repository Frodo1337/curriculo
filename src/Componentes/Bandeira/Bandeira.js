import React, {Component} from "react";
import "./style.css";

import Image from "react-bootstrap/Image";

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

  render(){
    return(
      <div>
        <div className="bandeira">
          <Image src={this.tipoBandeira()} fluid/>
        </div>
      </div>
    );
  }
}

export default Bandeira;
