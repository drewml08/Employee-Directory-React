import React, { Component } from "react";
import API from "../utils/API";
import EmployeeTable from "../components/EmployeeTable";

class Employees extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    API.getRandomTeam()
      .then(res => this.setState({ employees: res.data.results}))
      .catch(err => console.log(err));
  }

  render() {
    
    return (
      
      <EmployeeTable data = {this.state.employees}>
      </EmployeeTable>
      
    );
  }
}

export default Employees;
