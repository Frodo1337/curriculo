import React, {Component} from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Habilidade extends Component{
  constructor(props){
    super(props);

    this.state = {
      id: ""
    };
  }

  componentDidMount(){
    let id = this.props.titulo.replace(" ", "");

    for(let i = 1; i <= this.props.nivel; i++){
      document.getElementById(id + i).classList.add("bg-success");
    }
  }

  render(){
    let id = this.props.titulo.replace(" ", "");

    return(
      <div>
        <Container fluid>
          <Row>
            <Col className="text-center">
              <span>
                {this.props.titulo}
              </span>
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <span>
                {this.props.min}
              </span>
            </Col>
            <Col className='barra' id={id + '1'}>
            </Col>
            <Col className='barra' id={id + '2'}>
            </Col>
            <Col className='barra' id={id + '3'}>
            </Col>
            <Col className='barra' id={id + '4'}>
            </Col>
            <Col className='barra' id={id + '5'}>
            </Col>
            <Col>
              <span>
                {this.props.max}
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Habilidade;
