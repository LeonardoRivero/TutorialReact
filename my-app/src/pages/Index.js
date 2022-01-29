import React, { Component } from 'react';
import { Formulario, EssayForm } from '../components/formularios';
import { Avatar, Welcome } from '../components/avatar'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap'
import Aside from '../components/sideBar'
const data = { name: "Esta es avatar", avatarUrl: "https://www.digitalludhiana.com/img/services/icons/digital-marketing.png" }

export default class Index extends Component {
  render() {
    return (
      <div className="app">
        <Avatar user={data} />
        {/* <Welcome name="Matias"></Welcome>
        <Avatar user={data} />
        <Formulario></Formulario>
        <EssayForm></EssayForm>
        <Link to="/clock">
          <Button variant="outline-primary">
            Click Me Bootr!
          </Button>
        </Link>
        <Row className="mx-0">
          <Button as={Col} variant="primary">Button #1</Button>
          <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
          <Button as={Col} variant="success">Button #3</Button>
        </Row>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              1 of 3
            </Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
            </Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
            </Col>
          </Row>
        </Container> */}
      </div>
    )
  }
}