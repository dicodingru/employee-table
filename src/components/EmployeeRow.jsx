import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const roleDict = {
  cook: 'Повар',
  driver: 'Водитель',
  waiter: 'Официант',
};

const EmployeeRow = ({ employee }) => (
  <tr>
    <th scope="row">
      <Link to={`/edit/${employee.id}`}>{employee.name}</Link>
    </th>
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
