import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import { useTable } from 'react-table';

class Employees extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    API.getRandomTeam()
      .then(res => this.setState({ employees: res.data.message.results}))
      .catch(err => console.log(err));
  }

  render() {
    
    return (
      <div>
      </div>
    );
  }
}

export default Employees;
