import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { first_name, last_name } = this.state;
    return (
      <form id="enote-form">
        <Input
          text="First Name"
          label="first_name"
          type="text"
          id="first_name"
          value={first_name}
          handleChange={this.handleChange}
        />
        <Input
          text="Last Name"
          label="last_name"
          type="text"
          id="last_name"
          value={last_name}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-enote-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
