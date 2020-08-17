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
import Habilidade from "../../Componentes/Habilidade/Habilidade.js";

class Curriculo extends Component{
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
    const habilidades = [];
    const atividadesExtras = [];
    let maxHabilidades = textos[this.state.linguagem]["habilidades"].length;
    let maxAtividadesExtras = textos[this.state.linguagem]["atividadesExtras"].length;

    //Parada para imprimir todas as habilidades de forma melhor, assim é só adicionar
    //uma nova habilidade no state de textos que sempre vai imprimir bonito na tela
    for(let i = 0; i < maxHabilidades - 1; i += 2){
      habilidades.push(<Row key={i}>
                        <Col>
                          <Habilidade titulo={textos[this.state.linguagem]["habilidades"][i][0]}
                                      nivel={textos[this.state.linguagem]["habilidades"][i][1]}
                                      min={textos[this.state.linguagem]["nivelMinHabilidade"]}
                                      max={textos[this.state.linguagem]["nivelMaxHabilidade"]}/>
                        </Col>
                        <Col>
                          <Habilidade titulo={textos[this.state.linguagem]["habilidades"][i+1][0]}
                                      nivel={textos[this.state.linguagem]["habilidades"][i+1][1]}
                                      min={textos[this.state.linguagem]["nivelMinHabilidade"]}
                                      max={textos[this.state.linguagem]["nivelMaxHabilidade"]}/>
                        </Col>
                       </Row>);


    }

    if(maxHabilidades % 2 === 1){
      habilidades.push(<Row key={maxHabilidades}>
                        <Col>
                          <Habilidade titulo={textos[this.state.linguagem]["habilidades"][maxHabilidades - 1][0]}
                                      nivel={textos[this.state.linguagem]["habilidades"][maxHabilidades - 1][1]}
                                      min={textos[this.state.linguagem]["nivelMinHabilidade"]}
                                      max={textos[this.state.linguagem]["nivelMaxHabilidade"]}/>
                        </Col>
                        <Col>
                        </Col>
                       </Row>);
    }

    for(let i = 0; i < maxAtividadesExtras; i ++){
      atividadesExtras.push(<span key={i}>
                              {textos[this.state.linguagem]["atividadesExtras"][i]}<br/>
                            </span>);
    }

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
              <Row>
                <Col>
                  <Titulo texto={textos[this.state.linguagem]["tituloSobreMim"]}/>

                  <span>
                    {textos[this.state.linguagem]["sobreMim"]}
                  </span>
                </Col>
                <Col>
                  <Titulo texto={textos[this.state.linguagem]["tituloContato"]}/>

                  <span>
                    E-mail: siqueirawm@hotmail.com
                  </span>
                  <br/>
                  <span>
                    {textos[this.state.linguagem]["tituloTelefone"]}
                    : (41)99144-3360
                  </span>
                  <br/>
                  <span>
                    {textos[this.state.linguagem]["tituloDataNascimento"]}
                    : {textos[this.state.linguagem]["dataNascimento"]}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <LinhaSeparadora/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Titulo texto={textos[this.state.linguagem]["tituloEducacao"]}/>

                  <span>
                    <b>{textos[this.state.linguagem]["educacao"][0]}</b><br/>
                    {textos[this.state.linguagem]["educacao"][1]}<br/>
                    {textos[this.state.linguagem]["educacao"][2]}<br/>
                    <b>{textos[this.state.linguagem]["educacao"][3]}</b><br/>
                    {textos[this.state.linguagem]["educacao"][4]}<br/>
                    {textos[this.state.linguagem]["educacao"][5]}<br/>
                  </span>
                </Col>
                <Col>
                  <Titulo texto={textos[this.state.linguagem]["tituloObjetivos"]}/>

                  <span>
                    {textos[this.state.linguagem]["objetivos"]}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <LinhaSeparadora/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Titulo texto={textos[this.state.linguagem]["tituloExperiencia"]}/>

                  <span>
                    <b>{textos[this.state.linguagem]["experiencia"][0]}</b><br/>
                    {textos[this.state.linguagem]["experiencia"][1]}<br/>
                    <b>{textos[this.state.linguagem]["experiencia"][2]}</b><br/>
                    {textos[this.state.linguagem]["experiencia"][3]}<br/>
                    <b>{textos[this.state.linguagem]["experiencia"][4]}</b><br/>
                    {textos[this.state.linguagem]["experiencia"][5]}<br/>
                    <b>{textos[this.state.linguagem]["experiencia"][6]}</b><br/>
                    {textos[this.state.linguagem]["experiencia"][7]}<br/>
                    {textos[this.state.linguagem]["experiencia"][8]}<br/>
                    {textos[this.state.linguagem]["experiencia"][9]}<br/>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <LinhaSeparadora/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Titulo texto={textos[this.state.linguagem]["tituloHabilidades"]}/>

                  {habilidades}
                </Col>
              </Row>
              <Row>
                <Col>
                  <LinhaSeparadora/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Titulo texto={textos[this.state.linguagem]["tituloAtividadesExtras"]}/>

                  {atividadesExtras}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Curriculo;
