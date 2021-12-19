import React, { Component, useState } from 'react';


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
      value: 'Please ',
      nombre: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value, event.target.name)
    // this.setState({ value: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
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
          <textarea name="value" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="text" name="nombre" onChange={this.handleChange}>
        </input>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}