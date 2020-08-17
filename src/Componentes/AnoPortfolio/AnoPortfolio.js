import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class AnoPortfolio extends Component{
  constructor(props){
    super(props);

    this.state = {
      setas: ["►", "▼"],
      setaAtual: 0
    };

    this.dropAno = this.dropAno.bind(this);
  }

  dropAno(){
    this.setState({setaAtual: this.state.setaAtual === 0 ? 1 : 0});
  }

  render(){
    return(
      <div>
        <div>
          <h4 className="h4 text-dark" onClick={this.dropAno}>
            {this.state.setas[this.state.setaAtual]}{this.props.ano}
          </h4>
        </div>
      </div>
    );
  }
}

export default AnoPortfolio;
