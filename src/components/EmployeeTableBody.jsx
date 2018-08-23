import React from 'react';
import PropTypes from 'prop-types';
import EmployeeRow from './EmployeeRow';

const EmployeeTableBody = ({ employees }) => (
  <tbody>
    {employees.map((e) => (
      <EmployeeRow key={e.id} employee={e} />
    ))}
  </tbody>
);

EmployeeTableBody.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default EmployeeTableBody;
