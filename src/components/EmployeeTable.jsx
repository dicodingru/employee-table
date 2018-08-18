import React, { Component } from 'react';
import EmployeeTableHeader from './EmployeeTableHeader';
import EmployeeTableBody from './EmployeeTableBody';

class EmployeeTable extends Component {
  render() {
    return (
      <table className="table">
        <EmployeeTableHeader />
        <EmployeeTableBody employees={this.props.employees} />
      </table>
    );
  }
}

export default EmployeeTable;
