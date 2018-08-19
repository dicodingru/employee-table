import React, { Component } from 'react';

const roleDict = {
  cook: 'Повар',
  driver: 'Водитель',
  waiter: 'Официант',
};
class EmployeeRow extends Component {
  state = {};
  render() {
    const { employee } = this.props;
    return (
      <tr>
        <th scope="row">{employee.name}</th>
        <td>{roleDict[employee.role]}</td>
        <td>{employee.phone}</td>
        <td>{employee.birthday}</td>
      </tr>
    );
  }
}

export default EmployeeRow;
