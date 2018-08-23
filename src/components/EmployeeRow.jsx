import React from 'react';
import PropTypes from 'prop-types';

const roleDict = {
  cook: 'Повар',
  driver: 'Водитель',
  waiter: 'Официант',
};

const EmployeeRow = ({ employee }) => (
  <tr>
    <th scope="row">{employee.name}</th>
    <td>{roleDict[employee.role]}</td>
    <td>{employee.phone}</td>
    <td>{employee.birthday}</td>
  </tr>
);

EmployeeRow.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isArchive: PropTypes.bool,
    role: PropTypes.string,
    phone: PropTypes.string,
    birthday: PropTypes.string,
  }).isRequired,
};

export default EmployeeRow;
