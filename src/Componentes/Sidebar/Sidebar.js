import React, {Component} from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";

import Bandeira from "../../Componentes/Bandeira/Bandeira.js";

class Sidebar extends Component{
  constructor(props){
    super(props);

    this.state = {
      linguagem: 0
    };
  }

  render(){
    return(
      <div>
        <Nav className="col-md-12 d-none d-md-block sidebar" activeKey="/home">
          <div className="sidebar-sticky"></div>
          <br/>
          <Nav.Item>
            <Nav.Link href="/#/" className="text-light">
              <span>
                {this.props.textos["home"]}
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#/curriculo" className="text-light">
              <span>
                {this.props.textos["curriculo"]}
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#/portfolio" className="text-light">
              <span>
                {this.props.textos["portfolio"]}
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="bandeiras">
            <div onClick={() => this.props.mudaLinguagem(0)}>
              <Bandeira tipo="brasil" />
            </div>
            <div onClick={() => this.props.mudaLinguagem(1)}>
              <Bandeira tipo="eua"/>
            </div>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
