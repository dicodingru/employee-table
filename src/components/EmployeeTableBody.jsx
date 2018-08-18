import React, { Component } from 'react';
import EmployeeRow from './EmployeeRow';

class EmployeeTableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.employees.map((e) => (
          <EmployeeRow key={e.id} employee={e} />
        ))}
      </tbody>
    );
  }
}

export default EmployeeTableBody;
