import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Titulo extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h3 className="h3 text-dark">
          <b>
            {this.props.texto}
          </b>
        </h3>
      </div>
    );
  }
}

export default Titulo;
