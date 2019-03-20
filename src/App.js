import React, { Component } from 'react';

const Input = props => <input type="text" {...props} />

const fields = [
  { name: "company", placeholder: "Company" },
  { name: "email", placeholder: "Email" },
  { name: "firstName", placeholder: "First Name" },
  { name: "lastName", placeholder: "First Name" }
];

class App extends Component {
  state = { firstName: "", lastName: "", email: "", company: "" };
    
  handleChange = ({ target: {name, value} }) => this.setState({ [name]: value });
    
  handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(this.state, null, 4));
  }
    
  render = () => (
    <form onSubmit={this.handleSubmit}>
      {fields.map(props => <Input key="props.name" onChange={this.handleChange} {...props}/>)}   
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
