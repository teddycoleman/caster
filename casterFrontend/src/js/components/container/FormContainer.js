import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';
import Input from "../presentational/Input";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zipcode: "",
      amount: 0,
      rate_percent: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { first_name, last_name, address, city, state, country, zipcode, amount, rate_percent } = this.state;
    return (
      <div>
        <h1>Create a new eNote</h1>
        <form id="enote-form">
          <h2> Borrow Information </h2>
          <Input
            text="Borrower First Name"
            label="first_name"
            type="text"
            id="first_name"
            value={first_name}
            handleChange={this.handleChange}
          />
          <Input
            text="Borrower Last Name"
            label="last_name"
            type="text"
            id="last_name"
            value={last_name}
            handleChange={this.handleChange}
          />
          <Input
            text="Address"
            label="address"
            type="text"
            id="address"
            value={address}
            handleChange={this.handleChange}
          />
          <Input
            text="City"
            label="city"
            type="text"
            id="city"
            value={city}
            handleChange={this.handleChange}
          />
          <Input
            text="State"
            label="state"
            type="text"
            id="state"
            value={state}
            handleChange={this.handleChange}
          />
          <Input
            text="Country"
            label="country"
            type="text"
            id="country"
            value={country}
            handleChange={this.handleChange}
          />
          <Input
            text="Zip Code"
            label="zipcode"
            type="text"
            id="zipcode"
            value={zipcode}
            handleChange={this.handleChange}
          />
          <h2> Terms of Loan </h2>
          <Input
            text="Loan amount"
            label="amount"
            type="number"
            id="amount"
            value={amount}
            handleChange={this.handleChange}
          />          
          <Input
            text="Rate Percent"
            label="rate_percent"
            type="number"
            id="rate_percent"
            value={rate_percent}
            handleChange={this.handleChange}
          />
          <Button type="submit">Create New eNote</Button>
        </form>
        <br />
      </div>
    );
  }
}
export default FormContainer;
