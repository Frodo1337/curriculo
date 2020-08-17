import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class AnoPortfolio extends Component{
  constructor(props){
    super(props);

    this.state = {
      setas: ["►", "▼"],
      display: ["none", "block"],
      setaAtual: 0
    };

    this.dropAno = this.dropAno.bind(this);
  }

  dropAno(){
    this.setState({setaAtual: this.state.setaAtual === 0 ? 1 : 0});
  }

  render(){
    let keys = Object.keys(this.props.conteudo);
    let max = keys.length;
    let conteudo = [];

    //Cria divs de acordo com o número de conteúdo de cada ano
    //0 é o título, 1 a descrição e 2 a mídia
    for(let i = 0; i < max; i ++){
      conteudo.push(
        <div key={this.props.keys + "-" + i}>
          <h5 className="h5 font-weight-bold">
            {this.props.conteudo[i][0]}
          </h5>
          <div dangerouslySetInnerHTML={{__html: this.props.conteudo[i][1]}}>
          </div>
          <div dangerouslySetInnerHTML={{__html: this.props.conteudo[i][2]}}>
          </div>
          <br/>
        </div>
      );
    }

    return(
      <div>
        <div>
          <h4 className="h4 text-dark bold" onClick={this.dropAno}>
            {this.state.setas[this.state.setaAtual]}{this.props.ano}
          </h4>
        </div>
        <div style={{display: this.state.display[this.state.setaAtual]}}>
          {conteudo}
        </div>
      </div>
    );
  }
}

export default AnoPortfolio;
