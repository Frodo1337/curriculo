import React, {Component} from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";

import Bandeira from "../../Componentes/Bandeira/Bandeira.js";

import iconeGithub from "./img/githubIcon.svg";

class Sidebar extends Component{
  constructor(props){
    super(props);
    //<img src={iconeGithub}/>
  }

  render(){
    return(
      <div>
        <Nav className="col-md-12 d-none d-md-block sidebar" activeKey="/home">
          <div className="sidebar-sticky"></div>
          <Nav.Item>
            <Bandeira tipo="brasil" />
            <Bandeira tipo="eua" />
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/curriculo" className="text-light">Currículo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/porfolio" className="text-light">Porfólio</Nav.Link>
          </Nav.Item>
          <Nav.Item>

          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
