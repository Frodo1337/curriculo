import React, {Component} from "react";
//Importação de arquivos
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style-geral.css";
import textos from "./textos.json";
import textosSidebar from "../../json/sidebar.json";
import projetos from "./projetos.json";

//Importações do bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Importações dos meus componentes
import Sidebar from "../../Componentes/Sidebar/Sidebar.js";
import Titulo from "../../Componentes/Titulo/Titulo.js";
import LinhaSeparadora from "../../Componentes/LinhaSeparadora/LinhaSeparadora.js";
import AnoPortfolio from "../../Componentes/AnoPortfolio/AnoPortfolio.js";

class Portfolio extends Component{
  constructor(props){
    super(props);

    this.state = {
      linguagem: 0,
      anoInicio: 2016
    };

    this.mudaLinguagem = this.mudaLinguagem.bind(this);
  }

  mudaLinguagem(opc){
    this.setState({linguagem: opc});
  }

  render(){
    const anos = [];
    const maxAno = new Date().getFullYear();

    //Conta todos os anos desde o ano atual até o ano do primeiro projeto no portfolio
    for(let i = maxAno; i >= this.state.anoInicio; i --){
      anos.push(<AnoPortfolio key={i} ano={i} conteudo={projetos[this.state.linguagem][i]}/>);
    }

    return(
      <div>
        <Container fluid className="containerSidebar">
          <Row>
            <Col xs={1}>
              <Sidebar mudaLinguagem={this.mudaLinguagem}
                       textos={textosSidebar[this.state.linguagem]}/>
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
              <Row>
                <Col>
                  {anos}
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
