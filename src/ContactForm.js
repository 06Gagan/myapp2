import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { Username: "", Email: "", PhoneNumber: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(
      `Your Username is: ${this.state.Username}, Email: ${this.state.Email}, Phone Number: ${this.state.PhoneNumber}`
    );
    this.setState({ Username: "", Email: "", PhoneNumber: "" });
  }

  render() {
    return (
      <div>
        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="Username"
            placeholder="Enter your Username"
            value={this.state.Username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="Email"
            placeholder="Enter your Email"
            value={this.state.Email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="PhoneNumber"
            placeholder="Enter your Phone Number"
            value={this.state.PhoneNumber}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
