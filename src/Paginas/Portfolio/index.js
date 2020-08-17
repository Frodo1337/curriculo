import React, {Component} from "react";
//Importação de arquivos
import "../../css/style-geral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import textos from "./textos.json";

//Importações do bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Importações dos meus componentes
import Sidebar from "../../Componentes/Sidebar/Sidebar.js";
import Titulo from "../../Componentes/Titulo/Titulo.js";
import LinhaSeparadora from "../../Componentes/LinhaSeparadora/LinhaSeparadora.js";

class Portfolio extends Component{
  constructor(props){
    super(props);

    this.state = {
      linguagem: 0
    };

    this.mudaLinguagem = this.mudaLinguagem.bind(this);
  }

  mudaLinguagem(opc){
    this.setState({linguagem: opc});
  }

  render(){
    return(
      <div>
        <Container fluid className="containerSidebar">
          <Row>
            <Col xs={1}>
              <Sidebar mudaLinguagem={this.mudaLinguagem}/>
            </Col>
            <Col>
              <Row>
                <Col>
                  <br/>
                  <Titulo texto={textos[this.state.linguagem]["tituloPagina"]}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <LinhaSeparadora/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;