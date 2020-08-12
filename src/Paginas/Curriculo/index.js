import React, {Component} from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sidebar from "../../Componentes/Sidebar/Sidebar.js";
import LinhaSeparadora from "../../Componentes/LinhaSeparadora/LinhaSeparadora.js";
import TituloCurriculo from "../../Componentes/TituloCurriculo/TituloCurriculo.js";
import Habilidade from "../../Componentes/Habilidade/Habilidade.js";

class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      linguagem: 0,
      textos: {
        0: {
            "tituloPagina": "Currículo de Matheus Wilhelm Siqueira",
            "tituloTelefone": "Telefone",
            "tituloDataNascimento": "Data de Nascimento",
            "dataNascimento": "30/08/1998",
            "tituloContato": "Informações para Contato",
            "tituloSobreMim": "Sobre mim",
            "sobreMim": "Nascido em Curitiba, sempre fui apaixonado por tecnologia e\
                         tive contato com ela desde pequeno. Comecei a seguir meu sonho \
                         quando entrei no ensino médio técnico em informática. Após \
                         me formar comecei a cursar ciência da computação, que \
                         ainda continuo cursando",
            "tituloEducacao": "Educação",
            "educacao": ["ENSINO MÉDIO TÉCNICO EM INFORMÁTICA",
                         "· Duração: 2013 - 2016",
                         "· Instituição de ensino: Centro de Educação Profissional Irmão Mario Cristóvão",
                         "BACHARELADO EM CIÊNCIA DA COMPUTAÇÃO",
                         "· Duração: 2017 – 2021 (previsão de conclusão)",
                         "· Instituição de ensino: Pontifícia Universidade Católica do Paraná"],
            "tituloObjetivos": "Objetivos",
            "objetivos": "Atuar no setor de tecnologia da informação, \
                          na área de desenvolvimento, tanto quanto software ou web. \
                          Sempre em busca de ampliar meus conhecimentos \
                          e crescimento tanto na vida pessoal como profissional, \
                          com a maior qualidade e honestidade em minhas atividades",
            "tituloExperiencia": "Experiência",
            "experiencia": ["ESTAGIÁRIO EM PROGRAMAÇÃO | SELETTRA | AGOSTO 2018 – SETEMBRO 2018",
                            "· Fui responsável por auxiliar na programação, criação de interface gráfica e montagem de agvs.",
                            "ESTAGIÁRIO EM PROGRAMAÇÃO | VEGOOR | FEVEREIRO 2019 – FEVEREIRO 2020",
                            "· Desenvoli softwares em python, um sistema web em php/javascript e \
                            também fui responsável manutenção de computadores e auxílio ao usuário.",
                            "ESTAGIÁRIO EM TI | RENTCARS | FEVEREIRO 2020 – AGOSTO 2020",
                            "· Responsável por prestar auxílio ao usuário através \
                            de um sistema de chamados, e acompanhar atividades de devops, \
                            como deploys e utilização de computação em nuvem, neste caso a aws.",
                            "FREELANCES",
                            "· Desenvolvimento de software em python para plotagem de gráficos num \
                            arquivo do excel a partir de arquivos .csv",
                            "· Desenvolvimento de software em javascript para laudo de óleo isolante para transformadores.",
                            "· Desenvolvimento de software em javascript para contagem de produtos em esteiras."],
           "tituloHabilidades": "Habilidades",
           "habilidades": [["Língua Inglesa", "4"], ["Linguagem C", "3"], ["Linguagem C++", "2"], ["Linguagem VBA", "2"],
                           ["Linguagem Java", "4"], ["Linguagem Javascript", "3"], ["Linguagem Python", "4"],
                           ["Linguagem PHP", "3"], ["AWS", "1"], ["Docker", "2"], ["Eletrônica", "1"], ["Arduino", "2"],
                           ["Raspberry pi", "2"], ["MySQL", "3"], ["UML", "3"], ["Tratamento de imagem", "3"],
                           ["Tratamento de vídeo", "3"], ["Linux", "4"]],
           "tituloAtividadesExtras": "Atividades Extracurriculares",
           "atividadesExtras": ["· Participei do movimento escoteiro (2015 - 2019)",
                                "· Possuo habilitação do tipo B",
                                "· Participei da global game jam em 2018 e 2019 (abaixo link para os jogos desenvolidos nela)",
                                "- 2018: https://globalgamejam.org/2018/games/bombard",
                                "- 2019: https://globalgamejam.org/2019/games/sap%C3%A9-enquanto-houver-casa",
                                "· Guitarra"],
           "nivelMinHabilidade": "Newba",
           "nivelMaxHabilidade": "Proeficiente"
        },
        1: {
            "tituloPagina": "Matheus Wilhelm Siqueira Curriculum",
            "tituloTelefone": "Telephone",
            "tituloDataNascimento": "Birth Date",
            "dataNascimento": "08/30/1998",
            "tituloContato": "Contact Information",
            "tituloSobreMim": "About me",
            "sobreMim": "Born in Curitiba, I always loved technology and had \
                         really early contact with it. I started pursuing my dream \
                         when I started IT technician high school. Later on I \
                         started studing compuer science, which I'm still studing",
            "tituloEducacao": "Education",
            "educacao": ["IT TECHNICIAN HIGH SCHOOL",
                         "· Duration: 2013 - 2016",
                         "· Educational Institution: Centro de Educação Profissional Irmão Mario Cristóvão",
                         "BACHELOR IN COMPUTER SCIENCE",
                         "· Duration: 2017 – 2021 (completion forecast)",
                         "· Educational Institution: Pontifícia Universidade Católica do Paraná"],
            "tituloObjetivos": "Goals",
            "objetivos": "Act in IT sector on software development area, \
                          as far as software or web. Always looking to learn \
                          new things, personal and professional growth, \
                          with quality and honesty in my activities",
            "tituloExperiencia": "Experience",
            "experiencia": ["PROGRAMMING INTERN | SELETTRA | AUGUST 2018 – SEPTEMBER 2018",
                            "· I was responsable for auxiliating in programming, ui programming and assembling of agvs",
                            "PROGRAMMING INTERN | VEGOOR | FEBRUARY 2019 – FEBRUARY 2020",
                            "· I developed python softwares, a php/javascript web application and \
                            also was responsable for maintaining computers and user assistance",
                            "IT INTERN | RENTCARS | FEBRUARY 2020 – AUGUST 2020",
                            "· I was responsable for user assistance, assisting devops activities \
                            such as deploys and cloud computing using aws",
                            "FREELANCES",
                            "· Python software that plots .csv data in excel sheets",
                            "· Javascript software for insulating oil report for transfomers",
                            "· Javascript software to count products in production lines"],
           "tituloHabilidades": "Skills",
           "habilidades": [["English Language", "4"], ["C Language", "3"], ["C++ Language", "2"], ["VBA Language", "2"],
                           ["Java Language", "4"], ["Javascript Language", "3"], ["Python Language", "4"],
                           ["PHP Language", "3"], ["AWS", "1"], ["Docker", "2"], ["Electronics", "1"], ["Arduino", "2"],
                           ["Raspberry pi", "2"], ["MySQL", "3"], ["UML", "3"], ["Photoshop", "3"],
                           ["Video editing", "3"], ["Linux", "4"]],
           "tituloAtividadesExtras": "Extracurricular Activities",
           "atividadesExtras": ["· Scout movement (2015 - 2019)",
                                "· 'B type' (car) drive license",
                                "· Participated in the global game jam in 2018 and 2019 (link below to the games developed)",
                                "- 2018: https://globalgamejam.org/2018/games/bombard",
                                "- 2019: https://globalgamejam.org/2019/games/sap%C3%A9-enquanto-houver-casa",
                                "· Electric Guitar"],
            "nivelMinHabilidade": "Newba",
            "nivelMaxHabilidade": "Pro 8)"
        }
      }
    };

    this.mudaLinguagem = this.mudaLinguagem.bind(this);
  }

  mudaLinguagem(opc){
    this.setState({linguagem: this.state.linguagem == 0 ? 1 : 0});
    //Depois descomentar essa linha de baixo e apagar as de cima
    //this.setState({linguagem: opc});
  }

  render(){
    const habilidades = [];
    const atividadesExtras = [];
    let maxHabilidades = this.state.textos[this.state.linguagem]["habilidades"].length;
    let maxAtividadesExtras = this.state.textos[this.state.linguagem]["atividadesExtras"].length;

    //Parada para imprimir todas as habilidades de forma melhor, assim é só adicionar
    //uma nova habilidade no state de textos que sempre vai imprimir bonito na tela
    for(let i = 0; i < maxHabilidades - 1; i += 2){
      habilidades.push(<Row key={i}>
                        <Col>
                          <Habilidade titulo={this.state.textos[this.state.linguagem]["habilidades"][i][0]}
                                      nivel={this.state.textos[this.state.linguagem]["habilidades"][i][1]}
                                      min={this.state.textos[this.state.linguagem]["nivelMinHabilidade"]}
                                      max={this.state.textos[this.state.linguagem]["nivelMaxHabilidade"]}/>
                        </Col>
                        <Col>
                          <Habilidade titulo={this.state.textos[this.state.linguagem]["habilidades"][i+1][0]}
                                      nivel={this.state.textos[this.state.linguagem]["habilidades"][i+1][1]}
                                      min={this.state.textos[this.state.linguagem]["nivelMinHabilidade"]}
                                      max={this.state.textos[this.state.linguagem]["nivelMaxHabilidade"]}/>
                        </Col>
                       </Row>);


    }

    if(maxHabilidades % 2 == 1){
      habilidades.push(<Row key={maxHabilidades}>
                        <Col>
                          <Habilidade titulo={this.state.textos[this.state.linguagem]["habilidades"][maxHabilidades - 1][0]}
                                      nivel={this.state.textos[this.state.linguagem]["habilidades"][maxHabilidades - 1][1]}
                                      min={this.state.textos[this.state.linguagem]["nivelMinHabilidade"]}
                                      max={this.state.textos[this.state.linguagem]["nivelMaxHabilidade"]}/>
                        </Col>
                        <Col>
                        </Col>
                       </Row>);
    }

    for(let i = 0; i < maxAtividadesExtras; i ++){
      atividadesExtras.push(<span key={i}>
                              {this.state.textos[this.state.linguagem]["atividadesExtras"][i]}<br/>
                            </span>);
    }

    return(
      <div>
        <Container fluid className="containerSidebar">
          <Row>
            <Col xs={3} onClick={() => this.mudaLinguagem(1)}>
              <Sidebar />
            </Col>
            <Col>
              <Row>
                <Col>
                  <br/>
                  <TituloCurriculo texto={this.state.textos[this.state.linguagem]["tituloPagina"]}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <LinhaSeparadora/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <TituloCurriculo texto={this.state.textos[this.state.linguagem]["tituloSobreMim"]}/>

                  <span>
                    {this.state.textos[this.state.linguagem]["sobreMim"]}
                  </span>
                </Col>
                <Col>
                  <TituloCurriculo texto={this.state.textos[this.state.linguagem]["tituloContato"]}/>

                  <span>
                    E-mail: siqueirawm@hotmail.com
                  </span>
                  <br/>
                  <span>
                    {this.state.textos[this.state.linguagem]["tituloTelefone"]}
                    : (41)99144-3360
                  </span>
                  <br/>
                  <span>
                    {this.state.textos[this.state.linguagem]["tituloDataNascimento"]}
                    : {this.state.textos[this.state.linguagem]["dataNascimento"]}
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
                  <TituloCurriculo texto={this.state.textos[this.state.linguagem]["tituloEducacao"]}/>

                  <span>
                    <b>{this.state.textos[this.state.linguagem]["educacao"][0]}</b><br/>
                    {this.state.textos[this.state.linguagem]["educacao"][1]}<br/>
                    {this.state.textos[this.state.linguagem]["educacao"][2]}<br/>
                    <b>{this.state.textos[this.state.linguagem]["educacao"][3]}</b><br/>
                    {this.state.textos[this.state.linguagem]["educacao"][4]}<br/>
                    {this.state.textos[this.state.linguagem]["educacao"][5]}<br/>
                  </span>
                </Col>
                <Col>
                  <TituloCurriculo texto={this.state.textos[this.state.linguagem]["tituloObjetivos"]}/>

                  <span>
                    {this.state.textos[this.state.linguagem]["objetivos"]}
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
                  <TituloCurriculo texto={this.state.textos[this.state.linguagem]["tituloExperiencia"]}/>

                  <span>
                    <b>{this.state.textos[this.state.linguagem]["experiencia"][0]}</b><br/>
                    {this.state.textos[this.state.linguagem]["experiencia"][1]}<br/>
                    <b>{this.state.textos[this.state.linguagem]["experiencia"][2]}</b><br/>
                    {this.state.textos[this.state.linguagem]["experiencia"][3]}<br/>
                    <b>{this.state.textos[this.state.linguagem]["experiencia"][4]}</b><br/>
                    {this.state.textos[this.state.linguagem]["experiencia"][5]}<br/>
                    <b>{this.state.textos[this.state.linguagem]["experiencia"][6]}</b><br/>
                    {this.state.textos[this.state.linguagem]["experiencia"][7]}<br/>
                    {this.state.textos[this.state.linguagem]["experiencia"][8]}<br/>
                    {this.state.textos[this.state.linguagem]["experiencia"][9]}<br/>
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
                  <TituloCurriculo texto={this.state.textos[this.state.linguagem]["tituloHabilidades"]}/>

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
                  <TituloCurriculo texto={this.state.textos[this.state.linguagem]["tituloAtividadesExtras"]}/>

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

export default Home;
