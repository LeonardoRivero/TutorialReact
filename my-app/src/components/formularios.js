import React, { Component, useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
//import { request_get } from '../scripts/request_fuck';
import Request from '../scripts/Request';


export function Formulario() {
  const [form, setform] = useState({})
  const handleChange = e => {
    setform({
      ...form, [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = e => {
    e.prevenDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" onChange={handleChange}>
        </input>
      </form>
    </>
  )
}

export class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saludo: 'Please ',
      nombre: "",
      allData: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    let request = new Request()
    let response = await request.get("https://pokeapi.co/api/v2/pokemon/ditto")
    console.log(response);
    this.state.allData = await response
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("update", prevProps, prevState)
    if (this.props.saludo !== prevProps.saludo) {
      console.log(this.props, "entro")
    }
    else {
      console.log(this.state.saludo, "entro else")
    }
  }

  handleChange(event) {
    // this.setState({ value: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state)
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          {/* <textarea name="texto" value={this.state.value} onChange={this.handleChange} /> */}
          <textarea name="saludo" value={this.state.saludo} onChange={this.handleChange} />
        </label>
        <input type="text" name="nombre" onChange={this.handleChange}>
        </input>
        <input type="submit" value="Submit" />
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            type="text" name="nombre" onChange={this.handleChange}
          />
        </InputGroup>

      </form>
    );
  }
}